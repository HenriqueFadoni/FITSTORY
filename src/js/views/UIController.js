import { elements, DOMStrings } from './base';

const alreadyCreated = [];
const alreadyCreatedExercise = [];
let id, position, newHtml, html;

export const getInput = () => {
    return {
        bodyPart: elements.bodyPartInput.value,
        exercise: elements.exerciseInput.value,
        weight: elements.weightInput.value
    }
}

export const addActivityToUI = (bodyPart, exerciseList) => { //"perna", [{exercise: "Agachamento", peso: "10"}][{exercise: "Corrida", peso: "0"}]
    const bodyPartLower = bodyPart.toLowerCase();

    // [0i: {exercise: "a", weight: "1"}, 1: {exercise: "a", weight: "2"}]
    let exerciseListArr = Object.keys(exerciseList).map(prop => Object.values(exerciseList[prop]));
    exerciseListArr.forEach(arr => displayActivity(bodyPartLower, arr)); // [["agach","20"], ["pulo","2"]]

}

const displayActivity = (bpLowerCase, array) => {
    const exercicio = array[0];
    const peso = array[1];

    if (!alreadyCreatedExercise.includes(exercicio)) {
        createID(id);

        if (alreadyCreated.includes(bpLowerCase)) {
            tableExist(id, bpLowerCase, exercicio, peso);
        } else {
            createTable(id, bpLowerCase, exercicio, peso);
        }

        alreadyCreatedExercise.push(exercicio);
    } else {
        console.log(`exercicio já foi criado`);
    }
}
const createID = id => {
    if (id === undefined || id === null) {
        id = 0;
    } else {
        id += 1;
    }
}

const tableExist = (id, bpLowerCase, exercicio, peso) => {
    position = `#${bpLowerCase}`;

    html = `<tr id="%id%">
    <td class="table-body" colspan="2">%exercise%</td><td class="table-body">%weight%</td>
    <td class="table-body icon-table-body"><ion-icon name="close-circle-outline" class="close-circle-outline"></ion-icon>
    </td></tr>`;

    newHtml = html.replace(`%id%`, id);
    newHtml = newHtml.replace(`%exercise%`, exercicio);
    newHtml = newHtml.replace(`%weight%`, peso);

    document.querySelector(position).insertAdjacentHTML('beforeend', newHtml);
}

const createTable = (id, bpLowerCase, exercicio, peso) => {
    position = elements.exerciseList;

    html = `<table id="${bpLowerCase}-table"><thead><tr><th class="main-header table-title" colspan="3">%bodyPart%</th>
    <th class="main-header icon-table-head-1"><ion-icon name="close-circle-outline" class="close-circle-outline btn-delete-list"></ion-icon></th></tr></thead>
    <thead><tr><th class="sub-title-table" colspan="2">Exercicio</th><th class="sub-title-table" colspan="2">Peso</th></tr></thead>
    <tbody id="${bpLowerCase}"><tr id="%idx%"><td class="table-body" colspan="2">%exercise%</td> <td class="table-body">%weight%</td>
    <td class="table-body icon-table-body"><ion-icon name="close-circle-outline" class="close-circle-outline"></ion-icon></td></tr>
    </tbody></table>`;

    newHtml = html.replace(`%id%`, id);
    newHtml = newHtml.replace(`%bodyPart%`, bpLowerCase.toUpperCase());
    newHtml = newHtml.replace(`%exercise%`, exercicio);
    newHtml = newHtml.replace(`%weight%`, peso);
    alreadyCreated.push(bpLowerCase);

    document.querySelector(position).insertAdjacentHTML('beforeend', newHtml);
}

export const clearFields = () => {
    let fields, fieldsArr;

    fields = document.querySelectorAll(`${DOMStrings.bodyPartInputString}, ${DOMStrings.exerciseInputString}, ${DOMStrings.weightInputString}`);

    fieldsArr = Array.prototype.slice.call(fields);

    fieldsArr.forEach(element => element.value = '');

    fieldsArr[0].focus();
}