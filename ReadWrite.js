const fs = require('fs');




// Blocking Synchronous way

// const TextIn = fs.readFileSync('./txt/input.txt' , 'utf-8');
// console.log(TextIn);
// const TextOut = `This can create new file : ${TextIn} .\n Created on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt' , TextOut);

// Non-Blocking Asynchronous way

fs.readFile('./txt/start.txt' , 'utf-8', (err , data1)=>{
    fs.readFile(`./txt/${data1}.txt` , 'utf-8', (err , data2)=>{
    console.log(data2);
    fs.readFile('./txt/append.txt' , 'utf-8' , (err,data3)=>{
        console.log(data3)
        fs.writeFile('./txt/final2.txt', `${data2}\n${data3}`, 'utf-8', err =>{
            console.log('your file is written')
        });
    });
    });
    
});
console.log("this will run first");





