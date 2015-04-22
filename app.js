(function($){
    $(function () {
        $('#lucky').on('click', function (e) {
            var agencies = $('#agency a');
            var random = Math.floor((Math.random() * 2));
            $(agencies[random]).trigger('click');
        });
        
        $('#agency').on('click', 'a', function(e){
            e.preventDefault();
            var $el = $(this);
            var $elGet = $('#get-extra').empty();
            var searchKey = $el.data('search');
            var searchURI = $el.data('uri');
            
            $('#search').attr('name', searchKey);
            
            $('#form').attr('action', searchURI);
            
            if ($el.data('get')) {
                var searchGet = $el.data('get').split('&');
                
                $.each(searchGet, function(i, d) {
                    var parts = d.split('=');
                    $('<input type="hidden" />')
                        .attr('name', parts[0])
                        .attr('value', parts[1])
                        .appendTo($elGet);
                });
            }
        });
    });
}(jQuery));
