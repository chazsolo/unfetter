(function iife( $ ) {
    $(document).ready(function onReady() {
        // init sidebar
        $('.button-collapse').sideNav({
            menuWidth: 320,
            activationWidth: 70,
            edge: 'left'
        });

        // init dropdown
        $('.dropdown-button').dropdown({
            inDuration: 300,
            outDuration: 225,
            // does not change width of dropdown to that of the activator
            constrain_width: false,
            // activate on hover
            hover: false,
            // spacing from edge
            gutter: 0,
            // displays dropdown below the button
            belowOrigin: false
        });
    });
})(jQuery);
