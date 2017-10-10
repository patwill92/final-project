const paymentApi = require('./payments');

const configureRoutes = app2 => {
  paymentApi(app2);
};

module.exports = configureRoutes;