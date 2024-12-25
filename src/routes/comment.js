import { Router } from 'express'
import { getComment, createComment, getCommentsById, updateComment, deleteComment } from '../controllers/commentController.js'

const router = Router()


router.get('/', getComment)
router.get('/:id', getCommentsById)
router.post('/', createComment)
router.put('/:id', updateComment)
router.delete('/:id', deleteComment)



export default router