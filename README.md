# ETX-Heal

A web3 DAPP designed to make all patient data secure and transparent to both users and professionals.

This web app is made using React for frontend, Express for backend and MySQL for Database. The UUIDs are stored in both ETH (via Goerli test network) and MySQL DB. This app is made to demonstrate how the IDs can be hashed and stored on DB and then use the DB to get the details at same time.

## Instructions:
1. Make sure you've installed NodeJS and MySQL. If not, install them. 
2. Since the DB schema has to be made, create a empty database and run the queries mentioned in [nodelogin.sql](./hms/nodelogin.sql)
3. After that, run the web app using `yarn dev` (install `yarn` to avoid installing dependencies in `npm` like Visual C++)
4. Create a user using signup page
5. Then finally start using the web app

**NOTE: Some details might be static as the sole focus of the project is to demonstrate the usage of ETH in web app**

### Libraries used:
 - React
 - Express
 - Web3JS
 - EJS (for frontend pages)
 - UUIDv4

### Languages used:
 - JavaScript
 - EJS
 - Solidity

### License:
Apache-2.0
