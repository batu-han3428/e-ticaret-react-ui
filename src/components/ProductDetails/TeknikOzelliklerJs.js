import $ from "jquery";

$(function () {

    $("#urunAciklamasiIcerik").show();

    $("#urunAciklamasi, #urunAciklamasi > a").css({

        "background-color": "white",
        "color": "rgb(255, 123, 0)",
        "border-top": "1px solid rgb(255, 123, 0)"

    });

    $("#teknikOzellikler").css({

        "border-right": "1px solid white",
        "border-left": "1px solid white"


    });

    $("#urunAciklamasi").click(function () {

        $("#teknikOzelliklerIcerik").hide();
        $("#taksitSecenekleriIcerik").hide();
        $("#urunAciklamasiIcerik").show();

        $("#urunAciklamasi, #urunAciklamasi > a").css({

            "background-color": "white",
            "color": "rgb(255, 123, 0)",
            "border-top": "1px solid rgb(255, 123, 0)"

        });

        $("#teknikOzellikler, #teknikOzellikler > a, #taksitSecenekleri, #taksitSecenekleri > a").css({

            "background-color": "rgb(163, 155, 139)",
            "color": "#fff",
            "border-top": "0"

        });

    });

    $("#teknikOzellikler").click(function () {

        $("#urunAciklamasiIcerik").hide();
        $("#taksitSecenekleriIcerik").hide();
        $("#teknikOzelliklerIcerik").show();

        $("#teknikOzellikler, #teknikOzellikler > a").css({

            "background-color": "white",
            "color": "rgb(255, 123, 0)",
            "border-top": "1px solid rgb(255, 123, 0)"

        });

        $("#urunAciklamasi, #urunAciklamasi > a, #taksitSecenekleri, #taksitSecenekleri > a").css({

            "background-color": "rgb(163, 155, 139)",
            "color": "#fff",
            "border-top": "0"

        });

    });

    $("#taksitSecenekleri").click(function () {

        $("#urunAciklamasiIcerik").hide();
        $("#teknikOzelliklerIcerik").hide();
        $("#taksitSecenekleriIcerik").show();

        $("#taksitSecenekleri, #taksitSecenekleri > a").css({

            "background-color": "white",
            "color": "rgb(255, 123, 0)",
            "border-top": "1px solid rgb(255, 123, 0)"

        });

        $("#teknikOzellikler, #teknikOzellikler > a, #urunAciklamasi, #urunAciklamasi > a").css({

            "background-color": "rgb(163, 155, 139)",
            "color": "#fff",
            "border-top": "0"

        });

    });

});