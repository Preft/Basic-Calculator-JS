//////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// Calculator /////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


var arrayMan = [];
var arrayWomen = [];

//$(document).ready(function(){
    //First and Last
    //alert("I am an alert box!");
    //document.getElementById("display2").innerHTML = arrayWomen;
//}); 

//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Real Time Entry ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


$('#input1').keyup(function () {
  $('#display').text($(this).val());
});



//////////////////////////////////////////////////////////////////////////////////////
////////////////// Displaying the numbers when the button is clicked /////////////////
//////////////////////////////////////////////////////////////////////////////////////

function dis1(in1){
    
////// Takes the arguement given by the button and proceeds to execute the following code /////

    switch(in1){
    case 0:
        document.getElementById("input1").value += 0;// changes value of text box to number
        document.getElementById("display").innerHTML += 0;
        break;
    case 1:
        document.getElementById("input1").value += 1;
        document.getElementById("display").innerHTML += 1;
        break;
    case 2:
        document.getElementById("input1").value += 2;
        document.getElementById("display").innerHTML += 2;
        break;
    case 3:
        document.getElementById("input1").value += 3;
        document.getElementById("display").innerHTML += 3;
        break;
    case 4:
        document.getElementById("input1").value += 4;
        document.getElementById("display").innerHTML += 4;
        break;
    case 5:
        document.getElementById("input1").value += 5;
        document.getElementById("display").innerHTML += 5;
        break;
    case 6:
        document.getElementById("input1").value += 6;
        document.getElementById("display").innerHTML += 6;
        break;
    case 7:
        document.getElementById("input1").value += 7;
        document.getElementById("display").innerHTML += 7;
        break;
    case 8:
        document.getElementById("input1").value += 8;
        document.getElementById("display").innerHTML += 8;
        break;
    case 9:
        document.getElementById("input1").value += 9;
        document.getElementById("display").innerHTML += 9;
        break;
    case 10:
         var numok = document.getElementById("display").innerHTML;
         var numok1 = (numok +".");
         //var print = numok + ".";
        document.getElementById("input1").value = numok1;
        document.getElementById("display").innerHTML += ".";
        break;
    default:
        document.getElementById("input1").value = "Invalid Button"; //people messing with my code
        document.getElementById("display").innerHTML = "Invalid Button ";
            
    }
}


//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// Negative Number //////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

function neg(){
    number1 = parseFloat(document.getElementById("input1").value);
    number2 = -number1;
    document.getElementById("input1").value = number2;

    document.getElementById("display").innerHTML = number2;


}



//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////// Clear function ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


function clear1(){
    document.getElementById("display").innerHTML = "";
    document.getElementById("display1").innerHTML = "";
    document.getElementById("input1").value = "";
    in1 = 0;
    number1 = 0;
    number2 = 0;
    arrayOld = [];
    arrayMan = [];
    arrayWomen = [];
    finalAnswer = 0;

}

function clear2(){
    //document.getElementById("display").innerHTML = "";
    //document.getElementById("display1").innerHTML = "";
    //ocument.getElementById("input1").value = "";
    in1 = 0;
    number1 = 0;
    number2 = 0;
    //arrayOld = [];
    arrayMan = [];
    arrayWomen = [];
    //finalAnswer = 0;
    

}

//////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Operation and Number Storage ///////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


function calc1(num4){
    //var num1 = parseFloat(document.getElementById("input1").value); //gets the first number in text box hi and stores it as a global scope
    //document.getElementById("input1").value = ""; // clears the text box for the user

    /////////////////////////////// Operation  Selector/////////////////////////////////////
    document.getElementById("display1").innerHTML = "";
    switch(num4){
        
    case 0:

        var operation = 0; // operation selector as global scope
        var num1 = document.getElementById("input1").value;
        document.getElementById("display").innerHTML = "";
        document.getElementById("input1").value = "";
        arrayMan.push(num1); // odd is numbers
        arrayMan.push(operation); // even is operations
        ihate();
        document.getElementById("display").innerHTML = ihate();
        //$('#item1 span').text(); 

        break;
    case 1:
        var operation = 1;
        var num1 = document.getElementById("input1").value;
        document.getElementById("display").innerHTML = "";
        document.getElementById("input1").value = "";
        arrayMan.push(num1); 
        arrayMan.push(operation); 
        ihate();
        document.getElementById("display").innerHTML = ihate();
        
        
        break;
    case 2:
        var operation = 2;
        var num1 = document.getElementById("input1").value;
        document.getElementById("display").innerHTML = "";
        document.getElementById("input1").value = "";
        arrayMan.push(num1); 
        arrayMan.push(operation); 
        ihate();
        document.getElementById("display").innerHTML = ihate();
        
        
        break;
    case 3:
        var operation = 3;
        var num1 = document.getElementById("input1").value;
        document.getElementById("display").innerHTML = "";
        document.getElementById("input1").value = "";
        arrayMan.push(num1); 
        arrayMan.push(operation); 
        ihate();
        document.getElementById("display").innerHTML = ihate();
        

        
        break;
    default:
        
    }    

}




