
import { URL } from 'url';
import http from 'http';

const u = new URL(
    'https://www.example.com:8080/' +
    'products/list?category=books' +
    '&sort=asc#section2'
);

console.log(`Protocol=${u.protocol}`);
console.log(`Hostname=${u.hostname}`);
console.log(`Port=${u.port}`);
console.log(`Pathname=${u.pathname}`);
console.log(`Hash=${u.hash}`);

u.searchParams.forEach((v, k) => {
    console.log("searchParam:", k, '=', v);
});

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("URL Module Example - Check Render Logs for URL details");
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
});
