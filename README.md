# 🚀 Proyecto Anthsoft - Setup Inicial

¡Hola, equipo!  
Aquí les dejo la guía oficial para clonar y correr el proyecto correctamente.  
Sigan los pasos y asegúrense de tener Node.js instalado. ¡Vamos con todo! ⚙️

---

## 📦 Instalación de Dependencias

### 1. Dependencias Principales

```bash
npm install express ejs dotenv
```

- `express`: Framework para servidor backend (v5).
- `ejs`: Motor de plantillas para vistas.
- `dotenv`: Variables de entorno.

---

### 2. Dependencias de Desarrollo

```bash
npm install -D typescript ts-node nodemon
```

- `typescript`: Base del proyecto.
- `ts-node`: Ejecuta `.ts` sin compilar manualmente.
- `nodemon`: Recarga automática del servidor al detectar cambios.

---

### 3. Tipados para TypeScript

```bash
npm install -D @types/express @types/ejs @types/node
```

- Tipos necesarios para que TypeScript reconozca `Request`, `Response`, y APIs de Node.

---

## 🧱 Estructura del Proyecto

```
anthsoft-site/
│
├── public/                  # Archivos estáticos (CSS, imágenes, JS)
├── src/
│   ├── views/               # Plantillas EJS
│   │   ├── partials/        # Encabezado, pie, navbar
│   │   └── pages/           # Home, login, dashboard
│   ├── routes/              # Rutas de Express (importadas en server.ts)
│   ├── controllers/         # Lógica que manejan las rutas
│   ├── middlewares/         # Middlewares personalizados
│   ├── helpers/             # Funciones auxiliares (formateo, validaciones)
│   ├── types/               # Definiciones TypeScript personalizadas
│   └── server.ts            # Punto de entrada principal
├── .env                     # Variables como PUERTO o claves secretas
├── tsconfig.json            # Configuración TS
├── package.json
└── README.md                # Este archivo 😉
```

---

## ⚙️ Scripts

### Para iniciar el servidor en modo desarrollo

```bash
npm run dev
```

Este comando:
- Usa `ts-node` con soporte ESM
- Ejecuta `src/server.ts`
- Recarga en caliente al guardar cambios

---

## 🏁 ¿Cómo ejecutar el proyecto?

1. Abre la terminal y ve a la carpeta del proyecto:

```bash
cd anthsoft-site
```

2. Instala todas las dependencias:

```bash
npm install
```

3. Inicia el servidor:

```bash
npm run dev
```

4. Abre el navegador en:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 🧩 Requisitos

- Node.js v18 o superior
- Navegador moderno
- Editor recomendado: VS Code

---

## 🤝 ¿Dudas o errores?

- Asegúrate de estar dentro de la carpeta correcta.
- Verifica que tienes Node y npm instalados (`node -v`, `npm -v`).
- Comparte cualquier error o captura en el grupo de trabajo.

---

Hecho con 💻 y 💙 por el equipo **Anthsoft**
