function isTouch(){
    return Modernizr.touch;
}

function createSlider(data){
    var content = "";
    for(var i in data["items"]){
        var img = data["items"][i].img;
        var alt = data["items"][i].alt;

        content += "<div class=\"slider-image\" style=\"background-image:url(images/" + img + ")\" alt=\"" + alt + "\"></div>"
    }
    $('#case_studies_slider').html(content);
}
var App = {
    changeSliderHight: function (ethis) {
        var $d = $(ethis);
        $d.find('.owl-item').css('minHeight', $d.parent().height());
    },
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
        });


        /* equal heights*/
        $('.eq').responsiveEqualHeightGrid();

        /* case study slider*/
        $("#case_studies_slider").owlCarousel({
            singleItem : true,
            jsonPath : 'json/case_studies_slider.json',
            jsonSuccess: createSlider,
            beforeUpdate: App.changeSliderHight,
            afterInit: App.changeSliderHight
        });

    }, resize: function(){
        var h = $(window).height() - $('#header').height();

        if(!isTouch()){
            $("#home").css({
                minHeight: h
            });
        }

    }

};

$(function(){
   App.init();
});