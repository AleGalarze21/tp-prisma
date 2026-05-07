import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();


// ==============================
// OBTENER CATEGORÍAS
// ==============================
router.get("/categories", async (req, res) => {

  try {

    const categories = await prisma.category.findMany({
      include: {
        products: true
      }
    });

    res.json(categories);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message
    });
  }
});


// ==============================
// CREAR CATEGORÍA
// ==============================
router.post("/categories", async (req, res) => {

  try {

    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "El nombre es obligatorio"
      });
    }

    // Verificar si ya existe
    const categoryExists = await prisma.category.findUnique({
      where: {
        name
      }
    });

    if (categoryExists) {
      return res.status(400).json({
        message: "La categoría ya existe"
      });
    }

    const category = await prisma.category.create({
      data: {
        name
      }
    });

    res.status(201).json(category);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message
    });
  }
});

export default router;