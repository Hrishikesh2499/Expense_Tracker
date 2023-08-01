const generateResponse = (message, data, status) => {
  return { message, data, status };
};

const generateErrorResponse = (error, data, status) => {
  return { message: error.message, data, status };
};
module.exports = { generateResponse, generateErrorResponse };
