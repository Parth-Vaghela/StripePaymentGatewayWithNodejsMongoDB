const keys = require('../config/keys');
const Payment = require('../ models/payment');
const stripe = require('stripe')(keys.stripeSecretKey);

function index(req, res) {
  res.render('index', {
    stripePublishableKey : keys.stripePublishableKey
  })
}

async function charge(req, res) {
  const amount = 200000;
  try{
    await stripe.customers.create({
      email : req.body.stripeEmail,
      source : req.body.stripeToken,
    })
    .then(customer => stripe.charges.create({
      amount,
      description : 'First product',
      currency : 'inr',
      customer : customer.id
    }))
    const addUser = new Payment({email : req.body.stripeEmail , amount })
    addUser.save();
    console.log(addUser)
    res.render('success');
  }catch(err){
      console.log(err)
      res.redirect('/');
    }
}

module.exports = { index , charge }