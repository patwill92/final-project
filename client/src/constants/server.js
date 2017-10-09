const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'dev'
? 'http://myapidomain.com'
: 'http://localhost:8080';

export default PAYMENT_SERVER_URL;