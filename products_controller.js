module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db');
        const {name, description, price, image_url} = req.body;
        db.create_product([name, description, price, image_url])
        .then(() => {res.sendStatus(200)})
        .catch((err) => {
            res.status(500).send('Create Error');
            console.log(err);
        });
    },
    getOne: (req, res, next) => {
        const db = req.app.get('db');
        db.read_product([req.params.id])
        .then((product) => {res.status(200).send(product)})
        .catch((err) => {
            res.status(500).send('Get One Error');
            console.log(err);
        })
    },
    getAll: (req, res, next) => {
        const db = req.app.get('db');
        db.read_products()
        .then((products) => {res.status(200).send(products)})
        .catch((err) => {
            res.status(500).send('Get All Error');
            console.log(err);
        })
    },
    update: (req, res, next) => {
        const db = req.app.get('db');
        db.update_product([req.query.desc, req.params.id])
        .then(() => {
            res.sendStatus(200)
        })
        .catch((err) => {
            res.status(500).send('Update Error');
            console.log(err);
        })
    },
    delete: (req, res, next) => {
        const db = req.app.get('db');
        db.delete_product([req.params.id])
        .then(() => {res.sendStatus(200)})
        .catch((err) => {
            res.status(500).send('Delete Error');
            console.log(err);
        })
    }
}