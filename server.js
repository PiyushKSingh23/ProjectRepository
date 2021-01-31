const  express=require('express')
const path=require('path')


const app=express()
app.use(express.json())


app.use(express.static(__dirname + '/dist/client'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/client/index.html'));
});





app.listen(5000,console.log('Server running in on port 5000'))