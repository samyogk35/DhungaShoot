const socket = io(`ws:///localhost:1000`);


socket.on('connect', () =>{
    console.log('connected')
});
