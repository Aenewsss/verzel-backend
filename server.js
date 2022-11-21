const server = require('./app');

const PORT = process.env.PORT || 2002;

server.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});