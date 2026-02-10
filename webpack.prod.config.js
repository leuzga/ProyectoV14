const { share, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  // ProyectoV14 es el REMOTE - Expone módulos para ser consumidos
  name: 'proyectoV14',
  
  filename: 'remoteEntry.js',
  
  exposes: {
    // Exponemos los módulos que serán consumidos por V19
    './UsersModule': './src/app/users/users.module.ts',
    './ReportsModule': './src/app/reports/reports.module.ts',
    './AppComponent': './src/app/app.component.ts',
    './AppModule': './src/app/app.module.ts'
  },
  
  shared: {
    // Solo compartir rxjs y tslib - NO compartir Angular entre versiones diferentes
    ...share({
      "rxjs": { singleton: true, strictVersion: false, requiredVersion: 'auto' },
      "tslib": { singleton: true, strictVersion: false, requiredVersion: 'auto' }
    })
    // NOTA: No compartimos @angular/* porque Angular 14 y 19 son incompatibles
  }
});
