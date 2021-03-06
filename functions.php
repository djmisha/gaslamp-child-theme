<?php
/*This file is part of GaslampChildTheme, Divi child theme.

All functions of this file will be loaded before of parent theme functions.
Learn more at https://codex.wordpress.org/Child_Themes.

Note: this function loads the parent stylesheet before, then child theme stylesheet
(leave it in place unless you know what you are doing.)
*/

if (! function_exists('suffice_child_enqueue_child_styles')) {
    function GaslampChildTheme_enqueue_child_styles()
    {
        // loading parent style
        wp_register_style(
            'parente2-style',
            get_template_directory_uri() . '/style.css'
        );

        wp_enqueue_style('parente2-style');
        // loading child style
        wp_register_style(
            'childe2-style',
            get_stylesheet_directory_uri() . '/style.css'
        );
        wp_enqueue_style('childe2-style');
    }
}
add_action('wp_enqueue_scripts', 'GaslampChildTheme_enqueue_child_styles');

/*Write here your own functions */


// function GaslampChildTheme_enqueue_child_scripts()
// {
//     // loading custom js files
//     wp_register_script(
//         'child-scripts-custom',
//         get_stylesheet_directory_uri() . '/js/scripts.js'
//     );
//     wp_engueue_script('child-scripts-custom');
// }

// add_action('wp_engueue_script', 'GaslampChildTheme_enqueue_child_scripts');


function theme_js() {
    wp_enqueue_script( 'theme_js', get_stylesheet_directory_uri() . '/js/scripts.js', array( 'jquery' ), '1.0', true );
}

add_action('wp_enqueue_scripts', 'theme_js');
