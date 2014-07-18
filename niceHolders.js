(function ($) {

    $.fn.niceHolder = function () {
        this.each(function () {

            switch ($(this).type) {
                case "text":
                    var $this = $(this);
                    var $label = $this.attr('placeholder') || $this.attr('label');

                    $this.addClass('niceHolderText')
                        .wrap('<div class="niceHolderText-container"></div>')
                        .attr('placeholder', $label)
                        .attr('label', $label)
                        .focus(function () {
                            if ($(this).val().length == 0) {
    
                                var $label = $(this).attr('label');
                                var $id = $(this).attr('id') || (new Date().getTime());
    
    
                                $(this).removeAttr('placeholder')
    
                                $(this).parent().remove('.niceHolderText-label').prepend('<div id="niceHolderText-label_' + $id + '" class="niceHolderText-label">' + $label + '</div>');
                                $(this).parent().find('.niceHolderText-label').animate({
                                    top: "0px"
                                });
                            }
                       })
                      .blur(function () {
                            $(this).attr('placeholder', $(this).attr('label'));
    
                            if ($(this).val().length == 0) {
                                var $id = $(this).attr('id');
    
                                $('#niceHolderText-label_' + $id).animate({
                                    top: "-15px"
                                }, function () {
                                    $(this).remove();
                                });
                            }
                     });
            }
        });
    }
}
}(jQuery));
