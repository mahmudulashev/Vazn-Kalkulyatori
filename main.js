// O'zgaruvchilar

let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let button = document.getElementById("Btn");
let p = document.getElementById("matn1");
let p2 = document.getElementById("matn2")


// Hisoblash funksiyasi

function BMI() {

    //  Funksiay uchun shaxsiy o'zininging o'zgaruvchilari

    let vazn = Number(input1.value);
    let boy = Number(input2.value);
    let javob = vazn / (boy*boy);

    // Bo'shliqlarni oldini oluvchi funksiya

    if (input1.value == "") {
        alert("Iltimos vazningizni kiriting!")
        return;
    } else if (input2.value == "") {
        alert("Iltimos bo'yingizni kiriting!")
        return;
    } 

    //Holatini aniqlovchi va Background rangini o'zgartiruvchi funksiya

    if (javob <= 18.5) {
        p2.style.backgroundColor = "yellow";
        p2.textContent = "Holatingiz: Ozg'in";
    } else if (javob >= 30) {
        p2.style.backgroundColor = "red";
        p2.textContent = "Holatingiz: Semiz";
    } else if (25 <= javob <= 29.9) {
        p2.style.backgroundColor = "green";
        p2.textContent = "Holatingiz: Meyyorida";

    }

    p.textContent = "Tana indeksingiz: " + javob.toFixed(2);
    return;
}

//Tugma

button.addEventListener('click', BMI);