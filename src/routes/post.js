import { Router } from 'express'
import { getPost, getPostsById, createPost, updatePost, deletePost, addTags } from '../controllers/postController.js'

const router = Router()

router.get('/', getPost)
router.get('/:id', getPostsById)
router.post('/', createPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.post('/:id/tags', addTags)


export default router