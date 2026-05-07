function mult() {
    // Перетворюємо текст з поля на число
    let num1 = parseFloat(document.getElementById("first_num").value);
    let num2 = parseFloat(document.getElementById("second_num").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML = "Будь ласка, введіть коректні числа";
    } else {
        document.getElementById("result").innerHTML = "Результат: " + (num1 * num2);
    }
}