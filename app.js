(function($){
    $(function () {
        var resetDefaultSearch = function (e) {
            $('#default-search').trigger('click');
        };
        
        $('#lucky').on('click', function (e) {
            var agencies = $('#agency a.agency');
            var random = Math.floor((Math.random() * 2));
            $(agencies[random]).trigger('click');
            
            $('#agency').one('click', resetDefaultSearch);
            $('#govable-search').one('click', resetDefaultSearch);
            
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
       
        /*$('#form').on('submit', function(e){
            e.preventDefault();
            var $el = $(this);
            var $query = $el.serialize();
            var $uri = $el.attr('action');
            
            $('#results-frame').attr("src", $uri + '?' + $query);
            
            $('#results').show();
        });*/
    });
}(jQuery));
