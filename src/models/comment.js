import prisma from '../prisma.js'


const Comment = {
    getAll: async (query_string) => {
        const { post, commenter } = query_string
        const query_list = []
        if (!post) {
            query_list.push(
                { post_id: post }
            )
        }
        if (commenter) {
            query_list.push(
                { commenter_name: commenter }
            )
        }
        return await prisma.comment.findMany({
            where: {
                AND: query_list
            }
        });
    },
    create: async (post_id, content, commenter_name) => {
        await prisma.comment.create({
            data: {
                post_id,
                content,
                commenter_name,
            }
        });
    },
    getById: async (id) => {
        return await prisma.coment.findUnique({
            where: { id: Number(id) }
        })
    },
    update: async (id, post_id, content, commenter_name) => {
        await prisma.comment.update({
            where: { id: Number(id) },
            data: {
                post_id,
                content,
                commenter_name
            }
        })
    },
    delete: async (id) => {
        return await prisma.comment.update({
            where: { id: Number(id) },
            data: { deleted_at: new Date() },
        });
    }
}


export default Comment