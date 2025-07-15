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

- `express`: Framework para servidor backend.
- `ejs`: Motor de plantillas para vistas.
- `dotenv`: Variables de entorno.

### 2. Dependencias de Desarrollo

```bash
npm install -D nodemon
```

> ⚠️ El proyecto ahora utiliza **JavaScript**, por lo tanto ya **no necesita TypeScript ni sus tipos**.

---

### 💡 Instalación Manual (si `npm install` no funciona)

Si `npm install` no instala correctamente todas las dependencias, puedes hacerlo una por una:

```bash
npm install express
npm install ejs
npm install dotenv
npm install -D nodemon
```

> ✅ **Nota:** Asegúrate de estar en la carpeta raíz del proyecto cuando ejecutes estos comandos.

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
│   ├── routes/              # Rutas de Express (importadas en server.js)
│   ├── controllers/         # Lógica que manejan las rutas
│   └── server.js            # Punto de entrada principal
├── .env                     # Variables como PUERTO o claves secretas
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
- Usa `nodemon` para monitorear cambios
- Ejecuta `src/server.js`
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
