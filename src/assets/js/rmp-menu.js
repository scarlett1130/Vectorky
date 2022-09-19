/**
 * This file contain the scrips for menu frontend.
 * @author ExpressTech System
 *
 * @since 4.0.0
 */

jQuery(document).ready(function(jQuery) {

    /**
     * RmpMenu Class
     * This RMP class is handling the frontend events and action on menu elements.
     * @since      4.0.0
     * @access     public
     *
     * @class      RmpMenu
     */
    var rmp_menu = {
        "ajaxURL": "https:\/\/vectorky.com\/wp-admin\/admin-ajax.php",
        "wp_nonce": "765f305763",
        "menu": [{
            "menu_theme": null,
            "theme_type": "default",
            "theme_location_menu": "",
            "submenu_submenu_arrow_width": "40",
            "submenu_submenu_arrow_width_unit": "px",
            "submenu_submenu_arrow_height": "39",
            "submenu_submenu_arrow_height_unit": "px",
            "submenu_arrow_position": "right",
            "submenu_sub_arrow_background_colour": "#b4563a",
            "submenu_sub_arrow_background_hover_colour": "#b4563a",
            "submenu_sub_arrow_background_colour_active": "#b4563a",
            "submenu_sub_arrow_background_hover_colour_active": "#b4563a",
            "submenu_sub_arrow_border_width": 1,
            "submenu_sub_arrow_border_width_unit": "px",
            "submenu_sub_arrow_border_colour": "#b4563a",
            "submenu_sub_arrow_border_hover_colour": "#b4563a",
            "submenu_sub_arrow_border_colour_active": "#b4563a",
            "submenu_sub_arrow_border_hover_colour_active": "#b4563a",
            "submenu_sub_arrow_shape_colour": "#b4563a",
            "submenu_sub_arrow_shape_hover_colour": "#b4563a",
            "submenu_sub_arrow_shape_colour_active": "#b4563a",
            "submenu_sub_arrow_shape_hover_colour_active": "#b4563a",
            "use_header_bar": "off",
            "header_bar_items_order": "{\"logo\":\"on\",\"title\":\"on\",\"search\":\"on\",\"html content\":\"on\"}",
            "header_bar_title": "",
            "header_bar_html_content": "",
            "header_bar_logo": "",
            "header_bar_logo_link": "",
            "header_bar_logo_width": "",
            "header_bar_logo_width_unit": "%",
            "header_bar_logo_height": "",
            "header_bar_logo_height_unit": "px",
            "header_bar_height": "80",
            "header_bar_height_unit": "px",
            "header_bar_padding": {
                "top": "0px",
                "right": "5%",
                "bottom": "0px",
                "left": "5%"
            },
            "header_bar_font": "",
            "header_bar_font_size": "14",
            "header_bar_font_size_unit": "px",
            "header_bar_text_color": "#ffffff",
            "header_bar_background_color": "#ffffff",
            "header_bar_breakpoint": "800",
            "header_bar_position_type": "fixed",
            "header_bar_adjust_page": null,
            "header_bar_scroll_enable": "off",
            "header_bar_scroll_background_color": "#36bdf6",
            "mobile_breakpoint": "600",
            "tablet_breakpoint": "991",
            "transition_speed": "0.5",
            "sub_menu_speed": "0.2",
            "show_menu_on_page_load": "",
            "menu_disable_scrolling": "off",
            "menu_overlay": "off",
            "menu_overlay_colour": "rgba(0, 0, 0, 0.7)",
            "desktop_menu_width": "",
            "desktop_menu_width_unit": "%",
            "desktop_menu_positioning": "fixed",
            "desktop_menu_side": "",
            "desktop_menu_to_hide": "",
            "use_current_theme_location": "off",
            "mega_menu": {
                "225": "off",
                "227": "off",
                "229": "off",
                "228": "off",
                "226": "off"
            },
            "desktop_submenu_open_animation": "fade",
            "desktop_submenu_open_animation_speed": "100ms",
            "desktop_submenu_open_on_click": "",
            "desktop_menu_hide_and_show": "",
            "menu_name": "Default Menu",
            "menu_to_use": "main-menu",
            "different_menu_for_mobile": "off",
            "menu_to_use_in_mobile": "main-menu",
            "use_mobile_menu": "on",
            "use_tablet_menu": "on",
            "use_desktop_menu": "",
            "menu_display_on": "all-pages",
            "menu_to_hide": "",
            "submenu_descriptions_on": "",
            "custom_walker": "",
            "menu_background_colour": "#b4563a",
            "menu_depth": "5",
            "smooth_scroll_on": "off",
            "smooth_scroll_speed": "500",
            "menu_font_icons": [],
            "menu_links_height": "65",
            "menu_links_height_unit": "px",
            "menu_links_line_height": "65",
            "menu_links_line_height_unit": "px",
            "menu_depth_0": "5",
            "menu_depth_0_unit": "%",
            "menu_font_size": "35",
            "menu_font_size_unit": "px",
            "menu_font": "",
            "menu_font_weight": "normal",
            "menu_text_alignment": "center",
            "menu_text_letter_spacing": "",
            "menu_word_wrap": "off",
            "menu_link_colour": "#ffffff",
            "menu_link_hover_colour": "#ffffff",
            "menu_current_link_colour": "#ffffff",
            "menu_current_link_hover_colour": "#ffffff",
            "menu_item_background_colour": "#b4563a",
            "menu_item_background_hover_colour": "#b4563a",
            "menu_current_item_background_colour": "#b4563a",
            "menu_current_item_background_hover_colour": "#b4563a",
            "menu_border_width": "0",
            "menu_border_width_unit": "px",
            "menu_item_border_colour": "#ffffff",
            "menu_item_border_colour_hover": "#ffffff",
            "menu_current_item_border_colour": "#ffffff",
            "menu_current_item_border_hover_colour": "#ffffff",
            "submenu_links_height": "40",
            "submenu_links_height_unit": "px",
            "submenu_links_line_height": "40",
            "submenu_links_line_height_unit": "px",
            "menu_depth_side": "left",
            "menu_depth_1": "5",
            "menu_depth_1_unit": "%",
            "menu_depth_2": "15",
            "menu_depth_2_unit": "%",
            "menu_depth_3": "20",
            "menu_depth_3_unit": "%",
            "menu_depth_4": "25",
            "menu_depth_4_unit": "%",
            "submenu_item_background_colour": "#b4563a",
            "submenu_item_background_hover_colour": "#b4563a",
            "submenu_current_item_background_colour": "#b4563a",
            "submenu_current_item_background_hover_colour": "#b4563a",
            "submenu_border_width": "0",
            "submenu_border_width_unit": "px",
            "submenu_item_border_colour": "#ffffff",
            "submenu_item_border_colour_hover": "#ffffff",
            "submenu_current_item_border_colour": "#ffffff",
            "submenu_current_item_border_hover_colour": "#ffffff",
            "submenu_font_size": "20",
            "submenu_font_size_unit": "px",
            "submenu_font": "",
            "submenu_font_weight": "normal",
            "submenu_text_letter_spacing": "",
            "submenu_text_alignment": "center",
            "submenu_link_colour": "#ffffff",
            "submenu_link_hover_colour": "#ffffff",
            "submenu_current_link_colour": "#ffffff",
            "submenu_current_link_hover_colour": "#ffffff",
            "inactive_arrow_shape": "\u25bc",
            "active_arrow_shape": "\u25b2",
            "inactive_arrow_font_icon": "",
            "active_arrow_font_icon": "",
            "inactive_arrow_image": "",
            "active_arrow_image": "",
            "submenu_arrow_width": "40",
            "submenu_arrow_width_unit": "px",
            "submenu_arrow_height": "49",
            "submenu_arrow_height_unit": "px",
            "arrow_position": "right",
            "menu_sub_arrow_shape_colour": "#b4563a",
            "menu_sub_arrow_shape_hover_colour": "#b4563a",
            "menu_sub_arrow_shape_colour_active": "#b4563a",
            "menu_sub_arrow_shape_hover_colour_active": "#b4563a",
            "menu_sub_arrow_border_width": 1,
            "menu_sub_arrow_border_width_unit": "px",
            "menu_sub_arrow_border_colour": "#b4563a",
            "menu_sub_arrow_border_hover_colour": "#b4563a",
            "menu_sub_arrow_border_colour_active": "#b4563a",
            "menu_sub_arrow_border_hover_colour_active": "#b4563a",
            "menu_sub_arrow_background_colour": "#b4563a",
            "menu_sub_arrow_background_hover_colour": "#b4563a",
            "menu_sub_arrow_background_colour_active": "#b4563a",
            "menu_sub_arrow_background_hover_colour_active": "#b4563a",
            "fade_submenus": "off",
            "fade_submenus_side": "left",
            "fade_submenus_delay": "100",
            "fade_submenus_speed": "500",
            "use_slide_effect": "off",
            "slide_effect_back_to_text": "Back",
            "accordion_animation": "off",
            "auto_expand_all_submenus": "off",
            "auto_expand_current_submenus": "off",
            "menu_item_click_to_trigger_submenu": "on",
            "button_width": "55",
            "button_width_unit": "px",
            "button_height": "55",
            "button_height_unit": "px",
            "button_background_colour": "#000000",
            "button_background_colour_hover": "#b4563a",
            "button_background_colour_active": "#b4563a",
            "toggle_button_border_radius": "5",
            "button_transparent_background": "off",
            "button_left_or_right": "right",
            "button_position_type": "fixed",
            "button_distance_from_side": "4",
            "button_distance_from_side_unit": "%",
            "button_top": "25",
            "button_top_unit": "px",
            "button_push_with_animation": "off",
            "button_click_animation": "boring",
            "button_line_margin": "5",
            "button_line_margin_unit": "px",
            "button_line_width": "35",
            "button_line_width_unit": "px",
            "button_line_height": "3",
            "button_line_height_unit": "px",
            "button_line_colour": "#ffffff",
            "button_line_colour_hover": "#ffffff",
            "button_line_colour_active": "#ffffff",
            "button_font_icon": "",
            "button_font_icon_when_clicked": "",
            "button_image": "",
            "button_image_when_clicked": "",
            "button_title": "",
            "button_title_open": "",
            "button_title_position": "left",
            "button_font": "",
            "button_font_size": "14",
            "button_font_size_unit": "px",
            "button_title_line_height": "13",
            "button_title_line_height_unit": "px",
            "button_text_colour": "#ffffff",
            "button_trigger_type_click": "on",
            "button_trigger_type_hover": "off",
            "button_click_trigger": "#responsive-menu-button",
            "items_order": {
                "title": "on",
                "menu": "on",
                "search": "",
                "additional content": "on"
            },
            "menu_title": "",
            "menu_title_link": "",
            "menu_title_link_location": "_self",
            "menu_title_image": "",
            "menu_title_font_icon": "",
            "menu_title_section_padding": {
                "top": "10%",
                "right": "5%",
                "bottom": "0%",
                "left": "5%"
            },
            "menu_title_background_colour": "#b4563a",
            "menu_title_background_hover_colour": "#212121",
            "menu_title_font_size": "20",
            "menu_title_font_size_unit": "px",
            "menu_title_alignment": "center",
            "menu_title_font_weight": "400",
            "menu_title_font_family": "",
            "menu_title_colour": "#ffffff",
            "menu_title_hover_colour": "#ffffff",
            "menu_title_image_width": "",
            "menu_title_image_width_unit": "%",
            "menu_title_image_height": "",
            "menu_title_image_height_unit": "px",
            "menu_additional_content": "<div class=\"col-md-4 col-sm-4 rbox box\">\r\n<ul class=\"menu-add text-right\">\r\n<li><h3><strong>SHELBYVILLE<\/strong><\/h3><\/li>\r\n<li><a href=\"tel:(502) 633-7585\">(502) 633-7585<\/a><\/li>\r\n<li>1535 Old Finchville Road<\/li>\r\n<li>Shelbyville, KY 40065<\/li>\r\n<\/ul>\r\n<\/div>\r\n<div class=\"col-md-4 col-sm-4 mbox box\">\r\n<div class=\"menu-logo text-center\"> <img src=\"https:\/\/vectorky.com\/wp-content\/uploads\/2020\/06\/menulogo.png\" alt=\"menu_logo\" border=\"0\"> <\/div>\r\n<\/div>\r\n\r\n<div class=\"col-md-4 col-sm-4 lbox box\">\r\n<ul class=\"menu-add text-left\">\r\n<li><h3><strong>OWENSBORO<\/strong><\/h3><\/li>\r\n<li><a href=\"tel:(270) 984-2923\">(270) 984-2923<\/a><\/li>\r\n<li>400 E Second St<\/li>\r\n<li>Owensboro, KY 40303<\/li>\r\n<\/ul>\r\n<\/div>\r\n<div id=\"mmenu\" class=\"col-md-12 col-sm-12 mdl box\">\r\n<ul>\r\n<li class=\"menu-item menu-item-type-post_type menu-item-object-page\"><a href=\"https:\/\/vectorky.com\/privacy\/\">Privacy Policy<\/a><\/li>\r\n<li class=\"menu-item menu-item-type-post_type menu-item-object-page\"><a href=\"https:\/\/vectorky.com\/terms\/\">Terms of use<\/a><\/li>\r\n<li class=\"menu-item menu-item-type-post_type menu-item-object-page\"><a href=\"https:\/\/vectorky.com\/disclaimer\/\">Disclaimer<\/a><\/li>\r\n<\/ul>\r\n<\/div>",
            "menu_additional_section_padding": {
                "left": "5%",
                "top": "0px",
                "right": "5%",
                "bottom": "0px"
            },
            "menu_additional_content_font_size": "16",
            "menu_additional_content_font_size_unit": "px",
            "menu_additional_content_alignment": "center",
            "menu_additional_content_colour": "#ffffff",
            "menu_search_box_text": "Search",
            "menu_search_section_padding": {
                "left": "5%",
                "top": "0px",
                "right": "5%",
                "bottom": "0px"
            },
            "menu_search_box_height": "45",
            "menu_search_box_height_unit": "px",
            "menu_search_box_border_radius": "30",
            "menu_search_box_text_colour": "#333333",
            "menu_search_box_background_colour": "#ffffff",
            "menu_search_box_placeholder_colour": "#c7c7cd",
            "menu_search_box_border_colour": "#dadada",
            "menu_section_padding": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
            },
            "menu_width": "100",
            "menu_width_unit": "%",
            "menu_maximum_width": "",
            "menu_maximum_width_unit": "px",
            "menu_minimum_width": "",
            "menu_minimum_width_unit": "px",
            "menu_auto_height": "off",
            "menu_container_padding": {
                "top": "0px",
                "right": "0px",
                "bottom": "0px",
                "left": "0px"
            },
            "menu_container_background_colour": "#b4563a",
            "menu_background_image": "",
            "animation_type": "push",
            "menu_appear_from": "right",
            "animation_speed": "0.5",
            "page_wrapper": "",
            "menu_close_on_body_click": "off",
            "menu_close_on_scroll": "off",
            "menu_close_on_link_click": "off",
            "enable_touch_gestures": "",
            "breakpoint": "991",
            "menu_depth_5": "30",
            "menu_depth_5_unit": "%",
            "keyboard_shortcut_close_menu": "27,37",
            "keyboard_shortcut_open_menu": "32,39",
            "button_image_alt": "",
            "button_image_alt_when_clicked": "",
            "button_font_icon_type": "font-awesome",
            "button_font_icon_when_clicked_type": "font-awesome",
            "button_trigger_type": "click",
            "active_arrow_image_alt": "",
            "inactive_arrow_image_alt": "",
            "active_arrow_font_icon_type": "font-awesome",
            "inactive_arrow_font_icon_type": "font-awesome",
            "menu_adjust_for_wp_admin_bar": "off",
            "menu_title_image_alt": "",
            "menu_title_font_icon_type": "font-awesome",
            "minify_scripts": "off",
            "scripts_in_footer": "off",
            "external_files": "off",
            "remove_fontawesome": "",
            "remove_bootstrap": "",
            "shortcode": "off",
            "mobile_only": "off",
            "hide_on_mobile": "off",
            "hide_on_desktop": "off",
            "excluded_pages": null,
            "custom_css": "",
            "desktop_menu_options": "{\"20\":{\"type\":\"standard\",\"width\":\"auto\",\"parent_background_colour\":\"\",\"parent_background_image\":\"\"},\"21\":{\"type\":\"standard\",\"width\":\"auto\",\"parent_background_colour\":\"\",\"parent_background_image\":\"\"},\"25\":{\"type\":\"standard\",\"width\":\"auto\",\"parent_background_colour\":\"\",\"parent_background_image\":\"\"},\"503\":{\"width\":\"auto\",\"widgets\":[{\"title\":{\"enabled\":\"true\"}}]},\"35\":{\"width\":\"auto\",\"widgets\":[{\"title\":{\"enabled\":\"true\"}}]},\"363\":{\"width\":\"auto\",\"widgets\":[{\"title\":{\"enabled\":\"true\"}}]},\"362\":{\"width\":\"auto\",\"widgets\":[{\"title\":{\"enabled\":\"true\"}}]},\"361\":{\"width\":\"auto\",\"widgets\":[{\"title\":{\"enabled\":\"true\"}}]},\"360\":{\"width\":\"auto\",\"widgets\":[{\"title\":{\"enabled\":\"true\"}}]},\"480\":{\"type\":\"standard\",\"width\":\"auto\",\"parent_background_colour\":\"\",\"parent_background_image\":\"\"},\"24\":{\"type\":\"standard\",\"width\":\"auto\",\"parent_background_colour\":\"\",\"parent_background_image\":\"\"}}",
            "single_menu_height": "80",
            "single_menu_height_unit": "px",
            "single_menu_line_height": "80",
            "single_menu_line_height_unit": "px",
            "single_menu_font": "",
            "single_menu_font_size": "14",
            "single_menu_font_size_unit": "px",
            "single_menu_submenu_height": "",
            "single_menu_submenu_height_unit": "auto",
            "single_menu_submenu_line_height": "40",
            "single_menu_submenu_line_height_unit": "px",
            "single_menu_submenu_font": "",
            "single_menu_submenu_font_size": "12",
            "single_menu_submenu_font_size_unit": "px",
            "single_menu_item_link_colour": "#000000",
            "single_menu_item_link_colour_hover": "#000000",
            "single_menu_item_background_colour": "#ffffff",
            "single_menu_item_background_colour_hover": "#ffffff",
            "single_menu_item_submenu_link_colour": "#000000",
            "single_menu_item_submenu_link_colour_hover": "#000000",
            "single_menu_item_submenu_background_colour": "#ffffff",
            "single_menu_item_submenu_background_colour_hover": "#ffffff",
            "header_bar_logo_alt": "",
            "admin_theme": "dark",
            "menu_title_padding": {
                "left": "5%",
                "top": "0px",
                "right": "5%",
                "bottom": "0px"
            },
            "menu_id": 870,
            "active_toggle_contents": "\u25b2",
            "inactive_toggle_contents": "\u25bc"
        }]
    };
    class RmpMenu {

        /**
         * This is constructor function which is initialize the elements and options.
         * @access public
         * @since 4.0.0
         * @param {Array} options List of options.
         */
        constructor(options) {
            RmpMenu.activeToggleClass = 'is-active';
            RmpMenu.openContainerClass = 'rmp-menu-open';
            RmpMenu.activeSubMenuArrowClass = 'rmp-menu-subarrow-active';
            RmpMenu.subMenuClass = '.rmp-submenu';

            this.options = options;
            this.menuId = this.options['menu_id'];
            this.trigger = '#rmp_menu_trigger-' + this.menuId;

            this.isOpen = false;

            this.container = '#rmp-container-' + this.menuId;
            this.headerBar = '#rmp-header-bar-' + this.menuId;
            this.menuWrap = 'ul#rmp-menu-' + this.menuId;
            this.subMenuArrow = '.rmp-menu-subarrow';
            this.wrapper = '.rmp-container';
            this.linkElement = '.rmp-menu-item-link';
            this.pageWrapper = this.options['page_wrapper'];
            this.use_desktop_menu = this.options['use_desktop_menu'];
            this.originalHeight = '',
                this.animationSpeed = this.options['animation_speed'] * 1000;
            this.hamburgerBreakpoint = this.options['tablet_breakpoint'];
            this.subMenuTransitionTime = this.options['sub_menu_speed'] * 1000;

            if (this.options['button_click_trigger'].length > 0) {
                this.trigger = this.trigger + ' , ' + this.options['button_click_trigger'];
            }

            //Append hamburger icon inside an element
            if (this.options['button_position_type'] == 'inside-element') {
                var destination = jQuery(this.trigger).attr('data-destination');
                jQuery(this.trigger).appendTo(jQuery(destination).parent());
            }

            this.init();
        }

        /**
         * This function register the events and initiate the menu settings.
         */
        init() {
                const self = this;

                /**
                 * Register click event of trigger.
                 * @fires click
                 */
                jQuery(this.trigger).on('click', function(e) {
                    e.stopPropagation();
                    self.triggerMenu();
                });

                // Show/Hide sub menu item when click on item toggle.
                jQuery(self.menuWrap).find(self.subMenuArrow).on('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    self.triggerSubArrow(this);
                });

                if ('on' == self.options['menu_close_on_body_click']) {
                    jQuery(document).on('click', 'body', function(e) {
                        if (jQuery(window).width() < self.hamburgerBreakpoint) {
                            if (self.isOpen) {
                                if (jQuery(e.target).closest(self.container).length || jQuery(e.target).closest(self.target).length) {
                                    return;
                                }
                            }
                            self.closeMenu();
                        }
                    });
                }

                /**
                 * Close the menu when click on menu item link before load.
                 */
                if (self.options['menu_close_on_link_click'] == 'on') {

                    jQuery(self.linkElement).on('click', function(e) {

                        if (jQuery(window).width() < self.hamburgerBreakpoint) {
                            e.preventDefault();

                            // When close menu on parent clicks is on.
                            if (self.options['menu_item_click_to_trigger_submenu'] == 'on') {
                                if (jQuery(this).is('.rmp-menu-item-has-children > ' + self.linkElement)) {
                                    return;
                                }
                            }

                            let _href = jQuery(this).attr('href');
                            let _target = (typeof jQuery(this).attr('target')) == 'undefined' ? '_self' : jQuery(this).attr('target');

                            if (self.isOpen) {
                                if (jQuery(e.target).closest(this.subMenuArrow).length) {
                                    return;
                                }
                                if (typeof _href != 'undefined') {
                                    self.closeMenu();
                                    setTimeout(function() {
                                        window.open(_href, _target);
                                    }, self.animationSpeed);
                                }
                            }
                        }
                    });
                }

                // Expand Sub items on Parent Item Click.
                if ('on' == self.options['menu_item_click_to_trigger_submenu']) {
                    jQuery('.rmp-menu-item-has-children > ' + self.linkElement).on('click', function(e) {
                        if (jQuery(window).width() < self.hamburgerBreakpoint) {
                            e.preventDefault();
                            self.triggerSubArrow(
                                jQuery(this).children('.rmp-menu-subarrow').first()
                            );
                        }
                    });
                }
            }
            /**
             * Set push translate for toggle and page wrapper.
             */
        setWrapperTranslate() {
            let translate, translateContainer;
            switch (this.options['menu_appear_from']) {
                case 'left':
                    translate = 'translateX(' + this.menuWidth() + 'px)';
                    translateContainer = 'translateX(-' + this.menuWidth() + 'px)';
                    break;
                case 'right':
                    translate = 'translateX(-' + this.menuWidth() + 'px)';
                    translateContainer = 'translateX(' + this.menuWidth() + 'px)';
                    break;
                case 'top':
                    translate = 'translateY(' + this.wrapperHeight() + 'px)';
                    translateContainer = 'translateY(-' + this.menuHeight() + 'px)';
                    break;
                case 'bottom':
                    translate = 'translateY(-' + this.menuHeight() + 'px)';
                    translateContainer = 'translateY(' + this.menuHeight() + 'px)';
                    break;
            }

            if (this.options['animation_type'] == 'push') {
                jQuery(this.pageWrapper).css({ 'transform': translate });

                //If push Wrapper has body element then handle menu position.
                if ('body' == this.pageWrapper) {
                    jQuery(this.container).css({ 'transform': translateContainer });
                }

            }

            if (this.options['button_push_with_animation'] == 'on') {
                jQuery(this.trigger).css({ 'transform': translate });
            }

        }

        /**
         * Clear push translate on button and page wrapper.
         */
        clearWrapperTranslate() {

            if (this.options['animation_type'] == 'push') {
                jQuery(this.pageWrapper).css({ 'transform': '' });
            }

            if (this.options['button_push_with_animation'] == 'on') {
                jQuery(this.trigger).css({ 'transform': '' });
            }
        }

        /**
         * Function to fadeIn the hamburger menu container.
         */
        fadeMenuIn() {
            jQuery(this.container).fadeIn(this.animationSpeed);
        }

        /**
         * Function to fadeOut the hamburger menu container.
         */
        fadeMenuOut() {
            jQuery(this.container)
                .fadeOut(this.animationSpeed, function() {
                    jQuery(this).css('display', '');
                });
        }

        /**
         * Function is use to open the hamburger menu.
         *
         * @since 4.0.0
         */
        openMenu() {
            var self = this;
            jQuery(this.trigger).addClass(RmpMenu.activeToggleClass);
            jQuery(this.container).addClass(RmpMenu.openContainerClass);

            //this.pushMenuTrigger();

            if (this.options['animation_type'] == 'fade') {
                this.fadeMenuIn();
            } else {
                this.setWrapperTranslate();
            }

            this.isOpen = true;
        }

        /**
         * Function is use to close the hamburger menu.
         *
         * @since 4.0.0
         */
        closeMenu() {
            jQuery(this.trigger).removeClass(RmpMenu.activeToggleClass);
            jQuery(this.container).removeClass(RmpMenu.openContainerClass);

            if (this.options['animation_type'] == 'fade') {
                this.fadeMenuOut();
            } else {
                this.clearWrapperTranslate();
            }

            this.isOpen = false;
        }

        /**
         * Function is responsible for checking the menu is open or close.
         *
         * @since 4.0.0
         * @param {Event} e
         */
        triggerMenu() {
            this.isOpen ? this.closeMenu() : this.openMenu();
        }

        triggerSubArrow(subArrow) {
            var self = this;
            var sub_menu = jQuery(subArrow).parent().siblings(RmpMenu.subMenuClass);

            //Accordion animation.
            if (self.options['accordion_animation'] == 'on') {
                // Get Top Most Parent and the siblings.
                var top_siblings = sub_menu.parents('.rmp-menu-item-has-children').last().siblings('.rmp-menu-item-has-children');
                var first_siblings = sub_menu.parents('.rmp-menu-item-has-children').first().siblings('.rmp-menu-item-has-children');

                // Close up just the top level parents to key the rest as it was.
                top_siblings.children('.rmp-submenu').slideUp(self.subMenuTransitionTime, 'linear').removeClass('rmp-submenu-open');

                // Set each parent arrow to inactive.
                top_siblings.each(function() {
                    jQuery(this).find(self.subMenuArrow).first().html(self.options['inactive_toggle_contents']);
                    jQuery(this).find(self.subMenuArrow).first().removeClass(RmpMenu.activeSubMenuArrowClass);
                });

                // Now Repeat for the current item siblings.
                first_siblings.children('.rmp-submenu').slideUp(self.subMenuTransitionTime, 'linear').removeClass('rmp-submenu-open');
                first_siblings.each(function() {
                    jQuery(this).find(self.subMenuArrow).first().html(self.options['inactive_toggle_contents']);
                    jQuery(this).find(self.subMenuArrow).first().removeClass(RmpMenu.activeSubMenuArrowClass);
                });
            }

            // Active sub menu as default behavior.
            if (sub_menu.hasClass('rmp-submenu-open')) {
                sub_menu.slideUp(self.subMenuTransitionTime, 'linear', function() {
                    jQuery(this).css('display', '');
                }).removeClass('rmp-submenu-open');
                jQuery(subArrow).html(self.options['inactive_toggle_contents']);
                jQuery(subArrow).removeClass(RmpMenu.activeSubMenuArrowClass);
            } else {
                sub_menu.slideDown(self.subMenuTransitionTime, 'linear').addClass('rmp-submenu-open');
                jQuery(subArrow).html(self.options['active_toggle_contents']);
                jQuery(subArrow).addClass(RmpMenu.activeSubMenuArrowClass);
            }

        }

        /**
         * Function to add tranform style on trigger.
         *
         * @version 4.0.0
         *
         * @param {Event} e Event object.
         */
        pushMenuTrigger(e) {
            if ('on' == this.options['button_push_with_animation']) {
                jQuery(this.trigger).css({ 'transform': this.menuWidth() });
            }
        }

        /**
         * Returns the height of container.
         *
         * @version 4.0.0
         *
         * @return Number
         */
        menuHeight() {
            return jQuery(this.container).height();
        }

        /**
         * Returns the width of the container.
         *
         * @version 4.0.0
         *
         * @return Number
         */
        menuWidth() {
            return jQuery(this.container).width();
        }

        wrapperHeight() {
            return jQuery(this.wrapper).height();
        }

        backUpSlide(backButton) {
            let translateTo = parseInt(jQuery(this.menuWrap)[0].style.transform.replace(/^\D+/g, '')) - 100;
            jQuery(this.menuWrap).css({ 'transform': 'translateX(-' + translateTo + '%)' });
            let previousSubmenuHeight = jQuery(backButton).parent('ul').parent('li').parent('.rmp-submenu').height();
            if (!previousSubmenuHeight) {
                jQuery(this.menuWrap).css({ 'height': this.originalHeight });
            } else {
                jQuery(this.menuWrap + this.menuId).css({ 'height': previousSubmenuHeight + 'px' });
            }
        }
    }

    /**
     * Create multiple instance of menu and pass the options.
     *
     * @version 4.0.0
     */
    for (let index = 0; index < rmp_menu.menu.length; index++) {
        let rmp = new RmpMenu(rmp_menu.menu[index]);
    }

});