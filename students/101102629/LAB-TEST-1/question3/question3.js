const fs = require('fs')

const path = require('path');

const dicrectory = __dirname;

fs.readdir(dicrectory, (err, files) => {
    if (err) throw error;
    for (let file of files){
        if(file != 'wues.js'){
        fs.unlink(path.join(dicrectory, file), err => {
            if (err) throw err;
            console.log("Deleted file ... "+ file);
        })}
    }
})

console.log(dicrectory)

if( !fs.existsSync(dicrectory)){
    fs.mkdirSync(dicrectory);
    console.log("it's working")
}



let data = "COMP3123 Lab Test 1"
   
let i=1;
while (i <11){
    fs.writeFile('log'+i+'.txt', data, (err) => { 
        if (err) throw err; 
    })
    i++;
}



