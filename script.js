$(document).ready(function(){

    let is_o = true
    $(".cuadrado").on("click", function(e){
        let id = $(e.target).prop("id")
        if($("#"+id).val()==""){
            if(is_o){
                $("#"+id).val("O")
            }else{
                $("#"+id).val("X")
            }
            is_o = !is_o
        }
    })
})