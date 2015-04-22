(function($){
    $(function () {
        $('#lucky').on('click', function (e) {
            $('#search').val('punk');
        });
        
        $('#agency').on('click', 'a', function(e){
            e.preventDefault();
            var $el = $(this);
            var searchKey = $el.data('search');
            var searchURI = $el.data('uri');
            
            $('#search').attr('name', searchKey);
            
            $('#form').attr('action', searchURI);
            
            if ($el.hasData('get')) {
                var searchGet = $el.data('get').split('&');
                
                $.each(searchGet, function(i, d) {
                    console.log(i, d);
                });
                
            }
        });
    });
        
 });
}(jQuery));
