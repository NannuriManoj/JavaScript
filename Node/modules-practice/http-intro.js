const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to / route');
    }
    else if(req.url === '/about'){
        res.end('Here is the about page');
    } else{
        res.end('No route found to this page');
    }
})

server.listen(3000);