import Category from '../models/category.js';



export const getCategories = async (req, res) => {
    try {
        const categories = await Category.getAll(req.query);
        res.json(categories)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Bir hata var" })
    }
}

export const getCategoriesById = async (req, res) => {
    try {
        const { id } = req.params
        const category = await Category.getById(id)
        if (!category) {
            res.status(404)
        }
        res.json(category)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Bir hata var" })
    }
}

export const createCategory = async (req, res) => {
    try {
        const { name } = req.body
        const category = await Category.create(name)
        res.status(201).json({})
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Bir hata var" })
    }
}


export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params
        const { names } = req.body
        await Category.update(id, names)
        res.status(202).json({})
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Bir hata var" })
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params
        await Category.delete(id)
        res.status(204).json({})
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "Bir hata var" })
    }
}

