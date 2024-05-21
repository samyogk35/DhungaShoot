const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const path = require('path');

const app = express();
const server = http.createServer(app); 
const io = socketIo(server);

const PORT = process.env.PORT || 5000;

//serve static files(include socket.io.js)
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/../index.html'); //Adjusted to navigate up one directory
})



io.on('connection', (socket)=>{
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });



//app.use(express.static("public"))
//app.listen(2000);
