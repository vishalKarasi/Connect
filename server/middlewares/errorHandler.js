export const errorHandler = (err, req, res, next) => {
  console.error(err);
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err instanceof CustomError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  res.status(statusCode).json({ message });
};
