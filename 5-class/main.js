const UserCollection = require('./UsersCollection');
const {
    getData
} = require('../helpers');

const usersData = getData();
const users = new UserCollection(usersData);