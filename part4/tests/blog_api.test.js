const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require('../app')
const Blog = require('../models/blogs')
const api = supertest(app)


beforeEach(async () => {
    await Blog.deleteMany({})

    const blogObjects = helper.initialBlogs.map(b => new Blog(b));
    const promiseArray = blogObjects.map(b => b.save())
    await Promise.all(promiseArray)
}, 100000)

describe('When there is intially some blogs saved', () => {

    test('blogs are returned as json', async () => {
        await api
            .get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    }, 100000)

    test('all blogs are returned', async () => {
        const response = await api.get('/api/blogs')

        expect(response.body).toHaveLength(helper.initialBlogs.length)
    })

    test('unique identifier property of the blog posts is named id', async () => {
        const response = await api.get('/api/blogs')
        const data = response.body
        if (data.length > 0) {
            expect(data[0].id).toBeDefined()
        }

    })
})


describe('addition of new blog', () => {

    test('a valid blog can be added', async () => {
        const newBlog = {
            title: "React patterns again",
            author: "Michael Chan",
            url: "https://reactpatterns.com/",
            likes: 7,
        }

        await api.post('/api/blogs')
            .send(newBlog)
            .expect(201)
            .expect('Content-Type', /application\/json/)

        const blogAtEnd = await helper.BlogsInDb()
        expect(blogAtEnd).toHaveLength(helper.initialBlogs.length + 1)

        const contents = blogAtEnd.map(b => b.title)
        expect(contents).toContain(
            'React patterns again'
        )
    })

    test('default value for like is 0', async () => {

        const response = await api.post('/api/blogs')
            .send(helper.blogWithMissingLikes)
            .expect(201)
            .expect('Content-Type', /application\/json/)

        expect(response.body.likes).toBe(0)
    })

    test('fails with status 400 if title is missing', async () => {
        const response = await api.post('/api/blogs')
            .send(helper.blogWithMissingTitle)
            .expect(400)
            .expect('Content-Type', /application\/json/)

    })

    test('fails with status 400 if url is missing', async () => {

        const response = await api.post('/api/blogs')
            .send(helper.blogWithMissingURL)
            .expect(400)
            .expect('Content-Type', /application\/json/)

    })
})

describe('deletion of a blog', () => {
    test('succeeds with status code 204 if id is valid', async () => {
        const blogs = await helper.BlogsInDb()
        const blogToDelete = blogs[0]

        await api.delete(`/api/blogs/${blogToDelete.id}`)
            .expect(204)
        const blogsAtEnd = await helper.BlogsInDb()

        expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length - 1)

        const contents = blogsAtEnd.map(r => r.title)

        expect(contents).not.toContain(blogToDelete.title)
    })
})

afterAll(() => {
    mongoose.connection.close()
})
