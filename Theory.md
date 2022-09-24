WHAT IS EXPRESS ?

Express.js is an Back-End web Application Frame Work for Node.js.
Express.js is mainly designed for the building Web Applications and Api's.
It is used to build a single page and multipage web application.

HOW TO INSTALL THE EXPRESS ?

"npm i express" enter for install modules

MODULE USED FOR UPDATE AUTOMATICALLY ?

"npm i demon" it allows to update the data automatically.

HOW TO IMPORT EXPRESS ?

const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.listen(2020,()=>{console.log('server running')})


