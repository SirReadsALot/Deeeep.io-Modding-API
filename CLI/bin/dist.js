var fs = require('fs');
var dir = './dist';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

fs.writeFile("dma-mod.dm")

