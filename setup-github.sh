#!/bin/bash

echo "🚀 Configuración de GitHub para ProyectoV14"
echo "==========================================="
echo ""

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No estás en el directorio de ProyectoV14"
    echo "   Navega a: cd /Users/leuzga/AngularStudies/modularfederation/ProyectoV14"
    exit 1
fi

echo "✅ Verificando directorio..."
echo ""

# Inicializar git si no existe
if [ ! -d ".git" ]; then
    echo "📝 Inicializando repositorio git..."
    git init
    echo "✅ Repositorio inicializado"
else
    echo "✅ Repositorio git ya existe"
fi

echo ""
echo "📝 Agregando archivos..."
git add .

echo ""
echo "💾 Creando commit..."
git commit -m "Initial commit: ProyectoV14 Angular 14 REMOTE for Module Federation

Features:
- UsersModule exposed
- ReportsModule exposed
- Configured for Vercel deployment
- CORS enabled for cross-origin requests
"

echo ""
echo "==============================================="
echo "✅ Repositorio local listo"
echo ""
echo "📋 Siguiente pasos MANUALES:"
echo ""
echo "1. Ve a https://github.com/new"
echo "2. Crea un repositorio nuevo llamado 'proyecto-v14-remote'"
echo "3. NO inicialices con README ni .gitignore"
echo "4. Copia la URL del repositorio (HTTPS o SSH)"
echo ""
echo "5. Ejecuta estos comandos:"
echo ""
echo "   git remote add origin https://github.com/TU_USUARIO/proyecto-v14-remote.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "6. Ve a https://vercel.com/new e importa el repositorio"
echo "==============================================="
