const port = 3003;

const express = require('express');

const app = express();

app.get('/products', (req, res, next) => {
    res.send({name: 'Notebook', price: 123.45}); //Convert to JSON
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})