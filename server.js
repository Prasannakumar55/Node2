const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('<h1>Hello World !!!<h1/>')
})
const products = [
    {
        id : 1,
        Name : 'iphone',
        Model: 'XR'
    },
    {
        id : 2,
        Name : 'sony',
        Model: 'Xperia'
    },
    {
        id : 3,
        Name : 'HTC',
        Model: 'Desire'
    },
]
app.get('/products',(req,res)=>{
    res.json(products)

app.get('/products/:id',(req,res)=>{
    const NewData =products.filter(item=>item.id.toString() === req.params.id);
    return res.json(NewData)
})    
})
app.listen(2021,()=>{console.log('Server Runing')})