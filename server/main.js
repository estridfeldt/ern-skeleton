const path = require('path')
const Server = require('http').Server
const Express = require('express')

const app = new Express();
const server = new Server(app);

app.use(Express.static(path.join(__dirname, '../dist')));


const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.info(`Server running on http://localhost:${port} [${env}]`);
});
