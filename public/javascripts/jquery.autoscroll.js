(function($){
    $.fn.autoscroll = function(selector, config) {
	var config = jQuery.extend({
	    scrollTo: function(e){
		$(window).scrollTo( e , 500, { easing:'swing', queue:true, axis:'y' } );
		$("img", e).bind("load", function(){
		    $(window).scrollTo( e , 500, { easing:'swing', queue:true, axis:'y' } );
		});
	    }
	}, config);

        var target = this;

	config.scrollTo(target.find(selector).last());

	target.bind('as::append', function(){
	    var last = target.find(selector).last();
	    config.scrollTo(last);
	});

        return { refresh : function(){
	    config.scrollTo(target.find(selector).last());
	}};
     };
})(jQuery);