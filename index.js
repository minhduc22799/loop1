function dem() {
    for (let i = 1; i <= 100; i++) {
        document.write(i + "<br>")
        if (i > 99) {
            alert("Hoàn thành");
        }
    }
}

function nhietDo() {
    let nhietDo = +prompt("nhập nhiệt độ");
    while (nhietDo > 100) {
        alert("giảm nhiệt độ")
        nhietDo = +prompt("nhập nhiệt độ")
    }
    while (nhietDo < 20) {
        alert("tăng nhiệt độ")
        nhietDo = +prompt("nhập nhiệt độ")
    }
    if (nhietDo => 20 && nhietDo <= 100) {
        alert("hợp lí")
    }

}

function fibonacci() {
    let n1 = 0, n2 = 1, sum;
    for (let i = 1; i <= 20; i++) {
        sum = n1 + n2;
        n1 = n2;
        n2 = sum
        document.write(sum + "<br>")
    }
}

function fibinacci2() {
    let n1 = 0, n2 = 1, sum;
    for (let i = 1; i <= 20; i++) {
        sum = n1 + n2;
        n1 = n2;
        n2 = sum
        if (sum % 5 == 0) {
            document.write(sum);
            break
        }
    }
}

function tongNguyenTo() {
    let n1 = 0, n2 = 1, sum;
    for (let i = 1; i <= 20; i++) {
        sum = n1 + n2;
        n1 = n2;
        n2 = sum
    }
    document.write(sum);
}

function DivisionSeven() {
    let sum, n1 = 0, n2 = 0;
    for (let i = 1; i <= 30; i++) {
        n1 = i * 7;
        sum = n1 + n2
        n2 = n1
        n2 = sum

    }
    document.write(sum);
//3255
}
function fizzBuzz(){
    for (let i = 1; i <=100 ; i++) {
        if (i % 3 ==0 && i % 5==0){
            document.write("FizzBuzz"  + "<br>")
        }else if (i % 3 ==0){
            document.write("Fizz"  +  "<br>")
        }else if (i % 5 ==0){
            document.write("Buzz"+  "<br>")
        }else {
            document.write(i+"<br>")
        }
    }
}
function game(){
    var number1 = +prompt("nhập khoảng từ");
    var number2 = +prompt("nhập khoảng tới");
    for (let i = number1; i<number2; i++){
        var input = +prompt("Chọn số");
        if (input == i){
            alert("Chúc mừng đã đoán đúng")
            break;
        }else {
            alert("sai rồi ")
        }
    }
}