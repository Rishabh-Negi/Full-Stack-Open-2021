const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.reduce((p, c) => p + c.likes, 0)
}

module.exports = { dummy, totalLikes }