import { Router } from 'express'
import {
    getCategories, getCategoriesById, createCategory, updateCategory,
    deleteCategory
} from '../controllers/categoryController.js'

const router = Router()


router.get('/', getCategories)
router.get('/:id', getCategoriesById)
router.post('/', createCategory)
router.put('/:id', updateCategory)
router.delete('/:id', deleteCategory)



export default router