const stripe = require('../constants/stripe');

const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}

const paymentApi = app2 => {
  app2.get('/', (req, res) => {
    res.send({ message: 'Hello Stripe checkout server!', timestamp: new Date().toISOString() })
  });

  app2.post('/', (req, res) => {
    stripe.charges.create(req.body, postStripeCharge(res));
    console.log("this is a test")
  });

  return app2;
};

module.exports = paymentApi;