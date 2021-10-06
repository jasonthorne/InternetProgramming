

//alert("Hello World");

//var salary = prompt("Please enter your salary", "Type here");

//alert(salary);


/*
 var a=4, b=2, c=5,d=3;
 
 var a2 = (a+b)*(c+d);
 var b2 = a+b*c+d;
 var c2 = (d*(a-b))+c;
 var d2 = d*a-b+c
 
 alert(
	a2 + " " + b2 + " " + c2 + " " + d2
 );
 */
 
 /*
 var annualSalary = parseInt(prompt("Please enter your annual salary", "Type here"));
 var monthlyExpenses = parseInt(prompt("Please enter your monthly expenses", "Type here"));
 var netIncome = monthlyExpenses - annualSalary;
 alert("you can borrow: " + netIncome*3.5);
 */
 
 
/*
  var annualSalary = parseInt(prompt("Please enter your annual salary", "Type here"));
  
  if(annualSalary > 500){
	  alert("you're rich");  
  }else if (annualSalary <= 500 && annualSalary >= 100) {
	  alert("you're average");  
  }else{
	  alert("you're poor");  
  }
  */
  
  var secretWord = prompt("Please enter your secret word");
  var guess = "";
  var trys = 0;
  
  while(guess != secretWord){
	  trys++;
	  if (trys = 3){
		  break;
	  }		  
	  guess = prompt("Try: " + trys + ". Please enter your answer to secret word");
	  
  }
  
  
  
  
  
  