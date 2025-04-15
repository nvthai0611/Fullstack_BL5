const userData = [
  {
    username: "admin",
    password: "123456",
  },
  {
    username: "hai",
    password: "12345678",
  },
];
module.exports = (req, res, next) => {
  try {
    const body = req.body;
    if (!body.username.trim() || !body.password.trim()) {
      return res.json({
        message: "Tai khoan hoac mat khau khong dung",
      });
    }
    const taitoanTontai = userData.findIndex(
      (user) =>
        user.username === body.username && user.password === body.password
    );
    console.log(taitoanTontai);

    if (taitoanTontai === -1) {
      return res.json({
        message: "Tai khoan hoac mat khau khong dung",
      });
    }
    req.user = body;
    next();
  } catch (error) {
    // status se auto la 500 neu chay vao day
    return res.status(500).json({
        message: error.message
    })
  }
};
