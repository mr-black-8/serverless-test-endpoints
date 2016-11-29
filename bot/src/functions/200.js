import qs from 'qs';
import _ from 'underscore';
import constants from '../constants'

const handler = (event, context, callback) => {
  const body = process.env.IS_OFFLINE ? JSON.parse(event.body) : qs.parse(event.body);

  console.log(body);

  const response = { statusCode: '500' };

  if (_.isEmpty(constants.successBody)) {
    response.body = JSON.stringify({ ok: true })
  } else {
    response.body = JSON.stringify(constants.successBody)
  }

  callback(null, response);
};

export default handler;
