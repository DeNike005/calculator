let operator = false;
function currentInput(){
   return $("#display").val()
}
function evaluate(){
    let expression = currentInput()
    let result = eval(expression)
return result

}
function deleteing(){
    let value = currentInput()
    let removed = value.slice(0,-1)
return removed

}
$(document).ready(function () {
    $(".numbers").click(function (){
        let index = $(this).text();
        $("#display").val(currentInput() + index)

        operator = false;
    })

    $(".signs").click(function (){
        let sign = $(this).find("p").text();
        
        if(currentInput() === "" && sign === "-"){
            $("#display").val(sign)
            operator = true;

        }else if(currentInput() !=="" && !operator){
            $("#display").val(currentInput() + sign)
            operator = true;
        }
    })
    $(".equal-button").click(function (){
      $("#display").val( evaluate())
    })
    $(".delete").click(function (){
        $("#display").val( deleteing())

      })
      $(".clear").click(function (){
        $("#display").val("")

      })
})