import { clients } from './../data/data';

const ClientController = (App) => {
    App.get('/clients', (req, res) => {
        const { age } = req.query;
        const data = age ? clients.filter((client) => client.age === age) : clients;
        res.json({ data })
    })

}

export default ClientController