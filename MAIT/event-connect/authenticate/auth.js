function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    // Send a request to the server to validate the login
    console.log(`Login request - Username: ${username}, Password: ${password}`);
  }
  
  function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const userType = document.getElementById('userType').value;
    // Send a request to the server to create a new user
    console.log(`Signup request - Username: ${username}, Password: ${password}, User Type: ${userType}`);
  }
  