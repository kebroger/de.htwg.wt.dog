
$(function() {

    connect();

    function connect(){
        var socket = new WebSocket("ws://localhost:9000/socket");

        socket.onmessage = function(msg){
            var msg = JSON.parse(msg.data);
            fillSquares(msg);
        } ;

        function send(){
            socket.send("");
        }

    }
});  