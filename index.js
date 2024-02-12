const express = require('express')
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000



app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'))

mongoose.connect(process.env.MONGO_URL).then(() => console.log('db connected'))
.catch(err => console.log(err));

//Routes
const api = process.env.API_URL;
const productRouter = require('./routers/productRoute');
const userRouter = require('./routers/userRoute')
const orderRouter = require('./routers/orderRoute')




app.use(`${api}/products`, productRouter);
app.use(`${api}/users`, userRouter);
app.use(`${api}/orders`, orderRouter)



app.listen(PORT, () => 
console.log(`app started on port ${PORT}${api} `)
);