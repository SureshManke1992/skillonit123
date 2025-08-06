 
        function BMI() {
          if (inp1.value != "" && inp2.value != "") {
            let inp1 = Number(document.getElementById("inp1").value)
            let inp2 = Number(document.getElementById("inp2").value)
            let bmi = document.getElementById('bmi')
            let m = inp2 / 100
            let calc = inp1 / m ** 2
            let standart;
            if (calc < 18.5) {
                standart = "Underweight"
            }
            else if (calc >= 18.5 && calc <= 24.9) {
                standart = "Normal"
            }
            else if (calc >= 25.0 && calc <= 29.9) {
                standart = "Overweight"
            }
            else if (calc >= 30.0) {
                standart = "Obese"
            }
            bmi.innerHTML = "Your BMI is " + calc.toFixed(1) + "<br>You are " + standart
            document.getElementById("table").style.opacity = 1
         }
         else {
             alert("You must write in all inputs, they are required!")
         }
        }
         