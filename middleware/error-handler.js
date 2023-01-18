const errorHandler = (err, req, res, next) => {
  return res.status(err.status).json({ msg: err.message });
};

export default errorHandler;
