var http = require('http')
var fs = require('fs')

var server  = http.createServer((req,res)=>{
    // console.log('req url was made' + req.url)
   res.writeHead(200,{'Content-Type':'application/pdf'});
     var readStream = fs.createReadStream(__dirname+'/Hilary_Israel_Oba_VisualCV_Resume.pdf','utf8');
     readStream.pipe(res)
})
server.listen(3000,()=>{
    console.log('server is running now')
})