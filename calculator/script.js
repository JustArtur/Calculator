function out(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function clean(){
    document.form.textview.value = " "
}

function backSpace() {
    str = document.form.textview.value
    document.form.textview.value = str.substring(0, str.length-1)
}

function percent(){
    string = document.form.textview.value 
    const massiv = ["+","-","*","/"]
    for (let i of massiv) {
        if (string.indexOf(i) != -1) {
            let index = string.indexOf(i)
            a = parseFloat(string.substring(index+1))
            document.from.textview.value = a * 0.01
        }
        else {
            string = parseFloat(string)
            document.form.textview.value = string * 0.01
        }

    }
}

function equal() {
    string = document.form.textview.value 
    const massiv = ["+","-","*","/"]
    for (let i of massiv) {
        if (string.indexOf(i) != -1) {
            let index = string.indexOf(i)
            a = parseFloat(string.substring(0,index))
            b = parseFloat(string.substring(index+1))
            switch(i) {
                case '+':
                    document.form.textview.value = a + b;
                    break;
                case '-':
                    document.form.textview.value = a - b
                    break;
                case '*':
                    document.form.textview.value = a * b
                    break;
                case '/':
                    document.form.textview.value = a / b
            }
        }    
    }
    

}