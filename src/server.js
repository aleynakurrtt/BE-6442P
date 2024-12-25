import dotenv from 'dotenv';
dotenv.config();
import categoryRoutes from './routes/category.js';
import postRoutes from './routes/post.js'
import commentRoutes from './routes/comment.js'
import tagRoutes from './routes/tag.js'

const PORT = 3007

import express from 'express';

const app = express();

app.use(express.json())

app.use('/categories', categoryRoutes)
app.use('/posts', postRoutes)
app.use('/comments', commentRoutes)
app.use('/tags', tagRoutes)


app.listen(PORT, () => {
    console.log("sunucu ayakta")
})