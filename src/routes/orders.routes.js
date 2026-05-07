import { Router } from "express";
import { prisma } from "../db.js";

const router = Router();


// ==============================
// CREAR ORDEN
// ==============================
router.post("/orders", async (req, res) => {

  try {

    const { userId, items } = req.body;

    // Validar usuario
    const userExists = await prisma.user.findUnique({
      where: {
        id: Number(userId)
      }
    });

    if (!userExists) {
      return res.status(404).json({
        message: "El usuario no existe"
      });
    }

    // Validar productos
    for (const item of items) {

      const productExists = await prisma.product.findUnique({
        where: {
          id: Number(item.productId)
        }
      });

      if (!productExists) {
        return res.status(404).json({
          message: `El producto ${item.productId} no existe`
        });
      }
    }

    // Crear orden
    const order = await prisma.order.create({
      data: {
        userId: Number(userId),

        items: {
          create: items.map(item => ({
            productId: Number(item.productId),
            quantity: Number(item.quantity)
          }))
        }
      },

      include: {
        user: true,
        items: {
          include: {
            product: true
          }
        }
      }
    });

    res.status(201).json(order);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message
    });
  }
});


// ==============================
// OBTENER TODAS LAS ÓRDENES
// ==============================
router.get("/orders", async (req, res) => {

  try {

    const orders = await prisma.order.findMany({

      include: {

        user: true,

        items: {

          include: {

            product: {

              include: {
                category: true
              }
            }
          }
        }
      }
    });

    res.json(orders);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: error.message
    });
  }
});

export default router;