const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((p, c) => p + c.likes, 0)
}

const favoriteBlog = (blogs) => {
    let favBlog = blogs.reduce((p, c) => {
        if (p.likes > c.likes)
            return p
        return c
    }, {})

    return {
        title: favBlog.title,
        author: favBlog.author,
        likes: favBlog.likes
    }
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}