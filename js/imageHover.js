$(document).ready(function () {
    $("img").hover(
        function() { $(this).addClass("zoom"); },
        function() { $(this).removeClass("zoom"); }
    );
});