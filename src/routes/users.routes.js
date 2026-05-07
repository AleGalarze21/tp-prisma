import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();


// ==============================
// CREAR USUARIO
// ==============================
router.post("/users", async (req, res) => {

  try {

    const { name, email } = req.body;

    // Validaciones
    if (!name || !email) {
      return res.status(400).json({
        message: "Nombre y email son obligatorios"
      });
    }

    // Verificar email repetido
    const userExists = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (userExists) {
      return res.status(400).json({
        message: "El email ya está registrado"
      });
    }

    // Crear usuario
    const user = await prisma.user.create({
      data: {
        name,
        email
      }
    });

    res.status(201).json(user);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message
    });
  }
});


// ==============================
// OBTENER USUARIOS
// ==============================
router.get("/users", async (req, res) => {

  try {

    const users = await prisma.user.findMany({
      include: {
        orders: true
      }
    });

    res.json(users);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message
    });
  }
});

export default router;