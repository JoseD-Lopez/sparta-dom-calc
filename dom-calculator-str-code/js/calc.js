document.addEventListener("DOMContentLoaded", function(event){

	var myButton = document.getElementsByClassName("buttonNum");
	var myEquals = document.getElementsByClassName("equals");
	var myClear = document.getElementById('buttonClear')
	var myOper = document.getElementsByClassName("operator");
	var view = document.getElementById("screen");
	var nubr1 = null;
	var nubr2 = null;
	var operator = null;
	var caloperator;


   
 
		for(var i = 0; i < myButton.length; i++){

	    myButton[i].addEventListener("click", function(event){
			
			if(nubr1 == null || operator == null){

			view.innerHTML = event.target.innerHTML;
			
			nubr1 = event.target.innerHTML; 
			
			 console.log(nubr1);

			}
	
			else if(!(nubr1 == null) && !(operator == null)){
 

			view.innerHTML = event.target.innerHTML;
			
			
			nubr2 = event.target.innerHTML; 

			 console.log(nubr2);

		}	
			
		for(var i = 0; i < myOper.length; i++){

	    myOper[i].addEventListener("click", function(event){

			view.innerHTML = event.target.innerHTML;
			
			operator = event.target.innerHTML; 


			switch(operator){
				case '+':
				view.innerHTML = '+';
				break;
				case '-':
				view.innerHTML = '-';
				break;
				case '*':
				view.innerHTML = '*';
				break;
				case '/':
				view.innerHTML = '/';
				break;
			}

			 console.log(operator);
		
  		  });
		}

		for(var i = 0; i < myEquals.length; i++){

	    myEquals[i].addEventListener("click", function(event){


			view.innerHTML = event.target.innerHTML;

			if(operator == '+'){

             caloperator = parseInt(nubr1) + parseInt(nubr2);
          
              view.innerHTML = caloperator;

               console.log(caloperator); 
           }
           else if (operator == '-'){
           	 caloperator = parseInt(nubr1) - parseInt(nubr2);
          
              view.innerHTML = caloperator;

               console.log(caloperator); 
           }
           else if (operator == '*'){
           	caloperator = parseInt(nubr1) * parseInt(nubr2);
          
              view.innerHTML = caloperator;

               console.log(caloperator); 
           }
                else if (operator == '/'){
           	caloperator = parseInt(nubr1) / parseInt(nubr2);
          
              view.innerHTML = caloperator;

               console.log(caloperator); 
           }
  		  });
		}
 
      });

	}
 
});

