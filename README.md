# 🚀 Proyecto Anthsoft - Setup Inicial

¡Hola, equipo!  
Aquí les dejo los comandos y pasos necesarios para que el proyecto funcione correctamente en su máquina.  
Sigan esta guía paso a paso y todo debería correr sin problemas 🔧

---

## 📦 Instalación de Dependencias

### 1. Dependencias Principales

```bash
npm install express ejs dotenv
```

- `express`: Servidor backend.
- `ejs`: Motor de plantillas para las vistas.
- `dotenv`: Manejo de variables de entorno.

---

### 2. Dependencias de Desarrollo

```bash
npm install -D typescript ts-node nodemon
```

- `typescript`: Lenguaje base del proyecto.
- `ts-node`: Ejecuta archivos `.ts` sin necesidad de compilarlos antes.
- `nodemon`: Recarga el servidor cuando detecta cambios automáticamente.

---

### 3. Tipados para TypeScript

```bash
npm install -D @types/express @types/ejs @types/node
```

- Tipos necesarios para que TypeScript reconozca `Request`, `Response`, y APIs de Node.js.

---

## 🧱 Estructura del Proyecto

```
anthsoft-site/
│
├── public/                # Archivos estáticos
├── src/
│   ├── views/             # Vistas EJS
│   ├── routes/            # Rutas de Express
│   ├── controllers/       # Controladores
│   ├── middleware/        # Middlewares (si se usan)
│   ├── db/                # Conexión a base de datos (si aplica)
│   ├── types/             # Definiciones de TypeScript
│   ├── app.ts             # Configuración principal de Express
│   └── server.ts          # Punto de entrada del servidor
├── .env                   # Variables de entorno
├── package.json
├── tsconfig.json
└── README.md              # Este archivo 😉
```

---

## 🏁 ¿Cómo iniciar el proyecto?

1. Asegúrate de estar dentro del directorio del proyecto:

```bash
cd anthsoft-site
```

2. Instala todas las dependencias:

```bash
npm install
```

3. Inicia el servidor backend:

```bash
npm run dev
```

4. Abre tu navegador en:  
[http://localhost:3000](http://localhost:3000)

---

## 🤝 ¿Dudas o errores?

Si algo no funciona:
- Verifica que tienes Node.js instalado
- Revisa que estés en la carpeta correcta
- Manda mensaje al grupo con captura o error completo

---

Hecho con 💻 por el equipo Anthsoft
