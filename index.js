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

const fs=require('fs/promises')
async function readFile(){
    try{
        const data=await fs.readFile('file.txt','utf8');
        console.log(data);
    }    catch(err){
        console.error('error reading line')
    }
}
readFile();                                                                        