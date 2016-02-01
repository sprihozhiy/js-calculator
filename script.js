(function(){
  	var testNumLength = function(number) {
          if (number.length > 15) {
              totaldiv.text(number.substr(number.length-15,15));
              if (number.length > 15) {
                  number = "";
                  totaldiv.text("Too Long!");
              }
          }
      };
  	  var number = "";
      var newnumber = "";
      var floating = ".";
      var operator = "";
      var totaldiv = $("#display");
      totaldiv.text("0");

      $(".numbers").click(function(){
  		number += $(this).text();
  		totaldiv.text(number);
  		testNumLength(number);
      });

      $("#floating").click(function(){
        number += $(this).text();
        totaldiv.text(number);
        testNumLength(number);
      });

      $(".operators").click(function(){
  		operator = $(this).text();
  		newnumber = number;
  		number = "";
  		totaldiv.text("0");
      });

      $("#clear,#clearall").click(function(){
  		number = "";
  		totaldiv.text("0");
  		if ($(this).attr("id") === "clearall") {
  			newnumber = "";
  		}
      });

      $("#equals").click(function(){
      	if (operator === "+"){
      		number = (parseFloat(number, 10) + parseFloat(newnumber,10)).toString(10);
      	} else if (operator === "-"){
      		number = (parseFloat(newnumber, 10) - parseFloat(number,10)).toString(10);
      	} else if (operator === "/"){
      		number = ((parseFloat(newnumber, 10) / parseFloat(number,10)).toFixed(8)).toString(10);
      	} else if (operator === "*"){
      		number = (parseFloat(newnumber, 10) * parseFloat(number,10)).toString(10);
      	}
        if (isFinite(number) != true) {
          totaldiv.text("Error");
        } else {
          totaldiv.text(number);
          testNumLength(number);
          number = "";
          newnumber = "";
          }
      });
})();
