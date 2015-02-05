function isTouch(){
    return Modernizr.touch;
}

function createSlider(data){
    var content = "";
    for(var i in data["items"]){
        var img = data["items"][i].img;
        var alt = data["items"][i].alt;

        content += "<img src=\"" +img+ "\" alt=\"" +alt+ "\">"
    }
    $('#case_studies_slider').html(content);
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

        /* case study slider*/
        $("#case_studies_slider").owlCarousel({
            singleItem : true,
            autoHeight : true,
            jsonPath : 'json/case_studies_slider.json',
            jsonSuccess : createSlider
        });

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