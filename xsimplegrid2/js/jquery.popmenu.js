$(function () {

    $.fn.pop2menu = function (options) {

        var settings = $.extend({
            'controller': true,
            'width': '100%',
            'background': '#34495e',							
            'borderRadius': '10px',
            'top': '48',
            'left': '0',
            'iconSize': '62px',
            'color': '#F7F7F7',
            'border': '0px'
        }, options);
        if (settings.controller === true) {
            var temp_display = 'none';
        } else {
            var temp_display = 'block';
        }
        var tar = $(this);
        var tar_body = tar.children('ul');
        var tar_list = tar_body.children('li');
        var tar_a = tar_list.children('a');
        var tar_ctrl = tar.children('.pop2');

        function setIt() {
            tar_body.css({
                'display': temp_display,
                'position': 'absolute',
				'z-index': '9999',
                'margin-top': -settings.top,
                'margin-left': -settings.left,
                'background': settings.background,
                'width': settings.width,
                'float': 'left',
                'padding': '0',
                'border-radius': settings.borderRadius,
                'border': settings.border
            });
            tar_list.css({
                'display': 'block',
                'color': settings.color,
                'float': 'left',
                'width': settings.iconSize,
                'height': settings.iconSize,
                'text-align': 'center',
				'padding': '5',
                'border-radius': settings.borderRadius
            });
            tar_a.css({
                'text-decoration': 'none',
                'color': settings.color
            });
            tar_ctrl.hover(function () {
                tar_ctrl.css('cursor', 'pointer');
            }, function () {
                tar_ctrl.css('cursor', 'default')
            });
            tar_ctrl.click(function (e) {
                e.preventDefault();
                tar_body.show('fast');
                $(document).mouseup(function (e) {
                    var _con = tar_body;
                    if (!_con.is(e.target) && _con.has(e.target).length === 0) {
                        _con.hide();
                    }
                });
            });
            tar_list.hover(function () {
                $(this).css({
                    'background': settings.focusColor,
                    'cursor': 'pointer'
                });
            }, function () {
                $(this).css({
                    'background': settings.background,
                    'cursor': 'default'
                });
            });
        }
        return setIt();

    };

}(jQuery));
