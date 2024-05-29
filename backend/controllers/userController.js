const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
  try {
    const { name, location, age, email, phoneNumber, profilePicture, username, password, dreamDestination } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      location,
      age,
      email,
      phoneNumber,
      profilePicture,
      dreamDestination,
      username,
      password: hashedPassword,
    
    });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Add more controller functions for other user-related operations (e.g., login, update, delete)