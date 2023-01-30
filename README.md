Claims Service
==============

A Claims service that provides a way to handle claims submitted via USSD, SMS, and Telegram.

Table of Contents
-----------------

-   [Requirements](https://chat.openai.com/chat#Requirements)
-   [Installation](https://chat.openai.com/chat#Installation)
-   [Usage](https://chat.openai.com/chat#Usage)
-   [API Endpoints](https://chat.openai.com/chat#API-Endpoints)
    -   [Handle USSD Claims](https://chat.openai.com/chat#Handle-USSD-Claims)
    -   [Handle SMS Claims](https://chat.openai.com/chat#Handle-SMS-Claims)
    -   [Handle Telegram Claims](https://chat.openai.com/chat#Handle-Telegram-Claims)
-   [Deployment](https://chat.openai.com/chat#Deployment)
-   [Running the Service](https://chat.openai.com/chat#Running-the-Service)


Root URL
-----------------
https://incourage-claims-service-ofcqx26pbq-uc.a.run.app/

Requirements
------------

-   Node.js
-   NPM
-   Express.js

Installation
------------

Clone the repository and install the dependencies by running the following command in the terminal:

Copy code

`npm install`

Usage
-----

This service has 3 API endpoints for handling claims submitted via USSD, SMS, and Telegram.

API Endpoints
-------------

### Handle USSD Claims

`POST /claims/ussd`

This endpoint is used to handle USSD claims. It accepts a JSON request with the following format:


`{
    "phoneNumber": "",
    "claimType": "",
    "description": ""
}`

### Handle SMS Claims

`POST /claims/sms`

This endpoint is used to handle SMS claims. It accepts a JSON request with the following format:


`{
    "phoneNumber": "",
    "claimType": "",
    "description": ""
}`

### Handle Telegram Claims

`POST /claims/telegram`

This endpoint is used to handle Telegram claims. It accepts a JSON request with the following format:


`{
    "chatId": "",
    "claimType": "",
    "description": ""
}`

Deployment
----------

The service can be deployed on a server or cloud platform.

Running the Service
-------------------

To start the service, run the following command in the terminal:


`npm start`

This will start the service on `http://0.0.0.0:8080/claims`