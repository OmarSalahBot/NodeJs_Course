// const Calc = require('./Functions');
// const nums = require('./Module1');
// console.log(nums);
// console.log(Calc(nums.num,nums.num2));

// const os = require('os');
// console.log(os.userInfo());
// console.log(os.uptime());

// const SysInfo = {
//     Name : os.type(),
//     Data : os.release(),
//     Memory: os.totalmem(),
//     Freemem : os.freemem()
// }

// console.log(SysInfo);

// const path = require('path');
// const myPath = path.join(__dirname,'what','theFUck','ThisTHat');
// console.log(myPath);
// console.log(path.basename(myPath));

// console.log("Start System");

// const {writeFileSync, readFileSync} = require('fs');

// const Mytxt = readFileSync('./Content/What','utf-8');

// writeFileSync('./Content/NewText',`1: ${Mytxt}`);

// console.log("End System");

// const http = require('http');

// const server = http.createServer((req,res) =>{
//     if(req.url == '/'){
//         res.end("welcome to the home page ");
//     }
//     else if (req.url == '/about'){
//         res.end("ur in the about page rn /p setttings alinvite");
//     }
//     else {
//         res.end(`
//         <h1> No Content Here </h2>
//         <p> check the url </p>
//         `);
//     }
// });
// server.listen(5000,()=>{
//     console.log("server is working now");
// });

// const {readFile,writeFile} = require("fs").promises;

// const start = async () =>{
//     try{
//         const output1 = await readFile('./Content/NewText','utf-8');
//         const output2 = await readFile('./Content/Test','utf-8');
//         console.log(output1,output2);
//         await writeFile('./Content/OutPutText',`Output1 :${output1}  Output2 :${output2}`);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// start();

// let http = require('http');
// let {readFileSync} = require('fs');
// let homePage = readFileSync('./Homepage.html');

// let server = http.createServer((req,res)=>{
//     if(req.url === '/home'){
//         res.writeHead(200 ,{'content-type' :'text/html'});
//         res.write(homePage);
//         res.end();
//     }
//     else {
//         res.writeHead(404);
//         res.write("No Content Here");
//         res.end();
//     }
// });
// server.listen(5000);

// ! how to make server with express js , it is better that only node js
let {data} = require('./Mydata');
let port = 5000;
let express = require("express");
let path = require('path');
let app = express();

app.use(express.static('./public'));

app.get("/", (req, res) => {
  console.log(data);
  let OnlyNeeddata = data.map((e)=>{
    let {homeTown,secretBase} = e;
    return{homeTown,secretBase};
  });
  res.json(OnlyNeeddata);

});
app.all('*',(req,res) => {
    res.status(404).send(`<h2> No Content Here :( </h2>`);
});

app.listen(port, () => {

  console.log(`Server runing on port : ${port}`);

});
