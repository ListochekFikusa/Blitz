jQuery(document).ready(function() {

//Работа слайдера
let sliderScroller = 0;
jQuery("#caption_a2, #caption_b2, #clar_a2, #clar_b2").css({'display':'none'})
jQuery("#caption_a3, #caption_b3, #clar_a3, #clar_b3").css({'display':'none'})
jQuery("#caption_a4, #caption_b4, #clar_a4, #clar_b4").css({'display':'none'})

jQuery(".slider__viewport").click( function() {
	sliderScroller -= 940;
	if ( sliderScroller < -2820 ) { sliderScroller = 0;}
	jQuery(".slider__tape").css({'transform':`translateX(${sliderScroller}px)` })

	if ( sliderScroller == 0 ) {
		jQuery("#caption_a1, #caption_b1, #clar_a1, #clar_b1").css({'display':'block'})
		jQuery("#label_1").addClass("slider__label_focus")
	}else {
		jQuery("#caption_a1, #caption_b1, #clar_a1, #clar_b1").css({'display':'none'})
		jQuery("#label_1").removeClass("slider__label_focus")
	}
	
	if ( sliderScroller == -940 ) {
		jQuery("#caption_a2, #caption_b2, #clar_a2, #clar_b2").css({'display':'block'})
		jQuery("#label_2").addClass("slider__label_focus")
	}else {
		jQuery("#caption_a2, #caption_b2, #clar_a2, #clar_b2").css({'display':'none'})
		jQuery("#label_2").removeClass("slider__label_focus")
	}
	
	if ( sliderScroller == -1880 ) {
		jQuery("#caption_a3, #caption_b3, #clar_a3, #clar_b3").css({'display':'block'})
		jQuery("#label_3").addClass("slider__label_focus")
	}else {
		jQuery("#caption_a3, #caption_b3, #clar_a3, #clar_b3").css({'display':'none'})
		jQuery("#label_3").removeClass("slider__label_focus")
	}
	
	if ( sliderScroller == -2820 ) {
		jQuery("#caption_a4, #caption_b4, #clar_a4, #clar_b4").css({'display':'block'})
		jQuery("#label_4").addClass("slider__label_focus")
	}else {
		jQuery("#caption_a4, #caption_b4, #clar_a4, #clar_b4").css({'display':'none'})
		jQuery("#label_4").removeClass("slider__label_focus")
	}
})
})