import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();


// ==============================
// OBTENER TODOS LOS PRODUCTOS
// ==============================
router.get("/products", async (req, res) => {

  try {

    const products = await prisma.product.findMany({
      include: {
        category: true
      }
    });

    res.json(products);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message
    });
  }
});


// ==============================
// CREAR PRODUCTO
// ==============================
router.post("/products", async (req, res) => {

  try {

    const { name, price, quantity, categoryId } = req.body;

    // Validaciones básicas
    if (!name || !price || !categoryId) {
      return res.status(400).json({
        message: "Faltan datos obligatorios"
      });
    }

    // Verificar si existe la categoría
    const categoryExists = await prisma.category.findUnique({
      where: {
        id: Number(categoryId)
      }
    });

    if (!categoryExists) {
      return res.status(404).json({
        message: "La categoría no existe"
      });
    }

    // Crear producto
    const product = await prisma.product.create({
      data: {
        name,
        price: Number(price),
        quantity: Number(quantity),
        categoryId: Number(categoryId)
      }
    });

    res.status(201).json(product);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message
    });
  }
});


// ==============================
// OBTENER PRODUCTO POR ID
// ==============================
router.get("/products/:id", async (req, res) => {

  try {

    const product = await prisma.product.findUnique({
      where: {
        id: Number(req.params.id)
      },
      include: {
        category: true
      }
    });

    if (!product) {
      return res.status(404).json({
        message: "Producto no encontrado"
      });
    }

    res.json(product);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message
    });
  }
});


// ==============================
// ELIMINAR PRODUCTO
// ==============================
router.delete("/products/:id", async (req, res) => {

  try {

    const id = Number(req.params.id);

    const productExists = await prisma.product.findUnique({
      where: { id }
    });

    if (!productExists) {
      return res.status(404).json({
        message: "Producto no encontrado"
      });
    }

    await prisma.product.delete({
      where: { id }
    });

    res.json({
      message: "Producto eliminado correctamente"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message
    });
  }
});


// ==============================
// ACTUALIZAR PRODUCTO
// ==============================
router.patch("/products/:id", async (req, res) => {

  try {

    const id = Number(req.params.id);

    const productExists = await prisma.product.findUnique({
      where: { id }
    });

    if (!productExists) {
      return res.status(404).json({
        message: "Producto no encontrado"
      });
    }

    const product = await prisma.product.update({
      where: { id },
      data: req.body
    });

    res.json(product);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message
    });
  }
});

export default router;