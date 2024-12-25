import Comment from '../models/comment.js'
import prisma from '../prisma.js'

export const getComment = async (req, res) => {
    try {
        const comment = await Comment.getAll(req.query);
        res.json(comment)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Bir hata var" })
    }
}


export const createComment = async (req, res) => {
    try {
        const { post_id, content, commenter_name } = req.body;

        if (!post_id || !content || !commenter_name) {
            return res.status(400).json({});
        }

        const comment = await prisma.comment.create({
            data: {
                post_id: Number(post_id),
                content,
                commenter_name,
            },
        });

        res.status(201).json({ comment });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Bir hata var" })
    }
};

export const getCommentsById = async (req, res) => {
    try {
        const { id } = req.params
        const comments = await Comment.getById(id)
        if (!comments) {
            res.status(404).josn({})
        }
        res.json(comments)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Bir hata var" })
    }
};

export const updateComment = async (req, res) => {
    try {
        const { id } = req.params
        const { post_id, content, commenter_name } = req.body;
        await Comment.update(id, post_id, content, commenter_name)
        res.status(202).json({})
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Bir hata var" })
    }
}


export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;

        const comment = await prisma.comment.update({
            where: { id: Number(id) },
            data: { deleted_at: new Date() },
        });

        res.status(200).json({ comment });
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: "Bir hata var" })
    }
};
