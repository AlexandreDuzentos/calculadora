// returns all buttons on the calculator
			let button = document.querySelectorAll('button')
			let screen = document.querySelector('input.tela')
			let screen2 = document.querySelector('input.tela2')
            
            //returns single buttons on the calculator
            let btnZero = document.querySelector("button.zero")
			let btnOne = document.querySelector('button.one')
			let btnTwo = document.querySelector('button.two')
			let btnThree = document.querySelector('button.three')
			let btnFour = document.querySelector('button.four')
			let btnFive = document.querySelector('button.five')
			let btnSix = document.querySelector('button.six')
			let btnSeven = document.querySelector('button.seven')
			let btnEight = document.querySelector('button.eight')
			let btnNine = document.querySelector('button.nine')
			let btnEqual = document.querySelector('button.equal')
			let btnPlus = document.querySelector('button.plus')
		    let btnMinus = document.querySelector('button.minus')
		    let btnDivision = document.querySelector('button.division')
		    let btnMultiplication = document.querySelector('button.multiplication')
		    let btnPercentage = document.querySelector('button.percentage')

            // the state of the operation assumes 1 or 2
            let estado = 1

            //the operation values
            let n1,n2;

            // operation signal
            let sinal = ""


            
               //Press the calculator buttons by the keyboard keys
               document.addEventListener('keypress',(event) => {
            	const key = event.key
            	console.log(key)

            	switch(key) {
            		case "0":
                          btnZero.click()
                          screen.value = screen.value.substring(0, screen.value.length -1)
            		    break;
            		case "1":
            		      btnOne.click()
            		      screen.value = screen.value.substring(0, screen.value.length -1)
            		    break;
            		case "2":
            		      btnTwo.click()
                          screen.value = screen.value.substring(0, screen.value.length -1)
            		    break;
            		case "3":
            		      btnThree.click()
                          screen.value = screen.value.substring(0, screen.value.length -1)
            		    break;
                    case "4":
                          btnFour.click()
                          screen.value = screen.value.substring(0, screen.value.length -1)
            		    break;
            		case "5":
            		      btnFive.click()
                          screen.value = screen.value.substring(0, screen.value.length -1)
            		    break;
            		case "6":
            		      btnSix.click()
                          screen.value = screen.value.substring(0, screen.value.length -1)
            		    break;
            		case "7":
            		      btnSeven.click()
                          screen.value = screen.value.substring(0, screen.value.length -1)
            		    break;
            		case "8":
            		      btnEight.click()
                          screen.value = screen.value.substring(0, screen.value.length -1)
            		    break;
            		case "9":
            		      btnNine.click()
                          screen.value = screen.value.substring(0, screen.value.length -1)
            		    break;
            		case "*":
            		      btnMultiplication.click()
            		      screen.value = screen.value
            		    break;
            		case "x":
            		      btnMultiplication.click()
            		      screen.value = screen.value
            		    break;
            		case "+":
            		      btnPlus.click()
            		      screen.value = screen.value
            		    break;
            		case "/":
            		      btnDivision.click()
            		      screen.value = screen.value
            		    break;
            		case "%":
            		      btnPercentage.click()
            		      screen.value = screen.value
            		    break;
            		case "Enter":
            		case " ":
            		      btnEqual.click()
            		    break;
            		    
            		 default:
            		    break;

            	}
            	
            })
            
            //Calculator logic
			button.forEach(element => {
				element.mousedown = function(){
                   this.style.display = "none"
				}

                 element.onclick = function (event){
                 	switch(element.innerHTML){
                          case "0":
                                  if(screen.value != "0"){
                              	     screen.value += element.innerHTML
                                   }
                                break;
                           case "1":
                           case "2":
                           case "3":
                           case "4":
                           case "5":
                           case "6":
                           case "7":
                           case "8":
                           case "9":
                                   if (screen.value == "0"){
                                      screen.value += element.innerHTML

                                      if (estado == 1) {
                                      	n1 = parseFloat(screen.value)
                                      } else {
                                      	n2 = parseFloat(screen.value)
                                      }

                                   } else if (screen.value.length <= 23){
                                      screen.value += element.innerHTML

                                      if (estado == 1) {
                                          n1 = parseFloat(screen.value)
                                      } else {
                                      	  n2 = parseFloat(screen.value)
                                      }
                                   }
                                break;
                           case "+/-":
                                     screen.value = (screen.value * (-1))
                                break;
                            case ",":
		                            if (!screen.value.match(/\,/)){
		                            	screen.value += element.innerHTML
		                            }
                                 break;
                            case "C":
                            case "CE":
	                                if (element.innerHTML == "CE"){
		                            	screen.value = screen.value.substring(0, screen.value.length - 1)
		                            	estado = 1
	                                  	n1 = 0
	                                  	n2 = 0
	                                  	sinal = ""
	                                  } else {
	                                  	screen.value = ""
	                                  	screen2.value = ""
	                                  	estado = 1
	                                  	n1 = 0
	                                  	n2 = 0
	                                  	sinal = ""
	                                  }
                                 break;
                            case "X²":
                                     screen.value = Math.pow(screen.value, 2)
                                  break;
                            case "raiz":
                                       if(screen.value >= 0){
                                       	  screen.value = Math.sqrt(screen.value)
                                       } else {
                                       	   screen.value = "Entrada inválida"
                                       }
                            	       
                                 break;
                            case "%":
                                   n1 = parseFloat(screen.value)
                                   screen2.value = screen.value + "% ->"
                                   screen.value = "%"
                                   sinal = "%"
                                   screen.value = ""
                                   estado = 2
                                 break;

                             case "cubic":
                                  if (screen.value >= 0){
                                  	screen.value = Math.cbrt(screen.value)
                                  } else {
                                     screen.value = "Entrada inválida"
                                  }
                                  break;
                              case "sen":
                                     screen.value = Math.sin(screen.value)
                                  break;
                              case "cos":
                                      screen.value = Math.cos(screen.value)
                                  break;
                              case "tan":
                                      screen.value = Math.tan(screen.value)
                                  break;
                               case "log":
                                      screen.value = Math.tan(screen.value)
                                  break;


                            case "+":
                            case "-":
                            case "x":
                            case "*":
                            case "/":
                                    if(sinal != ""){
                                    	screen2.value = screen2.value.length - 1
                                    	screen2.value +=  element.innerHTML
                                    	sinal = element.innerHTML
                                    } else {
                                    	screen2.value = screen.value + " " + element.innerHTML
                                    	screen.value += element.innerHTML
                                    	n1 = parseFloat(screen.value)
                                    	estado = 2
                                    	screen.value = ""
                                    	sinal = element.innerHTML
                                    }

                                 break;

                            case "=":
		                            screen2.value = " " + screen.value
		                            if(sinal == "+") {
		                            	screen.value = (n1 + n2).toString()
		                            } else if(sinal == "-") {
		                            	screen.value = (n1 - n2).toString()
		                            } else if(sinal == "x" || sinal == '*') { 
		                            	screen.value = (n1 * n2).toString()
		                            } else if(screen.value !=  0 && sinal == "/") {
		                            	screen.value = (n1 / n2).toString()
		                            } else if(sinal == "%") {
		                            	n1 = parseFloat(screen.value)
		                                screen.value = ((n1 * n2) / 100).toString()
		                            } else if(n1 == 0 && sinal == "/") {
		                                 screen.value = "Não é possível dividir por zero"
		                            }
		                            estado = 1
		                            n1 = 0
		                            sinal = ""
                                 break;

                            default:
                                 break;
                                 

                 	} // end switch

                 	//Console Debug
                 	console.log("n1 " + n1) 
                 	console.log("n2 " + n2)
                 	console.log("sinal " + sinal)
                 	console.log("estado " + estado)
                 }
			})
			
             