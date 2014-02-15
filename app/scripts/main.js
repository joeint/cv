
(function($) {

	$(document).ready( function() {

		// init scrollspy
		$('body').scrollspy({ target: '#main-nav' });
		
		// init scroll-to effect navigation, adjust the scroll speed in milliseconds			
		$('#main-nav').localScroll(1000);
		$('#header').localScroll(1000);

		// form validation 
//		Modernizr.load({
//			test: Modernizr.input.autocomplete,
//			nope: ['custom_components/js_remove/jquery.validate.js', 'custom_components/js_remove/jquery.validate.bootstrap.js']
//		});

		// ajax contact form
		$('.contact-form form').submit( function(e) {
			
			e.preventDefault();

			$theForm = $(this);
			$btn = $(this).find('#submit-button');
			$alert = $(this).parent().find('.alert');			

			// just to check if validation supported without response, such as safari 5.1. Removing JS error on chrome
			if( !Modernizr.input.autocomplete ) {
				
				$theForm.validate({

					messages: {
						email: { required: "Email is required", email: "Please enter a valid email address"}
					}
				});	

				if( !$theForm.valid() ) {
					return;
				}
			}

			$btn.addClass('loading');
			$btn.attr('disabled', 'disabled');

			$.post('contact.php', $(this).serialize(), function(data){
				
				$message = data.message;
				
				if( data.result == true ){
					$theForm.slideUp('medium', function() {
						$alert.removeClass('alert-danger');
						$alert.addClass('alert-success').html($message).slideDown('medium');	
					});				
				}else {
					$alert.addClass('alert-danger').html($message).slideDown('medium');	
				}

				$btn.removeClass('loading');
				$btn.removeAttr('disabled');

			})
			.fail(function() { console.log('AJAX Error'); });

		});

	});

})(jQuery);