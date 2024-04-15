const SmsPool = require('./smspool-api');

const smsPool = new SmsPool('');

smsPool.getBalance().then(balance => console.log(balance));
smsPool.getCountryList().then(countries => console.log(countries));
smsPool.getOrderHistory().then(orders => console.log(orders));
smsPool.getActiveOrders().then(orders => console.log(orders));