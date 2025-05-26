# 🛍️ Product Search App

Aplicación frontend + backend construida con **React + Vite + TailwindCSS** y **Node.js + Express**, que permite buscar productos, filtrar por nombre o categoría y ver detalles individuales. Mockeado con datos locales.

---

## 🧩 Funcionalidades

- Caja de búsqueda para ingresar productos.
- Vista de resultados: muestra hasta 4 productos coincidentes.
- Filtro por categorías.
- Vista de detalle para cada producto.
- Acceso directo al detalle mediante ID.
- Diseño responsive con TailwindCSS.

---

## 🛠️ Tecnologías usadas

### Frontend
- React (Vite)
- TailwindCSS
- React Router DOM

### Backend
- Node.js
- Express
- CORS
- Mock de datos en JSON

---

## 📁 Estructura del proyecto

```bash
product-search-app/
├── backend/
│ ├── data/
│ │ └── products.js
│ └── index.js
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── public/
│ └── tailwind.config.js
└── README.md
```


---

## 🧪 Requisitos previos

- Node.js (v18 o superior)
- npm (v9 o superior)

---

## 🖥️ Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/DavidCTStack/Product-App.git
cd Product-App
```

### 2. Instalar dependencias

#### 🔹 Backend

```bash
cd backend
npm install
npm run dev
```

El servidor se iniciará en http://localhost:3001

#### 🔹 Backend

En una nueva terminal:

```bash
cd frontend
npm install
npm run dev
```

La app se abrirá en http://localhost:5173

## 👨‍💻 Autor

```bash
David Carretero
Frontend Developer
GitHub: @DavidCTStack
