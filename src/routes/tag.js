import { Router } from 'express'
import { getTag, getTagById, createTag, updateTag, deleteTag } from '../controllers/tagController.js'


const router = Router()

router.get('/', getTag)
router.get('/:id', getTagById)
router.post('/', createTag)
router.put('/:id', updateTag)
router.delete('/:id', deleteTag)


export default router