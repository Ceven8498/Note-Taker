const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Server init and Port
const app = express();
const PORT = process.env.PORT || 3001;

// Json urlencoded and Static.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start The Sever
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
