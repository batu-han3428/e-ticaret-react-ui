import * as $ from 'jquery';

$(function () {
    $("#tuslar button:eq(0)").css({

        "border": "1px solid rgb(255, 123, 0)"

    });


    $("#tuslar button").click(function () {

        $("#tuslar button").css({

            "border": "0"

        });

        $(this).css({

            "border": "1px solid rgb(255, 123, 0)"

        });

    });
});