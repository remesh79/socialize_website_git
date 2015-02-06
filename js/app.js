function isTouch(){
    return Modernizr.touch;
}

function createSlider(data){
    var content = "";
    for(var i in data["items"]){
        var img = data["items"][i].img;
        var alt = data["items"][i].alt;

        content += "<li class=\"slider-image\" style=\"background-image:url(images/" + img + ")\" alt=\"" + alt + "\"></li>"
    }
    $('#case_studies_slider').html(content);
}
var App = {
    changeSliderHight: function (ethis) {
        var $d = $(ethis);
        $d.find('.owl-item').css('minHeight', $d.parent().height());
    },
    createSlider: function (data, e, type) {
        console.log(data);

        var content = "", new_content;
        var dataType = !data["type"] ? 'image' : data["type"];
        for (var i in data["items"]) {
            var img = data["items"][i].img;
            var alt = data["items"][i].alt;
            if (dataType == 'image') {
                content += "<div class=\"slider-image\" style=\"background-image:url(images/" + img + ")\" alt=\"" + alt + "\"></div>"
            } else {
                content += data["items"][i].html;
            }
        }

        if (type == 'image') {
            new_content = '<ul class="list services-list">' + content + '</li>';
        } else {
            new_content = content;
        }

        $("#" + e).html(content);
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
            jsonSuccess: function (data) {
                self.createSlider(data, 'case_studies_slider');
            },
            beforeUpdate: self.changeSliderHight,
            afterInit: self.changeSliderHight
        });

        /* case study slider*/
        $("#the_theam_slider").owlCarousel({
            singleItem: true,
            jsonPath: 'json/case_studies_slider.json',
            jsonSuccess: function (data) {
                self.createSlider(data, 'the_theam_slider');
            },
            beforeUpdate: self.changeSliderHight,
            afterInit: self.changeSliderHight
        });
        /* services_slider*/
        $("#services_slider").owlCarousel({
            jsonPath: 'json/services_slider.json',
            singleItem: true,
            jsonSuccess: function (data) {
                self.createSlider(data, 'services_slider', 'image');
            }
        });
        /* services_slider*/
        $("#clients_slider").owlCarousel({
            jsonPath: 'json/clients_slider.json',
            singleItem: true,
            /*itemsDesktop: [1199, 1],
             itemsDesktopSmall: [899, 1],
             itemsTablet: 1,*/
            jsonSuccess: function (data) {
                self.createSlider(data, 'clients_slider', 'image');
            }
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