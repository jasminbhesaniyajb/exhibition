const notificationMessages = {}

const successMessages = {
  signupSuccess: "Signed up successfully!",
  signupFacebookSuccess: " You are signed up with Facebook!",
  loginSuccess: "Logged-in successfully!",
  loginFacebookSuccess: "You are logged-in with Facebook!",
  emailSentSuccess: "Email sent successfully",
  passwordResetSuccess: "Your Password is reset successfully !!",
}

const errorMessages = {
  loginError: "Invalid Credentials !",
  signupError: "User is already registered !",
  unknownError: "Something went wrong",
  passwordMatchError: "Passwords do no match",
  fieldsEmptyError: "Fields cannot be empty",
  downloadFailedError: "Download failed try again letter !",
}

module.exports = { notificationMessages, successMessages, errorMessages }
