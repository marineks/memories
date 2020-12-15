module.exports = (req, res, next) => {
  req.session.currentUser = {
    _id: "5fd8bc63392096e0a05d4fbb", // change the user id here to fit yor needs
    username: "foo",
    role: "admin",
    email: "foo@foo.foo",
  };
  next();
};
