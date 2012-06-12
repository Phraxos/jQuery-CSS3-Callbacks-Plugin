/*!
 * jQuery CSS3 Callbacks Plugin v1.0.0
 * Provides an easy cross-browser solution to getting JavaScript callbacks from CSS3 transitions and animations.
 *
 * Licensed under the MIT license.
 * Copyright 2012 Aaron Wynn
 * http://code.aaronwynn.com/jquery/css3callbacks/
 * https://github.com/Phraxos
 */

;(function($, undefined) {
    
$.fn.cssAnimationEnd = function( callback ) {
    var $this = this;
    if( $this.length > 0 ) {
        $this.bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function( e ){
            if ( $.isFunction( callback ) ) {
                callback.call( $this, e );
            }
        });
    }
    return $this;
};

})(jQuery);
(function($, undefined) {
    
$.fn.cssTransitionEnd = function( callback ) {
    var $this = this;
    if( $this.length > 0 ) {
        $this.bind('transitionend webkitTransitionEnd MSTransitionEnd oTransitionEnd', function( e ){
            if ( $.isFunction( callback ) ) {
                callback.call( $this, e );
            }
        });
    }
    return $this;
};

})(jQuery);
