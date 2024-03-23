// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом


const form = document.forms[0]
const btn = document.querySelector(".btn");
const content = document.getElementById("block__content")

btn.onclick = function () {
    const block = document.createElement("div")
    const p_1 = document.createElement("p")
    p_1.innerText = form["firstname"].value
    const p_2 = document.createElement("p")
    p_2.innerText = form["surname"].value
    const p_3 = document.createElement("p")
    p_3.innerText = form["age"].value
    block.append(p_1, p_2, p_3)
    content.appendChild(block)
};

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1


const counterBlock = document.getElementById("counterBlock")
const btnRefresh = document.getElementById("btn-refresh")
const btnReset = document.getElementById("btn-reset-refresh")

const reload = () => {
    window.location.reload();
}
const refreshPage = () => {

    let dataStorage = JSON.parse(localStorage.getItem("RefreshCounter")) || 0
    dataStorage = dataStorage + 1
    localStorage.setItem("RefreshCounter", JSON.stringify(dataStorage))
    counterBlock.innerText = `${dataStorage}`
    console.log("dataStorage", dataStorage)


}


document.addEventListener('DOMContentLoaded', function () {
    let dataStorage = JSON.parse(localStorage.getItem("RefreshCounter")) || 0
    dataStorage = dataStorage + 1
    localStorage.setItem("RefreshCounter", JSON.stringify(dataStorage))
    counterBlock.innerText = `${dataStorage}`
    console.log("dataStorage", dataStorage)
})

const resetCounter = () => {
    counterBlock.innerText = `0`
    localStorage.clear()

}


if (btnReset) {
    btnReset.onclick = function () {
        resetCounter()
    }
} else {
    console.error('Element not found!');
}

// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

const arrUsers = [
    {
        name: "user_1"
    },
    {
        name: "user_2"
    }, {
        name: "user_3"
    },
    {
        name: "user_4"
    },
    {
        name: "user_5"
    }, {
        name: "user_6"
    },
    {
        name: "user_7"
    },
    {
        name: "user_8"
    }, {
        name: "user_9"
    },
    {
        name: "user_10"
    },
    {
        name: "user_11"
    }, {
        name: "user_12"
    }, {
        name: "user_13"
    },
    {
        name: "user_14"
    },
    {
        name: "user_15"
    },
    {
        name: "user_16"
    },
    {
        name: "user_7"
    },
    {
        name: "user_18"
    },
    {
        name: "user_19"
    },
    {
        name: "user_20"
    },
    {
        name: "user_21"
    },
    {
        name: "user_22"
    },
    {
        name: "user_23"
    },
    {
        name: "user_24"
    }, {
        name: "user_25"
    },
    {
        name: "user_26"
    }, {
        name: "user_27"
    },
    {
        name: "user_28"
    },
    {
        name: "user_29"
    },
    {
        name: "user_30"
    },
    {
        name: "user_31"
    },
    {
        name: "user_32"
    }, {
        name: "user_33"
    },
    {
        name: "user_34"
    },
    {
        name: "user_35"
    }, {
        name: "user_36"
    },
    {
        name: "user_37"
    },
    {
        name: "user_38"
    }, {
        name: "user_39"
    },
    {
        name: "user_40"
    },
    {
        name: "user_41"
    }, {
        name: "user_42"
    }, {
        name: "user_43"
    },
    {
        name: "user_44"
    },
    {
        name: "user_45"
    },
    {
        name: "user_46"
    },
    {
        name: "user_47"
    },
    {
        name: "user_48"
    },
    {
        name: "user_49"
    },
    {
        name: "user_50"
    },
    {
        name: "user_51"
    },
    {
        name: "user_52"
    },
    {
        name: "user_53"
    },
    {
        name: "user_54"
    }, {
        name: "user_55"
    },
    {
        name: "user_56"
    }, {
        name: "user_57"
    },
    {
        name: "user_58"
    },
    {
        name: "user_59"
    },
    {
        name: "user_60"
    },
    {
        name: "user_61"
    },
    {
        name: "user_62"
    }, {
        name: "user_63"
    },
    {
        name: "user_64"
    },
    {
        name: "user_65"
    }, {
        name: "user_66"
    },
    {
        name: "user_67"
    },
    {
        name: "user_68"
    }, {
        name: "user_69"
    },
    {
        name: "user_70"
    },
    {
        name: "user_71"
    }, {
        name: "user_72"
    }, {
        name: "user_73"
    },
    {
        name: "user_74"
    },
    {
        name: "user_75"
    },
    {
        name: "user_76"
    },
    {
        name: "user_77"
    },
    {
        name: "user_78"
    },
    {
        name: "user_79"
    },
    {
        name: "user_80"
    },
    {
        name: "user_81"
    },
    {
        name: "user_82"
    },
    {
        name: "user_83"
    },
    {
        name: "user_84"
    }, {
        name: "user_85"
    },
    {
        name: "user_86"
    }, {
        name: "user_87"
    },
    {
        name: "user_88"
    },
    {
        name: "user_89"
    },
    {
        name: "user_90"
    },
    {
        name: "user_92"
    },{
        name: "user_93"
    },{
        name: "user_94"
    },
    {
        name: "user_95"
    },{
        name: "user_96"
    },
    {
        name: "user_97"
    },{
        name: "user_98"
    },{
        name: "user_99"
    },{
        name: "user_100"
    },





]

const prevBtn = document.getElementById("Prev")
const contentPagination = document.getElementById("ContentPagination")
const nextBtn = document.getElementById("Next")


let a = 0
let b = 10
const tenItemFromArr = (a, b) => {
    contentPagination.innerHTML=""


    let items = arrUsers.slice(a, b)
    items.map(item =>{
        const span = document.createElement("span")
        span.innerHTML=""
        span.innerText = `${item.name} `
        contentPagination.appendChild(span)
    })

}


if (prevBtn && contentPagination && nextBtn) {
    tenItemFromArr(a, b)
    prevBtn.onclick = function () {
        a = a - 10
        b = b - 10
        if (a>=0 && b>=10 && a<=90 && b<=100){
            tenItemFromArr(a,b)
        }

    };

    nextBtn.onclick = function () {
        a = a + 10
        b = b + 10
        if (a>=0 && b>=10 && a<=90 && b<=100){
            tenItemFromArr(a,b)
        }
    }
} else {
    console.error('Element not found!');
}

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

const text = document.getElementById("text")
const deleteBtn = document.getElementById("delete-btn")

deleteBtn ? deleteBtn.onclick = function () {
    text.style.display = "none"
} : console.log("didn't found element")

    // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

const inputAge = document.getElementById("age")
const btnImprove = document.getElementById("btn-improve-age")

btnImprove ? btnImprove.onclick = function () {
    inputAge.value < 18 ? alert("You are child") : alert("You are cool")
} : console.log("didn't found element")
