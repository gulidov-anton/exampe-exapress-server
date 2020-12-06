const MainController = (App) => {

    App.get('/', (req, res) => {
        const { name = 'World' } = req.query;

        res.send(`<h1>Hello ${name}!<h1>`)
    })

    App.get('/test', (req, res) => {
        console.log('req-->', req)
        res.send('<h1>test<h1> <a href=\'/\'> home </a>')
    })
}

export default MainController;