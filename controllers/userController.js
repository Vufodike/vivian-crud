const Model = require('../models');
const User = Model.User;

async function createUser(req, res, next) {
    let new_user_object = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        role: req.body.role,
        department: req.body.department,
        status: req.body.status
      };

    const user = await User.create(new_user_object);

    res.redirect('/users/list');
}


async function updateUser(req, res, next) {
    let new_user_object = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        role: req.body.role,
        department: req.body.department,
        status: req.body.status
      };

    const user = await User.update(new_user_object, {
        where: {
          id: req.params.id
        }
      });

    res.redirect('/users/list');
}

async function listUsers(req, res, next) {

    let users = await User.findAll({raw: true});

    res.render('list-users', {title: 'Vivian CRUD Project', users: users});
}

async function showEdit(req, res, next) {

    let user = await User.findOne({
        where: {
            id: req.params.id
        }
    });

    res.render('update-user', {title: 'Vivian CRUD Project', user: user});
}

async function deleteUser(req, res, next) {

    let users = await User.destroy({
        where: {
            id: req.params.id
        }
    });

    res.redirect('/users/list');
}

module.exports = {
    createUser: createUser,
    listUsers: listUsers,
    deleteUser: deleteUser,
    showEdit: showEdit,
    updateUser: updateUser
}