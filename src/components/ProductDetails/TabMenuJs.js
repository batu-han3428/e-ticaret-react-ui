import $ from "jquery";

$(function () {

    $("#tab1icerik").show();

    $("#tab1, #tab1 > a").css({

        "background-color": "rgb(243, 243, 243)",
        "color": "rgb(255, 123, 0)"

    });

    $("#tab1").mouseenter(function () {

        $("#tab2icerik").hide();
        $("#tab3icerik").hide();
        $("#tab1icerik").show();

        $("#tab2, #tab2 > a, #tab3, #tab3 > a").css({

            "background-color": "#fff",
            "color": "rgb(177, 171, 159)"

        });

    });

    $("#tab1").mouseout(function () {

        $("#tab1, #tab1 > a").css({

            "background-color": "rgb(243, 243, 243)",
            "color": "rgb(255, 123, 0)"

        });

    });

    $("#tab2").mouseenter(function () {

        $("#tab1icerik").hide();
        $("#tab3icerik").hide();
        $("#tab2icerik").show();

        $("#tab1, #tab1 > a, #tab3, #tab3 > a").css({

            "background-color": "#fff",
            "color": "rgb(177, 171, 159)"

        });

    });

    $("#tab2").mouseout(function () {

        $("#tab2, #tab2 > a").css({

            "background-color": "rgb(243, 243, 243)",
            "color": "rgb(255, 123, 0)"

        });

    });

    $("#tab3").mouseenter(function () {

        $("#tab1icerik").hide();
        $("#tab2icerik").hide();
        $("#tab3icerik").show();

        $("#tab2, #tab2 > a, #tab1, #tab1 > a").css({

            "background-color": "#fff",
            "color": "rgb(177, 171, 159)"

        });

    });

    $("#tab3").mouseout(function () {

        $("#tab3, #tab3 > a").css({

            "background-color": "rgb(243, 243, 243)",
            "color": "rgb(255, 123, 0)"

        });

    });

});