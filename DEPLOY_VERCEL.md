# Guía de Despliegue ProyectoV14 (REMOTE) en Vercel

## 📋 Pre-requisitos

- Cuenta en GitHub
- Cuenta en Vercel (puedes usar tu cuenta de GitHub)
- Git instalado localmente

## 🚀 Paso 1: Subir a GitHub

```bash
# Navegar al directorio del proyecto
cd /Users/leuzga/AngularStudies/modularfederation/ProyectoV14

# Inicializar repositorio git
git init

# Agregar todos los archivos
git add .

# Crear commit inicial
git commit -m "Initial commit: ProyectoV14 - Angular 14 REMOTE for Module Federation"

# Crear repositorio en GitHub (manualmente en github.com)
# Luego conectar:
git remote add origin https://github.com/TU_USUARIO/proyecto-v14-remote.git

# Subir código
git push -u origin main
```

## 🌐 Paso 2: Desplegar en Vercel

### Opción A: Via Web (Recomendado para principiantes)

1. Ve a [vercel.com](https://vercel.com) e inicia sesión
2. Click en "Add New Project"
3. Importa tu repositorio `proyecto-v14-remote`
4. Configura:
   - **Framework Preset**: Angular
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/proyecto-v14`
5. Click en "Deploy"

### Opción B: Via CLI

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Navegar al proyecto
cd ProyectoV14

# Deploy
vercel --prod
```

## ✅ Paso 3: Verificar Despliegue

Una vez desplegado, verifica que estos archivos sean accesibles:

```
https://tu-proyecto-v14.vercel.app/
https://tu-proyecto-v14.vercel.app/remoteEntry.js  ← Este es el crítico
```

### Verificar CORS

Abre la consola del navegador en tu V19 local y ejecuta:

```javascript
fetch('https://tu-proyecto-v14.vercel.app/remoteEntry.js')
  .then(r => console.log('✅ CORS OK'))
  .catch(e => console.log('❌ CORS Error:', e))
```

## 🔧 Configuración de V19 (HOST)

Una vez tengas la URL de V14, actualiza V19:

**ProyectoV19/webpack.config.js**:
```javascript
remotes: {
  "proyectoV14": "https://tu-proyecto-v14.vercel.app/remoteEntry.js",
}
```

## 📁 Archivos Importantes

| Archivo | Propósito |
|---------|-----------|
| `vercel.json` | Configuración de CORS y build |
| `webpack.config.js` | Exposición de módulos |
| `package.json` | Scripts de build |

## 🐛 Solución de Problemas

### Error: "remoteEntry.js not found"
- Verifica que el build generó el archivo
- Revisa que `outputDirectory` en vercel.json sea correcto

### Error: CORS
- Verifica que `vercel.json` tenga la configuración de headers
- Prueba acceder directamente a la URL con el navegador

### Error: "Cannot find module"
- Verifica que los paths en `webpack.config.js` sean correctos
- Asegúrate de que los módulos estén en `exposes`

## 📝 URLs Esperadas después del deploy

| Entorno | URL |
|---------|-----|
| Producción V14 | `https://proyecto-v14-remote.vercel.app` |
| remoteEntry.js | `https://proyecto-v14-remote.vercel.app/remoteEntry.js` |
| Desarrollo V14 | `http://localhost:4201` |

## 🎯 Siguiente Paso

Una vez V14 esté en Vercel, repite el proceso para V19 actualizando la URL del remoto.
