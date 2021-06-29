const chalk = require("chalk")

exports.dmaAsset = {
    load: function(imgPaths) {
        for (const img of imgPaths) {
            console.log(chalk.yellow("> " + img + " image path have been loaded")) 
        }
    }
}

