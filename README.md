Claims Service
A Claims service that provides a way to handle claims submitted via USSD, SMS, and Telegram.

Table of Contents
Requirements
Installation
Usage
API Endpoints
Handle USSD Claims
Handle SMS Claims
Handle Telegram Claims
Deployment
Running the Service
Requirements
Node.js
NPM
Express.js
Installation
Clone the repository and install the dependencies by running the following command in the terminal:

Copy code
npm install
Usage
This service has 3 API endpoints for handling claims submitted via USSD, SMS, and Telegram.

API Endpoints
Handle USSD Claims
POST /claims/ussd

This endpoint is used to handle USSD claims. It accepts a JSON request with the following format:

json
Copy code
{
    "phoneNumber": "",
    "claimType": "",
    "description": ""
}
Handle SMS Claims
POST /claims/sms

This endpoint is used to handle SMS claims. It accepts a JSON request with the following format:

json
Copy code
{
    "phoneNumber": "",
    "claimType": "",
    "description": ""
}
Handle Telegram Claims
POST /claims/telegram

This endpoint is used to handle Telegram claims. It accepts a JSON request with the following format:

json
Copy code
{
    "chatId": "",
    "claimType": "",
    "description": ""
}
Deployment
The service can be deployed on a server or cloud platform.

Running the Service
To start the service, run the following command in the terminal:

sql
Copy code
npm start
This will start the service on http://0.0.0.0:8080/claims.
