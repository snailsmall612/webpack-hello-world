const path = require('path');
module.exports = {
    //webpack要打包的.js
    entry: {
        index: './index.js'
    },
    output: {
        //打包後的檔案名稱
        filename: 'bundle.js',
        //打包後的路徑，專案的根目錄下的public目錄
        path: path.resolve('./public'),
    }
};