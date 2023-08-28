import { Router } from "express";
import productController from "../controllers/productController.js";

const router = Router()

router.post('/', productController.addProduct)

router.get('/published', productController.getPublishedProduct)
router.put('/:id', productController.updateProduct)
router.get('/:id', productController.getOneProduct)
router.get('/', productController.getAllProducts)

router.delete('/:id', productController.deleteProduct)

export default router
