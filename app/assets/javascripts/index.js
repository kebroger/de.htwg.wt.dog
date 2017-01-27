
$(function() {

    connect();

    function connect(){
        var protocol = 'ws://';
        if (window.location.protocol === 'https:') {
            protocol = 'wss://';
        }

        var socket = new WebSocket(protocol + location.host + '/socket');

        socket.onmessage = function(msg){
            var msg = JSON.parse(msg.data);
            fillSquares(msg);
        } ;

        function send(){
            socket.send("");
        }
    }
});  