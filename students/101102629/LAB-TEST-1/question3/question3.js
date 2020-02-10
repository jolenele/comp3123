const fs = require('fs')

const path = require('path');

const dicrectory = __dirname;

fs.readdir(dicrectory, (err, files) => {
    if (err) throw error;
    for (let file of files){
        if(file != 'delete.js' && file != 'add.js'){
        fs.unlink(path.join(dicrectory, file), err => {
            if (err) throw err;
            console.log("Deleted file ... "+ file);
        })}
    }
})

if( !fs.existsSync(dicrectory)){
    fs.mkdirSync(dicrectory);
}



let data = "COMP3123 Lab Test 1"
   
let i=1;
while (i <11){
    fs.writeFile('log'+i+'.txt', data, (err) => { 
        if (err) throw err; 
    })
    console.log('log'+i+'.txt')
    i++;
}



