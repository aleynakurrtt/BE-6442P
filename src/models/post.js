import prisma from '../prisma.js'
import { SHOW_DELETED, POST_STATUS } from "../const.js"

const Post = {
    getAll: async (query_string) => {
        const { category, status, showDeleted } = query_string
        const query_list = []

        if (showDeleted === SHOW_DELETED.FALSE) {
            query_list.push({
                deleted_at: null
            })
        } else if (showDeleted === SHOW_DELETED.ONLY_DELETED) {
            query_list.push({
                deleted: {
                    not: null
                }
            })
        } else if (showDeleted !== SHOW_DELETED.TRUE) {
            query_list.push({
                deleted_at: null
            })
        }

        if (category) {
            query_list.push({
                category_id: category
            })
        }

        if (status === POST_STATUS.PUBLİSHED) {
            query_list.push({
                published_at: {
                    not: null
                }
            })
        } else if (status === POST_STATUS.DRAFT) {
            query_list.push({
                published_at: null
            })
        }

        return await prisma.post.findMany({
            where: {
                AND: query_list
            }
        });
    },
    create: async (category_id, title, content,) => {
        await prisma.post.create({
            data: {
                category_id,
                title,
                content
            }
        })
    },
    getById: async (id) => {
        return await prisma.post.findUnique({
            where: {
                id: Number(id),
                deleted_at: null
            },
            include: {
                comments: true,
                tags: true,
                category: true,
            }
        })
    },
    update: async (id, category_id, title, content, published_at) => {
        await prisma.post.update({
            where: { id: Number(id) },
            data: {
                category_id,
                title,
                content
            },

        })
    },
    delete: async (id) => {
        return await prisma.post.update({
            where: { id: Number(id) },
            data: { deleted_at: new Date() },
        });
    },
    addTags: async (post_id, tag_id) => {
        await prisma.postTag.create({
            data: {
                post_id,
                tag_id
            }
        })
    }
}


export default Post