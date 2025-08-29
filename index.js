const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Helper functions
const isNumber = (str) => !isNaN(str) && !isNaN(parseFloat(str));
const isAlphabet = (char) => /^[a-zA-Z]$/.test(char);
const isSpecialChar = (char) => /[^a-zA-Z0-9]/.test(char) && char.length === 1;

// Process data function
const processData = (data, userInfo) => {
  const result = {
    is_success: true,
    user_id: userInfo.user_id,
    email: userInfo.email,
    roll_number: userInfo.roll_number,
    odd_numbers: [],
    even_numbers: [],
    alphabets: [],
    special_characters: [],
    sum: "0",
    concat_string: ""
  };

  let numbersSum = 0;
  const alphabetChars = [];

  data.forEach(item => {
    // Convert item to string to handle different input types
    const strItem = String(item);
    
    if (isNumber(strItem)) {
      const num = parseInt(strItem);
      numbersSum += num;
      
      if (num % 2 === 0) {
        result.even_numbers.push(strItem);
      } else {
        result.odd_numbers.push(strItem);
      }
    } else if (isAlphabet(strItem)) {
      const upperCaseChar = strItem.toUpperCase();
      result.alphabets.push(upperCaseChar);
      alphabetChars.push(strItem);
    } else if (isSpecialChar(strItem)) {
      result.special_characters.push(strItem);
    } else if (strItem.length > 1) {
      // Handle multi-character strings
      for (let char of strItem) {
        if (isAlphabet(char)) {
          const upperCaseChar = char.toUpperCase();
          result.alphabets.push(upperCaseChar);
          alphabetChars.push(char);
        } else if (isSpecialChar(char)) {
          result.special_characters.push(char);
        }
      }
    }
  });

  // Calculate sum as string
  result.sum = String(numbersSum);
  
  // Create concatenated string in reverse order with alternating caps
  const reversedAlphabets = [...alphabetChars].reverse();
  result.concat_string = reversedAlphabets.map((char, index) => {
    return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
  }).join('');

  return result;
};

// POST endpoint
app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;
    
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        error: "Invalid input. 'data' must be an array."
      });
    }

    // User information (replace with your details)
    const userInfo = {
      user_id: "sai_bharath_pediredla_09052005", // Replace with your name and DOB
      email: "saibharath1675@gmail.com", // Replace with your email
      roll_number: "22bce2136" // Replace with your roll number
    };

    const response = processData(data, userInfo);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({
      is_success: false,
      error: "Internal server error"
    });
  }
});

// Optional: GET endpoint (if needed for testing)
app.get('/bfhl', (req, res) => {
  res.status(200).json({
    operation_code: 1
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});