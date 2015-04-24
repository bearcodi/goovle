(function($){
    $(function () {
        var resetDefaultSearch = function (e) {
            $('#default-search').trigger('click');
        };
        
        $('#lucky').on('click', function (e) {
            var agencies = $('#agency a.agency');
            var random = Math.floor((Math.random() * 2));
            $(agencies[random]).trigger('click');
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
       
       $(window).on('resize', function (){
           var docHeight = $(document).height();
           var modalHeight = $('div.modal-dialog').outerHeight(true);
           var frameHeight = $('#results-frame').attr('height').toInt();
           $('#results-frame').attr('height', docHeight - (modalHeight - frameHeight)  + 15 + 'px');
       });
       
        $('#form').on('submit', function(e){
            e.preventDefault();
            var $el = $(this);
            var $query = $el.serialize();
            var $uri = $el.attr('action');
            
            $('#results-frame').attr("src", $uri + '?' + $query);
            
            $('#results').modal('show');
        });
        
        $('#results').on('shown.bs.modal', function(){
            $(window).trigger('resize');
        });
    });
}(jQuery));
