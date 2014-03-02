(function($) {
    "use strict";

    //Start snow fall
    setTimeout(function (){
        $(document).snowfall({flakeCount : 100, maxSpeed : 10, shadow : true,minSize : 1, maxSize : 3});
    }, 500);

    var RegEx = {
        url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
    };
    
    var querystring = window.location.search;

    function loadSite(thisUrl){
        thisUrl = thisUrl.replace("http://", "");
        thisUrl = thisUrl.replace("https://", "");
        window.location = "/snowify/?site=http://"+thisUrl;
    }

    function pullUrl(){
        var site_url = $("#url").val();
        if(site_url !== ""){
            if(!RegEx["url"].test($("#url").val())){
                $(".error").html("Please enter a valid URL");
                $(".error").fadeIn();
            }else{
                loadSite(site_url);
            }
        }else{
            $(".error").html("Please enter a valid URL");
            $(".error").fadeIn();
        }
    }

    $("#url").keypress(function (e) {
        if (e.which == 13) {
            pullUrl();
        }else{
            $(".error").fadeOut();
        }
    });

    if(querystring === "" || querystring == null){
        $(".enter").show();
    }else{
        $("body").addClass("white");
        $(".site").show();

        // load website
        querystring = querystring.replace("?site=", "");
        $(".site").attr("src", querystring);

        //load music
        $("body").append("<iframe style='display:none' src='//www.youtube.com/embed/3PgNPc-iFW8?autoplay=1' frameborder='0' allowfullscreen></iframe>");
    }
    
    $(".load").on("click", function () {
        pullUrl();
    });
    
}(jQuery));