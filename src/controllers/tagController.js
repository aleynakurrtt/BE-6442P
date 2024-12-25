import Tag from '../models/tag.js'
import prisma from '../prisma.js'



export const getTag = async (req, res) => {
    try {
        const tag = await Tag.getAll(req.query);
        res.json(tag)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Bir hata var" })
    }
}

export const getTagById = async (req, res) => {
    try {
        const { id } = req.params
        const tags = await Tag.getById(id)
        if (!tags) {
            res.status(404).json({})
        }
        res.json(tags)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Bir hata var" })
    }
}


export const createTag = async (req, res) => {
    try {
        const { name } = req.body;
        const tag = await Tag.create(name);
        res.status(201).json({ tag });
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Bir hata var" })
    }
};

export const updateTag = async (req, res) => {
    try {
        const { id } = req.params
        const { name } = req.body
        await Tag.update(id, name)
        res.status(202).json({})
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Bir hata var" })
    }
};

export const deleteTag = async (req, res) => {
    try {
        const { id } = req.params
        await Tag.delete(id)
        res.status(204).json({})
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Bir hata var" })
    }
}