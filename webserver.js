const http = require('http');
const url = require('url');

const server = http.createServer((req, res)=>{
    const pathName = req.url;

    if (pathName==='/'|| pathName==='/overview'){
        res.end('this is overview');
    }else if (pathName==='/product'){
        res.end('this is product');
        console.log(pathName)
    }else {
        res.writeHead(404 , {
            'Content-type': 'text/html'
        })
        res.end('<h1>404 page not found</h1>')
    }
});
server.listen(8000 , '127.0.0.1' , ()=>{
    console.log('listning to port 8000');
});