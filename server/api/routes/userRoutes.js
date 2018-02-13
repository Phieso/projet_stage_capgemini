'use strict';
module.exports = function(app) {
    let userApi = require('../controllers/userController.js');

    app.route('/users')
        .get(userApi.getUsers)
        .post(userApi.postUser);

     app.route("/user/:id")
        .get(userApi.getUser)
        .delete(userApi.deleteUser)
        .put(userApi.putUser);

    app.route('/auth/users')
        .get(userApi.loginRequired, userApi.getUsers)

    app.route('/login')
        .post(userApi.login);
};