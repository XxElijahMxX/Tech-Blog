// defined packages
const path = require('path');

const express = require('express');

const session = require('express-session');

const exphbs = require('express-handlebars');

const routes = require('./controllers');

const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const app = express();
const PORT = process.env.PORT || 3001;

// project listening on PORT 3001
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on PORT: ${PORT}!`));
})