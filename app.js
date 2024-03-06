function ans() {   
        var name1 = document.querySelector('.name1')

        var clas = document.querySelector('.class')

        var num1 = document.querySelector('.num1');
    
        var num2 = document.querySelector('.num2');
    
        var num3 = document.querySelector('.num3');

        var check = document.querySelector('.check')
    



        var totalMarks = 300;
        var obtainMarks = +num1.value + +num2.value + +num3.value;
        var percentage = (obtainMarks / totalMarks) * 100;

        
        if (+num1.value > 100 || +num1.value < 0) {
            check.innerHTML = "check English Marks <br>"
        }
        else if (+num2.value > 100 || +num2.value < 0) {
            check.innerHTML = "check urdu Marks <br>"
        }
        else if (+num3.value > 100 || +num3.value< 0) {
            check.innerHTML = "check Math Marks <br>"
        }
        else{check.innerHTML = ""}

        if (+num1.value , +num2.value , +num3.value > 100 || percentage > 100 ) {
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
    




        // document.write(`hy  ${name1.value}<br>`)
        // document.write(`your  ${clas.value}  class result is here <br>`)

        // document.write(`Marks = ${totalMarks}/${obtainMarks}<br>`)

        // document.write(`your percentage is = ${percentage} %<br>`)
        // document.write(`your Grade is = ${grade}<br>`)

      

        var name2 = document.querySelector(".name2")
        name2.innerHTML = `hy  ${name1.value}<br>`

        
    
        var class2 = document.querySelector(".class2")
        class2.innerHTML = `your  ${clas.value}  class result is here <br>`
        
        var marks = document.querySelector(".marks")
        marks.innerHTML = `Marks = ${totalMarks}/${obtainMarks}<br>`
        
        var percentage1 = document.querySelector(".percentage1")
        percentage1.innerHTML = `your percentage is = ${percentage} %<br>`
        
        var grade1 = document.querySelector(".grade1")
        grade1.innerHTML = `your Grade is = ${grade}<br>`
        



        // name1.value = ""
        // clas.value = ""

        // totalMarks = ""

        // percentage = ""
        // grade =""


        // head = document.querySelector(".head")
        // head.innerHTML = "farhan"
        // console.log(head.innerHTML);
        
    }

    // name2.innerHTML = ""
    // class2.innerHTML = ""
    // marks.innerHTML = ""
    // percentage1.innerHTML = ""
    // grade1.innerHTML = ""



// function ans() {
    

//     var name2 = document.querySelector(".name2")
//         name2.innerHTML = ""

//         var class2 = document.querySelector(".class2")
//         class2.innerHTML = ""
        
//         var marks = document.querySelector(".marks")
//         marks.innerHTML = ""
        
//         var percentage1 = document.querySelector(".percentage1")
//         percentage1.innerHTML = ""
        
//         var grade1 = document.querySelector(".grade1")
//         grade1.innerHTML = ""
// }

    // name2 = document.querySelector(".name2")
    // name2.innerHTML = `hy  ${name1.value}<br>`
    

    // class2 = document.querySelector(".class2")
    // class2.innerHTML = `your  ${clas.value}  class result is here <br>`
    
    // marks = document.querySelector(".marks")
    // marks.innerHTML = `Marks = ${totalMarks}/${obtainMarks}<br>`
    
    // percentage1 = document.querySelector(".percentage1")
    // head.innerHTML = `your percentage is = ${percentage} %<br>`
    
    // grade1 = document.querySelector(".grade")
    // head.innerHTML = `your Grade is = ${grade}<br>`
    
    
    
    
    

    