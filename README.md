# TP Prisma + MySQL

## 📌 Descripción

Trabajo Práctico Integrador realizado con:

- Node.js
- Express
- Prisma ORM
- MySQL

El objetivo del proyecto es implementar un backend simple utilizando Prisma y una base de datos relacional MySQL.

---

# 🚀 Tecnologías utilizadas

- Node.js
- Express
- Prisma ORM
- MySQL
- Thunder Client / Postman

---

# 🧱 Modelo de Datos

El sistema está compuesto por las siguientes entidades:

- Category
- Product
- User
- Order
- OrderItem

---

# 🔗 Relaciones

## Category → Product
- Una categoría puede tener muchos productos.
- Un producto pertenece a una categoría.

## User → Order
- Un usuario puede tener muchas órdenes.
- Una orden pertenece a un usuario.

## Order → OrderItem
- Una orden puede tener muchos items.

## Product → OrderItem
- Un producto puede aparecer en muchos items de órdenes.

---

# 📂 Estructura del proyecto

```bash
src/
 ├── routes/
 │    ├── categories.routes.js
 │    ├── products.routes.js
 │    ├── users.routes.js
 │    └── orders.routes.js
 │
 ├── db.js
 └── index.js

prisma/
 ├── schema.prisma
 └── migrations/
```

---

# ⚙️ Instalación

## 1️⃣ Clonar repositorio

```bash
git clone LINK_DEL_REPO
```

---

## 2️⃣ Instalar dependencias

```bash
npm install
```

---

## 3️⃣ Configurar archivo .env

Crear un archivo `.env` en la raíz:

```env
DATABASE_URL="mysql://root:password@localhost:3306/app_db"
```

Reemplazar:
- `root`
- `password`
- `app_db`

según la configuración local de MySQL.

---

# 🛠️ Migraciones Prisma

## Ejecutar migraciones

```bash
npx prisma migrate dev --name init
```

---

## Generar cliente Prisma

```bash
npx prisma generate
```

---

# ▶️ Ejecutar servidor

```bash
npm run dev
```

Servidor:

```bash
http://localhost:3000
```

---

# 📡 Endpoints

## Categories

### Obtener categorías

```http
GET /api/categories
```

### Crear categoría

```http
POST /api/categories
```

---

## Products

### Obtener productos

```http
GET /api/products
```

### Crear producto

```http
POST /api/products
```

---

## Users

### Obtener usuarios

```http
GET /api/users
```

### Crear usuario

```http
POST /api/users
```

---

## Orders

### Obtener órdenes

```http
GET /api/orders
```

### Crear orden

```http
POST /api/orders
```

---

# ✅ Funcionalidades implementadas

- CRUD básico
- Relaciones entre entidades
- Migraciones Prisma
- Includes de relaciones
- Validaciones básicas
- Backend REST API
- Conexión MySQL + Prisma

---

# 🧪 Pruebas realizadas

Se realizaron pruebas de:

- Creación de categorías
- Creación de productos
- Creación de usuarios
- Creación de órdenes
- Consulta completa de órdenes con:
  - usuario
  - productos
  - categorías

---

# 📷 Prisma Studio

Para visualizar la base de datos:

```bash
npx prisma studio
```

---

# 👨‍💻 Autor

Trabajo práctico realizado para Programación / Backend.