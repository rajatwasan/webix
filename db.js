const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite

var User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE,
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  role_id: Sequelize.INTEGER
});

var Role = sequelize.define('role', {
  name: Sequelize.STRING
});

sequelize.sync({ force: true }).then(() => {

  //add demo data
  Role.create({ name:"Admin" });
  Role.create({ name:"User" });
  Role.create({ name:"Guest" });

  User.create({
    username: 'janedoe', birthday: new Date(1980, 6, 20), name:"Jane Doe", email:"janedoe@gmail.com", role_id:2
  });
  User.create({
    username: 'alexb', birthday: new Date(1968, 1, 11), name:"Alex Brown", email:"alexb@hotmail.com", role_id:1
  });
  User.create({
    username: 'bonny', birthday: new Date(2001, 2, 18), name:"Bonny Ampa", email:"bonny@gmail.com", role_id:2
  });

});

module.exports = {
  User, Role
};