export const verifyToken = async (req, res, next) => {
  try {
    let accessToken = req.header("Authorization");
    if (!accessToken) {
      return res.status(401).send("Access Denied");
    }
    if (accessToken.startsWith("Bearer ")) {
      accessToken = accessToken.slice(7, accessToken.length).trimLeft();
    }
    const verified = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    next(error);
  }
};
