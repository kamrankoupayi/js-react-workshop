(function(){
    $('#btn').click(function(){
        const url = " https://demo1820703.mockable.io/message "
        $.ajax({
            url: url,
            method: "GET",
            success: function (data) {
                const msg = data.msg;
                $('#message').text(msg);
            },
            error: function (a) {
                alert("Error in ajax call "+a);
            }
        }); 
    });
})();