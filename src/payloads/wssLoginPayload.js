const { APP_ID } = require('../data/constants');
const { timestamp, nonce } = require('../helpers/utilities');

const wssLoginPayload = ({ at, apiKey }) => {
  const payload = {
    action: 'userOnline',
    at,
    apikey: apiKey,
    appid: APP_ID,
    nonce,
    ts: timestamp,
    userAgent: 'ewelink-api',
    sequence: Math.floor(timestamp * 1000),
    version: 8,
  };

  return JSON.stringify(payload);
};

module.exports = wssLoginPayload;