//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// Calculations ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


function calc2(){
    
    var num2 = document.getElementById("input1").value;
    arrayMan.push(num2);
    document.getElementById("display").innerHTML = "" ;
    document.getElementById("input1").value = "";
    var finalAnswer = arrayMan[0];

    
    //document.getElementById("display").innerHTML = finalAnswer;
    
    for( i=0; i < arrayMan.length; i++){
        if(i % 2 != 0){
            // code for inputs //
            var num3 = parseFloat(arrayMan[i]);
            


            switch(num3){
                case 0:
                    var finalAnswer = parseFloat(finalAnswer) + parseFloat(arrayMan[i+1]);
                    document.getElementById("display").innerHTML = finalAnswer;
                    //document.getElementById("input1").value = finalAnswer;
                break;
                case 1:
                    var finalAnswer = parseFloat(finalAnswer) - parseFloat(arrayMan[i+1]);
                    document.getElementById("display").innerHTML = finalAnswer;
                break;
                case 2:
                    var finalAnswer = parseFloat(finalAnswer) * parseFloat(arrayMan[i+1]);
                    document.getElementById("display").innerHTML = finalAnswer;
                break;
                case 3:
                    var finalAnswer = parseFloat(finalAnswer) / parseFloat(arrayMan[i+1]);
                    document.getElementById("display").innerHTML = finalAnswer;
                break;
                default:
                document.getElementById("display").innerHTML += "fuck up";
                

            }
            
            
            
        }

    }

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// Display on click selectables ////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////




    //display the answer
        document.getElementById("display").innerHTML = finalAnswer;
        document.getElementById("input1").innerHTML = finalAnswer;
        document.getElementById("display1").innerHTML = "";

    ///display array
        for(var j = 0; j<arrayMan.length; j++){
            if(j % 2 != 0){

                var num3 = parseFloat(arrayMan[j]);
                    switch(num3){
                case 0:
                    //document.getElementById("display1").innerHTML += "+" + " ";
                    document.getElementById("display1").innerHTML += "+" + " ";
                break;
                case 1:
                    document.getElementById("display1").innerHTML += "-" + " ";
                break;
                case 2:
                    document.getElementById("display1").innerHTML += "*" + " ";
                break;
                case 3:
                    document.getElementById("display1").innerHTML += "/" + " ";
                break;
                default:
                document.getElementById("display1").innerHTML += "fuck up";
                

            }

        } else {
        document.getElementById("display1").innerHTML += arrayMan[j] + " ";
        }
    }

    document.getElementById("display1").innerHTML += " = " + finalAnswer;

    // send it to another array in another function for the onclick
   arrayOld = arrayMan;
   ihate();
   document.getElementById("input1").value = finalAnswer;
   //document.getElementById("display2").innerHTML = arrayOld;
   // clear the bastard
   arrayMan = [finalAnswer]
   clear2();
   
   //document.getElementById("display2").innerHTML = arrayMan;

   
}

//////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////// On click //////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

function ihate(){
    stringeroo = "";
    arrayWomen = [];
for(var j = 0; j<arrayMan.length; j++){
    
            if(j % 2 != 0){

                var num3 = parseFloat(arrayMan[j]);
                    switch(num3){
                case 0:
                    //document.getElementById("display1").innerHTML += "+" + " ";
                    arrayWomen.push("+");
                break;
                case 1:
                    arrayWomen.push("-");
                break;
                case 2:
                    arrayWomen.push("*");
                break;
                case 3:
                    arrayWomen.push("/");
                break;
                default:
                //document.getElementById("display2").innerHTML += "fuck up";
                

            }

        } else {
             arrayWomen.push(arrayMan[j]);
        }

    
    
    
}
 
for(var m=0; m<arrayWomen.length; m++){
        //var stringeroo = "";
        stringeroo += arrayWomen[m];
    }
//document.getElementById("display2").innerHTML = stringeroo;
return stringeroo;
//document.getElementById("display2").innerHTML = stringeroo;
}





//https://stackoverflow.com/questions/43033969/replace-any-html-tag-to-input-using-javascript-onclick
/*
$("#display1").on("click", function() {
  var $el = $(this);
  var $input = $("<input/>").val($el.text()).addClass($el.attr('class')).data("tagName", this.outerHTML);
  $el.replaceWith($input);
  console.log($input.data()["tagName"]);
   var save = function(){
    var $p = $($input.data()["tagName"]).text( $input.val() ).addClass($input.attr("class"));
    $input.replaceWith( $p );
  };

  $input.one('blur', save).focus();
});

*/
