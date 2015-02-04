var App = {
    init:function(){
        var self = this;
        this.resize();
        $(window).resize(function () {
            self.resize()
        });
    }, resize: function(){
        var h = $(window).height() - $('#header').height();
        $("#home").css({
            minHeight: h
        });
    }
}

$(function(){
   App.init();
});