import express from "express";

import productRoutes from "./routes/products.routes.js";
import categoryRoutes from "./routes/categories.routes.js";
import userRoutes from "./routes/users.routes.js";
import orderRoutes from "./routes/orders.routes.js";

const app = express();

app.use(express.json());

// 👇 ACA CONECTÁS TODO
app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use("/api", userRoutes);
app.use("/api", orderRoutes);

app.listen(3000);
console.log("Servidor corriendo en http://localhost:3000");