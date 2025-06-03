const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: ['http://localhost:5173', 'https://negocio-online-demo.vercel.app'] }));
app.use(express.json());

app.post('/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log('Form submission:', { name, email, phone, message });
  res.status(200).json({ message: 'Form submitted successfully' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));