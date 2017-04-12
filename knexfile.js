require('dotenv').config({
    silent: true
});

module.exports = {

    development: {
        client: 'pg',
        connection: 'postgres://localhost/outreachAutoQuotes'
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL + "?ssl=true"
    }
};
