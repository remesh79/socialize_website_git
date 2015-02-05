function isTouch(){
    return Modernizr.touch;
}
var App = {
    init:function(){
        var self = this;
        this.resize();
        $(window).resize(function () {
            self.resize()
        });

        // mobile nav button
        $('.header-nav').on('click', function (e) {
            e.preventDefault();
            $('body').toggleClass('nav-open');
        })

    }, resize: function(){
        var h = $(window).height() - $('#header').height();

        if(!isTouch()){
            $("#home").css({
                minHeight: h
            });
        }

    }

}

$(function(){
   App.init();
});