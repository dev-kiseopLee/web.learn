const express = require('express')
const router = express.Router()
const Blog = require('../models/blog')

/* GET home page. */
router.get('/', async (req, res, next) => {
    const blogs = await Blog.find({})
    res.render('blogs/blog', { title: 'blog', blogs })
})

router.get('/show/:id', async (req, res, next) => {
    const blog = await Blog.findById(req.params.id)
    console.log(blog)
    res.render('blogs/show', { title: 'show', blog })
})

router.get('/new', async (req, res, next) => {
    res.render('blogs/new', { title: 'new' })
})

router.get('/edit/:id', async (req, res, next) => {
    const blog = await Blog.findById(req.params.id)
    res.render('blogs/edit', { title: 'edit', blog })
})

/* POST */

router.post('/', async (req, res, next) => {
    const blog = new Blog(req.body.blog)
    await blog.save()
    res.redirect(`/blog/show/${blog._id}`)
})

router.post('/show/:id', async (req, res, next) => {
    const { _method } = req.body
    switch (_method) {
        case 'PUT':
            const { id } = req.params
            const blog = await Blog.findByIdAndUpdate(id, { ...req.body.blog })
            res.redirect(`/blog/show/${blog._id}`)
            break
        case 'DELETE':
            await Blog.findByIdAndDelete(req.params.id)
            res.redirect('/blog')
            break
        default:
            throw new Error('Error: not expected value for _method')
    }
})

module.exports = router
