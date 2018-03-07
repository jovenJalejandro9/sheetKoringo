'use strict';

var User = require('../model/user');

/** create function to create User. */
exports.create = function (req, res) {
    User
    .create(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.send(err))
};

/** get function to get every users */
exports.getAll= function (req, res) {
    User
    .getAll()
    .then((result) => res.json(result))
    .catch((err) => res.send(err))
};

/** get function to get User by id. */
exports.get = function (req, res) {
    User
    .get(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => res.send(err))
};

/** updateCompany function to get User by id. */
exports.update = function (req, res) {
    User
    .updateById(req.params.id,req.body)
    .then((result) => res.json(result))
    .catch((err) => res.send(err))
}

/** removeCompany function to get User by id. */
exports.delete = function (req, res) {
    User
    .removeById(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => res.send(err))
}
