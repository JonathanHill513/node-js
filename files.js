//writing files
fstat.writeFile('./docs/blogs1.txt', 'hello, world', () =>{
    console.log('file was written');
});
fstat.writeFile('./docs/blogs2.txt', 'hello, world', () =>{
    console.log('file was written');
});

//directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if (err){
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted')
    })
}

//deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file detected')
    })
}