
// typeof

// let age = 30
// console.log(typeof age)
// let city = 'Seoul'
// console.log(typeof city)
//  let statusUser = false 
//  console.log(typeof 'statusUser')
//  console.log(typeof statusUser)
//  let data = null
//  console.log(typeof data)
//  let user 
//  console.log(typeof user)


// Операторы
// let sum = 5 + 6
// console.log(sum)
// let sum2 = 'Привет '+'мир'
// console.log(sum2)
// let sum3 = '1' + '2'
// console.log(Number(sum3))
// console.log(sum + sum3)
// console.log(sum + Number(sum3))
// let err = 5
// console.log(-err / 0)  // Infinity
// let a = 4
// console.log(4**2);             //Возведение в степень
// console.log(Math.pow(a, 2));    //Возведение в степень
// a = ++a         //a = a + 1
// console.log(a);
// a = --a         //a = a - 1
// console.log(a);   //4
// console.log(a--);     //4, потом вычитается -1
// console.log(a);      //3
// console.log(-a);      //-3
// console.log(-a / 0);      //-Infinity



// prompt() alert()

// const messages = prompt('How are you?')
// alert('hello')           //Выводит напечатанное сообщение
// console.log(messages)



// 1 задача
// let name = prompt('Привет, как ваше имя?')
// alert('Привет ' + name )


// 2 задача
// const year = 2024
// let birthYear = prompt('Год вашего рождения?', 0)  Текущий год, когда вырос,
// let age = year - birthYear
// alert(age)



// 3 задание 
// let radius = prompt('Введите длину стороны квадрата: ')
// alert ('Периметр квадрата равен: ' + 4 * radius)

// 4 задание 
// let radius = prompt('Введите радиус окружности: ')
// let square = Math.Pi * radius * 2
// alert ('Площадь окружности: '+ square)  


// 5 задание 
// let distance = prompt("Введите расстояние между городами в км: ")
// let time = prompt('За какое времы вы хотите преодолеть это расстояние в часах? ')
// alert ('Вам необходимо двигаться со средней скоростью ' + distance / time + 'км/ч')



// 6 задание 
// let rate = prompt('Введите текущий курс доллара по отношению к евро: ')
// let dollar = prompt('Введите количество долларов для обмена: ')
// alert("По текущему курсу вы получите: " + dollar * rate + "евро")


// 7 задание 
// const GB_MB = 1024
// let Vol = prompt('Укажите объем вашей флешки в ГБ? ')
// let numb = Math.floor((Vol*1024)/820)
// alert(numb)



// 8 задание 
// let sum = prompt("Cколько у вас в бумажнике денег? ")
// let price = prompt("И почем одна шоколадка? ")
// sum = Number(sum)
// price = Number(price)
// let sell = prompt(sum / price)
// let change = prompt(sum - price * sell)
// if (sell < 1){
//     alert('Сегодня вы на нуле. приходите в другой раз')
// }
// else{

//     alert('Получите свои ' + sell + ' шоколадки, а также сдачу ' + (sum - price * sell) + ' рублей ')
// }!!!!!!!!!!!!!!!




// 9 задание 
// nmb = prompt('Введите трехзначное число: ');
// let a = Number(nmb % 10);
// let b = Number((nmb - a) / 10 % 10);
// let c = Number((nmb - a - b * 10) / 100);
// alert('Перевертыш: ' + (a * 100 + b * 10 + c))


// 10 задание 
// let a = prompt('Введите число для проверки на четность: ');
// a = Number(a);
// alert((parseInt(a) % 2 == 0) ? "ЧЁТНОЕ" : "НЕЧЁТНОЕ");











// Условия
 let work = prompt('Укажите зарплату', 0)
// if(work<20000){
//     console.log('вам отказ')
// }else{
//     alert('вам одобрено!!!!')
// }

// let work = prompt('Укажите зарплату')
// if(work<=20000){
//     console.log('вам отказ')
// }
// else if(work<=40000){
//    console.log('нужен поручитель!!!!')
// }
// else if(work>30000){
//     console.log('вам одобрено!!!!')
//  }
 
//  work <=2000 ? console.log('вам отказ') : console.log('вам одобрено!!!!')       // тернарный оператор



switch(work){
    case 20000
        alert('вам отказ')
    case 30000
        alert('нужен поручитель')
    case 50000
        alert('вам одобрено!!!!')
        default:
            alert('нужны все документы')

}


