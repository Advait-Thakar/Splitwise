require('dotenv').config()

const {
    DB_USER,
    DB_PASS,
    DB_HOST,
    DB_PORT,
    DB_NAME,
    PORT
} = process.env;

const mongoURI = `mongodb+srv://thakaradvait1804:TaSI5HJCE58Um6YE@cluster0.btxsahr.mongodb.net/`;

module.exports = {
    mongoURI, PORT
}