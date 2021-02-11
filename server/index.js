require('dotenv').config();
const express = require('express'),
      authCtrl = require('./controllers/authController'),
      copyCtrl = require('./controllers/authControllercopy'),
      productCtrl = require('./controllers/productController'),
      mailCtrl = require('./controllers/mailController'),
      massive = require('massive'),
      session = require('express-session')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET, S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY} = process.env;

const app = express();
const aws = require('aws-sdk');
const { default: axios } = require('axios');

app.get('/api/signs3', (req, res) => {
  aws.config = {
    region: 'us-west-1',
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
  };
const s3 = new aws.S3();
  const fileName = req.query['file-name'];
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read',
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
    };

    return res.send(returnData);
  });
});

app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 *24 * 365}
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
})
.then((db) => {
    app.set('db', db)
    console.log('db connected')
})

//nodemailer endpoint
app.post('/api/email', mailCtrl.email)

//Auth endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/logout', authCtrl.logout)
app.get('/auth/session-user', authCtrl.getSessionUser)

// copy
app.post('/auth/register-copy', copyCtrl.register)
app.post('/auth/login-copy', copyCtrl.login)
app.get('/auth/logout-copy', copyCtrl.logout)
app.get('/auth/session-user-copy', copyCtrl.getSessionUser)

//Product Endpoints
app.get('/api/furniture', productCtrl.getProducts)
app.get('/api/user-cart/:id', productCtrl.getCart)
app.get('/api/order-history/:id', productCtrl.getOrderHistory)
app.post('/api/cart', productCtrl.addToCart)

app.put('/api/item-quantity/:id', productCtrl.updateQuantity)
app.delete('/api/cart-item/:id', productCtrl.removeProduct)


app.listen(SERVER_PORT, () => console.log(`Running on port: ${SERVER_PORT}`))