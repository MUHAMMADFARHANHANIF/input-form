function ans() {   
        var name1 = document.querySelector('.name1')
        var clas = document.querySelector('.class')

        var num1 = document.querySelector('.num1');
        var eng = parseFloat(num1.value);
    
        var num2 = document.querySelector('.num2');
        var urdu = parseFloat(num2.value);
    
        var num3 = document.querySelector('.num3');
        var math = parseFloat(num3.value);
    
        var totalMarks = 300;
        var obtainMarks = eng + urdu + math;
        var percentage = (obtainMarks / totalMarks) * 100;


        
        if (eng > 100 || eng < 0) {
            document.write("check English Marks <br>")  
        }
        if (urdu > 100 || urdu < 0) {
            document.write("check Urdu Marks<br>")  
        }
        if (eng > 100 || eng < 0) {
            document.write("check Math Marks<br>")  
        }

        if (eng,urdu,math > 100 || percentage > 100 ) {
            grade = "error"
            percentage = "error"
            obtainMarks = "error"

        }
        
        else if (percentage >= 90 && percentage <= 100){
            grade = "A1+"

        }
        else if (percentage >= 80 && percentage < 90){
            grade = "A+"
            
        }
        else if (percentage >= 70 && percentage < 80){
            grade = "A"
            
        }
        else if (percentage >= 60 && percentage < 70){
            grade = "B"
            
        }
        else if (percentage >= 50 && percentage < 60){
            grade = "C"
            
        }
        else if (percentage >= 40 && percentage < 50){
            grade = "D"
            
        }
        else if (percentage >= 0 && percentage < 40){
            grade = "Fail"
            
        }
        else{grade = "error"}
    





        document.write(`hy  ${name1.value}<br>`)
        document.write(`your  ${clas.value}  class result is here <br>`)

        document.write(`Marks = ${totalMarks}/${obtainMarks}<br>`)

        document.write(`your percentage is = ${percentage} %<br>`)
        document.write(`your Grade is = ${grade}<br>`)

    }
    
