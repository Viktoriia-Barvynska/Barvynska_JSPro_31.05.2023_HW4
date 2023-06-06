//=================HW4==================

//Дано два різні числа. Визначити, яке з них більше, а яке менше.

//let firstNumber = prompt('Введіть перше число');
//    firstNumber = Number(firstNumber);
//let secondNumber = prompt('Введіть друге число');
//    secondNumber = Number(secondNumber);
    
//    if (firstNumber > secondNumber) {
//      alert(` ${firstNumber} більше за ${secondNumber}`);
//    } else if (firstNumber < secondNumber) {
//      alert(` ${firstNumber} менше за ${secondNumber}`);
//    } else {
//      alert(` ${firstNumber} дорівнює ${secondNumber}`);
//    }
 
//=========================================================================
//Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?
    //const kilometers = prompt('Введіть відстань у кілометрах');
    //const feet = prompt('Введіть значення у футах');
    
    //const feetToMeters = 0.305; // Коефіцієнт переведення футів в метри
  
    //const metersKilometers = kilometers * 1000; // Переведення кілометрів у метри
    
    //const metersFeet = feet * feetToMeters; // Переведення футів у метри

    //if (metersKilometers < metersFeet) {
    //  alert('Відстань в кілометрах менша') ;
    //} else if (metersKilometers > metersFeet) {
    //  alert('Відстань у футах менша');
    //} else {
    //  alert('Відстані рівні');
    //}
  
//=========================================================================

//Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)

//const a = prompt('Введіть перше число');
//const b = prompt('Введіть друге число');

//    if (b % a === 0) {
//      alert(`${a} є дільником ${b}`);
//    } else {
//      alert(`${a} не є дільником ${b}`);
//    }
   
//    if (a % b === 0) {
//      alert(${b} є дільником ${a}`);
//    } else {
//      alert(`${b} не є дільником ${a}`);
//    }
  
//=========================================================================
//Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.
//    const yourNumber = prompt('Введіть число');

//   const lastNum = yourNumber % 10;
  
//    if (lastNum % 2 === 0) {
      // alert(`Остання цифра ${yourNumber} є парною`);
//    } else {
//      alert(`Остання цифра ${yourNumber} є непарною`);
//    }
  

//=========================================================================

//Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?
//const userNumber = prompt('Введіть двозначне число');
//    const tens = Math.floor(userNumber / 10); //розділ числa на десятки
//    const units = userNumber % 10; //розділ на одиниці 
  
//    if (tens > units) {
//        alert(`Перша цифра ${userNumber} (${tens}) є більшою за другу цифру (${units})`)
//    } else if (tens < units) {
//        alert(`Друга цифра ${userNumber} (${units}) є більшою за першу цифру (${tens})`)
//    } else {
//        alert(`Обидві цифри числа ${userNumber} рівні`)
//    } 
  


//=========================================================================

/*Дано тризначне число.
Визначити чи є парною сума його цифр.
Визначити, чи кратна сума цифр п'яти.
Визначити чи є добуток його цифр більше 100.*/


    //const threeDigitNumber = prompt('Введіть тризначне число');
    //const digit1 = Math.floor(threeDigitNumber / 100);   // Перша цифра
    //const digit2 = Math.floor((threeDigitNumber % 100) / 10);   // Друга цифра
    //const digit3 = threeDigitNumber % 10;   // Третя цифра
  
    //const sum = digit1 + digit2 + digit3;   // Сума цифр
    //const product = digit1 * digit2 * digit3;   // Добуток цифр
  
    //if (sum % 2 === 0) {
    //  console.log('Сума цифр є парною');
    //} else {
    //  console.log('Сума цифр є непарною');
    //}
  
    //if (sum % 5 === 0) {
    //  console.log('Сума цифр кратна числу 5');
    //} else {
    //  console.log('Сума цифр не кратна числу 5');
    //}
  
    //if (product > 100) {
    //  console.log('Добуток цифр є більшим за 100');
    //} else {
    //  console.log('Добуток цифр не є більшим за 100');
    //}

//=========================================================================

/*Дано тризначне число.
Чи правда, що всі цифри однакові?
Чи є серед цифр цифри однакові?*/

//const originalNumber = prompt('Введіть тризначне число');
//    const firstOriginalNumber = Math.floor(originalNumber / 100); // Перша цифра
//    const secondOriginalNumber = Math.floor((originalNumber % 100) / 10); // Друга цифра
//    const thirdOriginalNumber = originalNumber % 10; // Третя цифра
     
//    //перевірка чи всі цифри однакові (перше число === друге число ТА друге число === третє число. 
//    // БУДЕ TRUE ЯКЩО ОБИДВА АРГУМЕНТИ TRUE )
//    const allDigitsSame = firstOriginalNumber === secondOriginalNumber && secondOriginalNumber === thirdOriginalNumber; 
 
////  перевірка чи є однакові цифри (перше число === друге число АБО перше число === третє число АБО друге число === третє число
//// TRUE ЯКЩО ХОЧАБ ОДИН З АРГУМЕНТІВ TRUE)
//    const duplicateDigitFound = firstOriginalNumber === secondOriginalNumber || firstOriginalNumber === thirdOriginalNumber || secondOriginalNumber === thirdOriginalNumber;
  
