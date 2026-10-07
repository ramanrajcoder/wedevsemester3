//const os=require('os');

//console.log(os.platform()); 
//console.log(os.arch());
//console.log(os.cpus());
//console.log(os.freemem());
//console.log(os.totalmem());
//console.log(os.homedir());
//console.log(os.hostname());     
//console.log(os.networkInterfaces());


//const path = require('path');
//const filePath = path.join('/content','subfolder','test.txt');
//console.log(filePath);

// const fs=require('fs')
// fs.readFile('file.txt', 'utf8', (err,data)=>{
//     if(err){
//         console.error('error reading line')
//     }
// })

// const fs=require('fs/promises')
// async function readFile(){
//     try{
//         const data=await fs.readFile('file.txt','utf8');
//         console.log(data);
//     }    catch(err){
//         console.error('error reading line')
//     }
// }
// readFile()

// const cr=require('crypto');
// const secret='mysecret';
// const hash=cr.createHmac('sha256',secret)
// .update('hello world')
// .digest('hex');
// console .log(hash);

// console.log(cr.randomInt());

// const process=require('process');

// require('dotenv').config();
// const process=require('process');   
// console.log(process.env,PORT);
// console.log(process.env.argv);
// const http = require('http');

// const PORT = process.env.PORT || 3000;

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World\n');
// }).listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}/`);
// });
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});


app.get('/', (req, res) => {
    console.log('Request received');
    console.log('Request method:', req.method);
    console.log('Request URL:', req.url);
    console.log('Request headers:', req.headers);  
    console.log('Request query parameters:', req.query);
    console.log('Request body:', req.body);
    console.log('Request params:', req.params);
    console.log('Request cookies:', req.cookies);
    console.log('Request IP address:', req.ip);
    console.log('Request user agent:', req.get('User-Agent'));
    console.log('Request referer:', req.get('Referer'));
    console.log('Request protocol:', req.protocol);
    console.log('Request secure:', req.secure);
    console.log('Request hostname:', req.hostname);
    console.log('Request original URL:', req.originalUrl);
    console.log('Request subdomains:', req.subdomains);
    console.log('Request path:', req.path);
    console.log('Request fresh:', req.fresh);
    console.log('Request stale:', req.stale);
    console.log('Request xhr:', req.xhr);
    console.log('Request accepts:', req.accepts());
    console.log('Request accepts languages:', req.acceptsLanguages());
    console.log('Request accepts charsets:', req.acceptsCharsets());
    console.log('Request accepts encodings:', req.acceptsEncodings());             
    res.send('Hello World');
});

