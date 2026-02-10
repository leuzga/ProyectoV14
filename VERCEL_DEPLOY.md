# Despliegue en Vercel - ProyectoV14 (Module Federation REMOTE)

## Resumen de Cambios Realizados

### 1. Fix del Build (angular.json)
**Problema:** El builder `@angular-architects/module-federation:build` ejecutaba el build pero no generaba la carpeta `dist/`.

**Solución:** Cambiar el builder a `ngx-build-plus:browser`:

```json
"build": {
  "builder": "ngx-build-plus:browser",
  ...
}
```

### 2. Configuración de Vercel (vercel.json)
Se creó el archivo `vercel.json` con:
- **outputDirectory:** `dist/proyecto-v14` - Carpeta donde se generan los archivos
- **CORS Headers:** Permitir acceso desde cualquier origen (necesario para Module Federation)
- **Rewrites:** Configuración de rutas para SPA y `remoteEntry.js`

## Archivos Generados/Modificados

```
ProyectoV14/
├── angular.json          # ← Builder cambiado a ngx-build-plus:browser
├── vercel.json           # ← Nuevo: Configuración para Vercel
├── webpack.config.js     # ← Configuración Module Federation (dev)
├── webpack.prod.config.js # ← Configuración Module Federation (prod)
└── dist/
    └── proyecto-v14/
        ├── remoteEntry.js    # ← Entry point para Module Federation
        ├── index.html
        ├── main.*.js
        ├── polyfills.*.js
        └── ... (chunks)
```

## Build de Producción

```bash
cd ProyectoV14
npm run build
# o para forzar producción:
npm run build -- --configuration production
```

Salida esperada en `dist/proyecto-v14/`:
- `remoteEntry.js` - Entry point de Module Federation (6.39 kB)
- `index.html` - Página principal
- `main.*.js` - Bundle principal
- `polyfills.*.js` - Polyfills
- `*.js` - Chunks lazy-loaded (UsersModule, ReportsModule, etc.)

## Despliegue en Vercel

### Opción 1: CLI de Vercel

```bash
# Instalar Vercel CLI si no lo tienes
npm i -g vercel

# Desplegar
cd ProyectoV14
vercel

# Configurar como producción
vercel --prod
```

### Opción 2: Git Integration

1. Sube el código a GitHub/GitLab/Bitbucket
2. Importa el proyecto en [vercel.com](https://vercel.com)
3. Configura:
   - **Framework Preset:** Other
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/proyecto-v14`
4. Deploy!

## URLs Importantes después del Deploy

Una vez desplegado, las URLs serán:

| Recurso | URL |
|---------|-----|
| Aplicación | `https://<tu-proyecto>.vercel.app` |
| remoteEntry.js | `https://<tu-proyecto>.vercel.app/remoteEntry.js` |
| UsersModule | `https://<tu-proyecto>.vercel.app/remoteEntry.js` → expone `./UsersModule` |
| ReportsModule | `https://<tu-proyecto>.vercel.app/remoteEntry.js` → expone `./ReportsModule` |

## Configuración en ProyectoV19 (HOST)

Después de desplegar V14, actualiza el `webpack.config.js` de V19:

```javascript
module.exports = withModuleFederationPlugin({
  name: 'proyectoV19',
  remotes: {
    // URL de Vercel de ProyectoV14
    "proyectoV14": "https://<tu-proyecto-v14>.vercel.app/remoteEntry.js",
  },
  shared: {
    ...share({
      "rxjs": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
      "tslib": { singleton: true, strictVersion: false, requiredVersion: 'auto' }
    })
  }
});
```

## Verificación Post-Deploy

Verifica que el `remoteEntry.js` esté accesible:

```bash
# Debe retornar el archivo JavaScript
curl https://<tu-proyecto>.vercel.app/remoteEntry.js

# Verificar CORS
curl -I https://<tu-proyecto>.vercel.app/remoteEntry.js
# Debe mostrar: Access-Control-Allow-Origin: *
```

## Notas Importantes

1. **CORS:** El `remoteEntry.js` debe tener headers CORS permitiendo el acceso desde el dominio de V19
2. **Chunks:** Todos los archivos `.js` generados deben estar accesibles públicamente
3. **Cache:** El `remoteEntry.js` tiene `Cache-Control: public, max-age=0, must-revalidate` para evitar problemas de caché
4. **HTTPS:** Vercel usa HTTPS, asegúrate de que V19 también use HTTPS para evitar problemas de mixed content

## Solución de Problemas

### El build no genera archivos
- Verificar que `angular.json` use `"builder": "ngx-build-plus:browser"`
- Ejecutar `rm -rf dist node_modules && npm install && npm run build`

### Error 404 en remoteEntry.js
- Verificar que `vercel.json` tenga el `outputDirectory` correcto: `dist/proyecto-v14`
- Asegurar que el archivo `remoteEntry.js` esté en la lista de archivos generados

### Problemas de CORS
- Verificar que `vercel.json` incluya los headers `Access-Control-Allow-Origin: *`
- El HOST (V19) debe poder acceder al REMOTE (V14) sin restricciones CORS

### Module Federation no carga los módulos
- Verificar que la URL del `remoteEntry.js` sea accesible públicamente
- Asegurar que todos los chunks `.js` estén en el mismo directorio que `remoteEntry.js`
- Verificar en DevTools → Network que los archivos se carguen correctamente

---

**Fecha de actualización:** 2026-02-10  
**Versión Angular:** 14.2.0  
**Module Federation:** @angular-architects/module-federation ^14.3.14