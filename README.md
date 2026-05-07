# TP Prisma + MySQL

## Tecnologías usadas

- Node.js
- Express
- Prisma ORM
- MySQL

---

# Modelo de datos

El sistema está compuesto por las siguientes entidades:

- Category
- Product
- User
- Order
- OrderItem

---

# Relaciones

- Una Category tiene muchos Product.
- Un Product pertenece a una Category.
- Un User tiene muchas Order.
- Una Order pertenece a un User.
- Una Order tiene muchos OrderItem.
- Un Product puede estar en muchos OrderItem.

---

# Instalación

## Instalar dependencias

```bash
npm install
```

## Configurar archivo .env

```env
DATABASE_URL="mysql://root:password@localhost:3306/app_db"
```

## Ejecutar migraciones

```bash
npx prisma migrate dev --name init
```

## Generar cliente Prisma

```bash
npx prisma generate
```

## Ejecutar servidor

```bash
npm run dev
```

---

# Endpoints principales

## Categories

- GET /api/categories
- POST /api/categories

## Products

- GET /api/products
- POST /api/products

## Users

- GET /api/users
- POST /api/users

## Orders

- GET /api/orders
- POST /api/orders

---

# Prisma Studio

```bash
npx prisma studio
```