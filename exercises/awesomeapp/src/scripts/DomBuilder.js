const domBuilder = (what, where) => {
    document.querySelector(where).appendChild(what)
}

module.exports = domBuilder;