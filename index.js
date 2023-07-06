const express = require('express');
const app = express();

// Sample data - Replace this with a proper database implementation
let users = [];
let nextUserId = 1;

// Middleware to parse JSON request body
app.use(express.json());

// Login Route
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  // Find user by email and password (replace with actual authentication logic)
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  
  // Generate and return authentication token
  const token = generateToken(user.id);
  res.status(200).json({ token });
});

// Registration Route
app.post('/auth/register', (req, res) => {
  const { email, password, username } = req.body;
  
  // Check if email is already used
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(409).json({ error: 'Email already exists' });
  }
  
  // Create a new user
  const newUser = {
    id: nextUserId++,
    email,
    password,
    username
  };
  users.push(newUser);
  
  // Generate and return authentication token
  const token = generateToken(newUser.id);
  res.status(201).json({ token });
});

// List of Users
app.get('/users', authenticateToken, (req, res) => {
  // Retrieve the list of users (excluding admin)
  const userList = users.filter(user => user.role !== 'admin');
  res.status(200).json(userList);
});

// Modify a User
app.put('/users/:id', authenticateToken, (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;
  
  // Find the user by ID
  const user = users.find(u => u.id === parseInt(id));
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  // Only allow administrators to modify users
  if (user.role !== 'admin') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  // Update the user's username and/or email
  if (username) {
    user.username = username;
  }
  if (email) {
    user.email = email;
  }
  
  res.status(200).json({ message: 'User updated successfully' });
});

// Middleware to authenticate the token
function authenticateToken(req, res, next) {
  // Get the token from the request header
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  // Perform token verification logic here
  
  // If token is valid, proceed to the next middleware/route
  next();
}

// Function to generate a token (replace with your actual token generation logic)
function generateToken(userId) {
  return 'generated_token';
}

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
