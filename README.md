# Bajaj Finserv Health API

A REST API built for the Full Stack assignment that processes arrays and returns categorized data according to specific requirements.

## API Endpoint

**Base URL:** `https://bajaj-finserv-health-9vfc.onrender.com/`

**POST Route:** `/bfhl`

## Features

- Processes input arrays and categorizes elements into:
  - Even numbers
  - Odd numbers
  - Alphabets (converted to uppercase)
  - Special characters
- Calculates sum of all numbers
- Generates concatenated string of alphabets in reverse order with alternating caps
- Returns user information in specified format

## Request Format

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

## Response Format

```json
{
  "is_success": true,
  "user_id": "sai_bharath_pediredla_09052005",
  "email": "saibharath1675@gmail.com",
  "roll_number": "22bce2136",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/saibharath954/Bajaj-Finserv-Health.git
cd Bajaj-Finserv-Health
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

## API Testing

### Using curl

```bash
curl -X POST https://your-deployed-url.railway.app/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R", "$"]}'
```

### Using JavaScript (Fetch API)

```javascript
const response = await fetch('https://your-deployed-url.railway.app/bfhl', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    data: ["a", "1", "334", "4", "R", "$"]
  })
});

const data = await response.json();
console.log(data);
```

## Technologies Used

- Node.js
- Express.js
- CORS middleware
- Environment variables with dotenv

## Deployment

This API can be deployed on:
- Railway
- Render
- Vercel
- Heroku
- Any Node.js hosting platform

## License

MIT License - see LICENSE file for details.

## Author

Sai Bharath  
Roll Number: 22BCE2136
Email: saibharath1675@gmail.com  
GitHub: [saibharath954](https://github.com/saibharath954)
```