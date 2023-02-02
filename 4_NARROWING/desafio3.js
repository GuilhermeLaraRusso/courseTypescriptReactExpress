"use strict";
function review(grade) {
    if (grade == undefined) {
        console.log(`O usuário não deixou nota`);
    }
    else if (grade > 0 && grade <= 5) {
        console.log(`A nota registrada foi ${grade}`);
    }
    else {
        console.log('Esta opção é inválida');
    }
}
review(5);
review(1);
review();
review(0);
