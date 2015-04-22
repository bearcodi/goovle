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
        });
        
  });
}(jQuery));