//    if (allDigitsSame) {
//        alert(`Усі цифри числа ${originalNumber} є однаковими`)
//    } else {
//        alert(`Цифри числа ${originalNumber} не є однаковими`)
//    }
  
//    if (duplicateDigitFound) {
//        alert(`У числі ${originalNumber} серед цифр є однакові`)
//    } else {
//        alert(`У числі ${originalNumber} серед цифр немає однакових`)
//    }
  
  




//=========================================================================

//Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)


// ================ Число 123321 ========================
const firstGivenNumber = 123321;

// Розділяємо число на окремі цифри
const firstDigitInTheFirstGivenNumber = Math.floor(firstGivenNumber / 100000); // Перша цифра (1)
const secondDigitInTheFirstGivenNumber = Math.floor(firstGivenNumber / 10000) % 10; // Друга цифра (2)
const thirdDigitInTheFirstGivenNumber = Math.floor(firstGivenNumber / 1000) % 10; // Третя цифра (3)
const fourthDigitInTheFirstGivenNumber = Math.floor(firstGivenNumber / 100) % 10; // Четверта цифра (3)
const fifthDigitInTheFirstGivenNumber = Math.floor(firstGivenNumber / 10) % 10; // П'ята цифра (2)
const sixthDigitInTheFirstGivenNumber = firstGivenNumber % 10; // Шоста цифра (1)

// Перевіряємо, чи цифри у числі є дзеркальними
if (
    firstDigitInTheFirstGivenNumber === sixthDigitInTheFirstGivenNumber &&
    secondDigitInTheFirstGivenNumber === fifthDigitInTheFirstGivenNumber &&
    thirdDigitInTheFirstGivenNumber === fourthDigitInTheFirstGivenNumber
) {
  console.log(`${firstGivenNumber} є дзеркальним числом`);
} else {
  console.log(`${firstGivenNumber} не є дзеркальним числом`);
}

// ================ Число 147741 ========================

let secondGivenNumber = 147741; // Задане число для перевірки

let originalNumber = secondGivenNumber; // Зберігаємо початкове число

let reversedNumber = 0; // Змінна для збереження перевернутого числа

while (secondGivenNumber > 0) {
  let remainder = secondGivenNumber % 10; // Отримуємо останню цифру числа
//  console.log(remainder)
  reversedNumber = reversedNumber * 10 + remainder; // Додаємо цифру до перевернутого числа
//  console.log(reversedNumber)
  secondGivenNumber = Math.floor(secondGivenNumber / 10); // Видаляємо останню цифру числа
//  console.log(secondGivenNumber)
}

/* ==================== Як працює цикл =============
=============== перша ітерація ================
1) Оголошуємо змінну remainder яка буде зберігати в собі результат розрахунку: 147741 / 10 (1);
2) Змінна reversedNumber зараз зберігає в собі значення 0, ми їй записуємо нове значення, а саме 0 * 10 + 1(значення, яке зараз зберігає в собі змінна remainder). Тепер змінна reversedNumber зберігає у собі значення 1
3) Змінна secondGivenNumber зараз зберігає у собі 147741 ми за допомогою Math.floor видаляємо останню цифру, тобто 147741 / 10 , отримуємо 14774
================ друга ітерація =========
1) remainder (зараз 1) = 14774 / 10 тепер 4
2) reversedNumber (зараз 1) = reversedNumber (1)*10+remainder(4) тепер 14
3) secondGivenNumber (зараз 14774) = 14774 / 10 тепер 1477
================ третя ітерація =========
1) remainder (зараз 4) = 1477 / 10  тепер 7
2) reversedNumber (зараз 14) = reversedNumber (14)*10+remainder(7) тепер 147
3) secondGivenNumber (зараз 1477) = 1477 / 10 тепер 147
================ четверта ітерація =========
1) remainder (зараз 7) = 147 / 10  тепер 7
2) reversedNumber (зараз 147) = reversedNumber (147)*10+remainder(7) тепер 1477
3) secondGivenNumber (зараз 147) = 147 / 10 тепер 14
================ четверта ітерація =========
1) remainder (зараз 7) = 14 / 10  тепер 4
2) reversedNumber (зараз 1477) = reversedNumber (1477)*10+remainder(4) тепер 14774
3) secondGivenNumber (зараз 14) = 14 / 10 тепер 4
================ п'ята ітерація =========
1) remainder (зараз 4) = 4 / 10  тепер 1
2) reversedNumber (зараз 14774) = reversedNumber (14774)*10+remainder(1) тепер 147741
3) secondGivenNumber (зараз 4) = 4 / 10 тепер 1
*/



// Перевіряємо, чи число є дзеркальним
if (originalNumber === reversedNumber) {
    //originalNumber зберігає в собі значення 147741
    //reversedNumber зберігає значення 147741
    //console.log(originalNumber)
    //console.log(reversedNumber)

  console.log(`${originalNumber} є дзеркальним числом`);
} else {
  console.log(`${originalNumber} не є дзеркальним числом`);
}

