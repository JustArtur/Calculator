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

function equal() {
    string = document.form.textview.value 
    const massiv = ["+","-","*","/"]
    for (let i of massiv) {
        if (string.indexOf(i) != -1) {
            let index = string.indexOf(i)
            a = parseInt(string.substring(0,index))
            b = parseInt(string.substring(index+1))
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