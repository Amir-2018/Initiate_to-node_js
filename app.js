const express = require('express');
const app = express();
const Routes = require('./routes/routes');
app.use(Routes)

app.listen(3000,()=>{
    console.log('Lisening on the port 3000 ... ')
})
