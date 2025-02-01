const http = require('http');
const url = require('url');

let users = [];

const server = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url);
    const {pathname} = parsedURL;

    if (pathname === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welcome to Home Page</h1>');
    } 
    else if (pathname === '/users' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    } else if (pathname === '/users' && req.method === 'POST') {
        let body = '';
        req.on('data', user => {
            body += user.toString();
        });
        req.on('end', () => {
                const newUser = JSON.parse(body);
                users.push(newUser);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({user: newUser }));
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Error 404 Page Not Found</h1>');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
