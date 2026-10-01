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
const http = require('http');

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

