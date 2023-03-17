"use strict";

$("button").click(function(){
    if ($("input").val() != "") {
        let li = `<li class="list-group-item">${$("input").val()}<i class="fa-solid fa-x float-end"></i></li>`
        $("ul").append(li);
        $("input").val("")
    }
})


$(document).on("click", "i", function(e) {

    $(this).parent().remove()

})





























