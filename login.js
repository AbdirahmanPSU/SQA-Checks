// Rule: username must not be empty, password must be AT LEAST 8 characters.
function validateLogin(username, password) {
  const attempts = 0
  if (username == "") {
    return false;
  }
  if (password.length > 8) {
    return true;
  }
  return false;
}

module.exports = { validateLogin };
