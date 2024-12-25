import Post from '../models/post.js'
import prisma from '../prisma.js'


export const getPost = async (req, res) => {
    try {
        const post = await Post.getAll(req.query);
        res.json(post)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Bir hata var" })
    }
}

export const getPostsById = async (req, res) => {
    try {
        const { id } = req.params
        const posts = await Post.getById(id)
        if (!posts) {
            res.status(404).josn({})
        }
        res.json(posts)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Bir hata var" })
    }
}


export const createPost = async (req, res) => {

    try {
        const { category_id, title, content } = req.body;

        if (!category_id || !title || !content) {
            return res.status(400).json({});
        }

        const post = await prisma.post.create({
            data: {
                category_id,
                title,
                content,
                published_at: new Date(),
            },
        });

        res.status(201).json({ post });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Bir hata oluştu" });
    }
};


export const updatePost = async (req, res) => {
    try {
        const { id } = req.params
        const { category_id, title, content } = req.body;
        await Post.update(id, category_id, title, content)
        res.status(202).json({})
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Bir hata oluştu" });
    }
}



export const deletePost = async (req, res) => {
    try {
        const { id } = req.params
        await Post.delete(id)
        res.status(204).json({})
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Bir hata oluştu" });
    }
}

export const addTags = async (req, res) => {
    try {
        const { tag_id } = req.body
        console.log(tag_id,)
        res.status(201).json({})
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Bir hata oluştu" });
    }
}