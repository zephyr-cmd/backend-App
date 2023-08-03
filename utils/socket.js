module.exports = (io) => {

    io.on('connection', socket => {

        console.log('L-5,----------->new connection'); 
        
		socket.on('disconnect', () => console.log('L-7, -------------------> disconnected')); 
		
	})
}