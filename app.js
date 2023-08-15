const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const videoRoutes = require('./routes/videoRoutes');
const commentRoutes = require('./routes/commentRoutes');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/videos', videoRoutes);
app.use('/comments', commentRoutes);
app.use('/products', productRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on ${port}`));