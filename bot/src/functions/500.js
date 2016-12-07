import qs from 'qs';
import _ from 'underscore';
import constants from '../constants'

const handler = (event, context, callback) => {
  const body = process.env.IS_OFFLINE ? JSON.parse(event.body) : qs.parse(event.body);

  console.log(event);
  console.log(body);

  const response = { statusCode: 500 };

  if (_.isEmpty(constants.rejectBody)) {
    response.body = JSON.stringify({ ok: false })
  } else {
    response.body = JSON.stringify(constants.rejectBody)
  }

  callback(null, response);
};

export default handler;
