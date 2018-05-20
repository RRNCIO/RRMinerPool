var fs = require('fs');

var configFile = (function(){
    for (var i = 0; i < process.argv.length; i++){
        if (process.argv[i].indexOf('-config=') === 0)
            return process.argv[i].split('=')[1];
    }
    return 'config.json';
})();


try {
    global.config = JSON.parse(fs.readFileSync(configFile));
}
catch(e){
    console.error('Failed to read config file ' + configFile + '\n\n' + e);
    return;
}
global.version = '1.0.0'
global.doDonations = false;
global.devDonations = 'RRRWViRfAhx82muxmNykyGffMWTVwJmTK8b2SGES8WSB2vbkWnCaTy8GDqaS1qnuUGB5rh8WcKhuwJHP2o1vjbhw1kcBg1ZJA';