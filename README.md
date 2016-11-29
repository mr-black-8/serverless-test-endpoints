# serverless-test-endpoints
Simple serverless project to create AWS APIG endpoints for testing purposes. Each endpoint will send a pre-determined response regardless of request content.
Created as a more permanent, responsive alternative to services like requestb.in

## Installation
Make sure you have serverless installed globally `npm install serverless -g` and setup your AWSCLI credentials. Checkout the [Serverless Docs](https://serverless.com/framework/docs/providers/aws/guide/installation/ "serverless docs") for a guide on getting up and running.

Once you have Serverless configured:
- `npm install` in main directory, <b>and in ./bot/<b>
- `grunt run:babel-once` in main directory
- `serverless deploy` in main directory

Thats it! Serverless will spit out the endpoint URL's in your terminal, and you're ready to go.

All requests made to these URL's will be logged in CloudWatch.

### Running Locally
Can also be used locally, without an AWS account. Instead of `serverless deploy`, run `serverless offline` in one session, and `ngrok http 3000` in another. NB - requires ngrok to be installed... :)

### TODO
- Add functions for GET requests
- Many other things...
