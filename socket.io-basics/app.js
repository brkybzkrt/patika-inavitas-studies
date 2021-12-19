const app = require('express')();

const server = require('http').createServer(app);
const io = require('socket.io')(server);


app.set('view engine', 'ejs'); // Burada node.js uygulamamızda kullanacağımız template'i tanımlıyoruz (ejs, handlebars, jade vb.)



app.get('/', (req, res) =>{ // başlangıç route'umuz

    res.render('home'); // node.js klasör yapısında views klasörü otomatik tanımlıdır yani ./views/home.ejs gibi uzantıyı yazmamıza gerek yoktur.
});

const port= 3012

server.listen(port,()=>{
    console.log('listening on port : 3012');
});


io.on('connection', socket=>{
    console.log(`Kullanıcı ${socket.id} bağlandı :D`);

    socket.on('message',(data)=>{
        socket.broadcast.emit('message', data); // Mesajı atan kullanıcı hariç tüm aktif kullanıcılara mesajı iletiyoruz.
    })

    socket.on('disconnect',()=> { 

        console.log(`Kullanıcı ${socket.id} ayrıldı :C`);
  
    });
  
})


