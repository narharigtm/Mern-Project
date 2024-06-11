// config.js
export const PORT = 5555;

export const mongoDBURL = process.env.MONGO_URL || 'mongodb://localhost:27017/books-collection?retryWrites=true&w=majority';
