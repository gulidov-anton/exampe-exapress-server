const AuthCotroller = (App) => {

    App.post('/auth', (req, res) => {
        const { name = 'default' } = req.query;

        res.send({ name })
    })

}


export default AuthCotroller;