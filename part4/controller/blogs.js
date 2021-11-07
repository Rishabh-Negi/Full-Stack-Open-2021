const blogsRouter = require('express').Router()
const Blog = require('../models/blogs')


blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
    const body = request.body
    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes || 0,
    })

    const savedBlog = await blog.save()
    response.status(201).json(savedBlog)

})

blogsRouter.delete('/:id', async (request, response) => {
    const originalBlog = await Blog.findById(request.params.id)
    if (!originalBlog) response.status(404).end()

    await originalBlog.delete()

    response.status(204).end()
})

blogsRouter.put('/:id', async (request, response) => {

    const originalBlog = await Blog.findById(request.params.id)
    if (!originalBlog) response.status(404).end()

    const body = request.body

    originalBlog.title = body.title
    originalBlog.author = body.author
    originalBlog.url = body.url
    originalBlog.likes = body.likes

    await originalBlog.save()
    response.status(200).end()
})

module.exports = blogsRouter