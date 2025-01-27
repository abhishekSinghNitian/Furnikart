function validateUsername(username) {
  if (username.length < 4) {
    return "Username must be at least 4 characters long.";
  }
  if (username.length > 25) {
    return "Username must be at most 25 characters long.";
  }
  if (!/^[a-zA-Z0-9_]+$/.test(username)) {
    return "Username can only contain letters, numbers, and underscores.";
  }
  return null;
}

function validateEmail(email) {
  if (!/^[a-zA-Z0-9._%+-]+/.test(email)) {
    return "Email must start with alphanumeric characters, dots, underscores, percentage signs, plus signs, or hyphens.";
  }
  if (!/@/.test(email)) {
    return "Email must contain the '@' symbol.";
  }
  if (!/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return "Email domain must contain alphanumeric characters, dots, or hyphens, followed by a valid TLD (e.g., .com, .net).";
  }
  return null;
}

function validatePassword(password) {
  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }
  if (!/(?=.*[A-Z])/.test(password)) {
    return "Password must contain at least one uppercase letter.";
  }
  if (!/(?=.*[a-z])/.test(password)) {
    return "Password must contain at least one lowercase letter.";
  }
  if (!/(?=.*\d)/.test(password)) {
    return "Password must contain at least one digit.";
  }
  if (!/(?=.*[!@#$%^&*])/.test(password)) {
    return "Password must contain at least one special character.";
  }
  return null;
}

function validateInput(username, password, email) {
  const usernameMessage = validateUsername(username);
  const passwordMessage = validatePassword(password);
  const emailMessage = validateEmail(email);

  return {
    usernameMessage,
    passwordMessage,
    emailMessage,
  };
}

module.exports = {
  validateInput,
  validateEmail
}
