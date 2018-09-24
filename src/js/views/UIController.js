import { elements, DOMStrings } from './base';

const alreadyCreated = [];

export const getInput = () => {
    return {
        bodyPart: elements.bodyPartInput.value,
        exercise: elements.exerciseInput.value,
        weight: elements.weightInput.value
    }
}

export const addActivityToUI = (exerciseList, bodyPart) => {
    let html, newHtml, idx, lastAdded, bodyPartLower, position;

    bodyPartLower = bodyPart.toLowerCase();
    idx = exerciseList[`${bodyPartLower}`].length - 1;
    lastAdded = Object.values(exerciseList[`${bodyPartLower}`][idx]);

    if (alreadyCreated.includes(bodyPartLower)) {
        position = `#${bodyPartLower}`;

        html = `<tr>
        <td class="table-body" colspan="2">%exercise%</td><td class="table-body">%weight%</td>
        <td class="table-body icon-table-body"><ion-icon name="close-circle-outline" class="close-circle-outline"></ion-icon>
        </td> </tr></tbody>`;

        newHtml = html.replace(`%exercise%`, lastAdded[0]);
    }
    else {
        position = elements.exerciseList;

        html = `<table><thead><tr><th class="main-header table-title" colspan="3">%bodyPart%</th>
        <th class="main-header icon-table-head-1"><ion-icon name="close-circle-outline" class="close-circle-outline"></ion-icon></th></tr></thead>
        <thead><tr><th class="sub-title-table" colspan="2">Exercicio</th><th class="sub-title-table" colspan="2">Peso</th></tr></thead>
        <tbody id="${bodyPartLower}"><tr><td class="table-body" colspan="2">%exercise%</td> <td class="table-body">%weight%</td>
        <td class="table-body icon-table-body"><ion-icon name="close-circle-outline" class="close-circle-outline"></ion-icon></td></tr>
        </tbody></table>`;

        newHtml = html.replace(`%bodyPart%`, bodyPart.toUpperCase());
        newHtml = newHtml.replace(`%exercise%`, lastAdded[0]);;
        alreadyCreated.push(bodyPartLower);
    }
    newHtml = newHtml.replace(`%weight%`, lastAdded[1]);
    document.querySelector(position).insertAdjacentHTML('beforeend', newHtml);
}

export const clearFields = () => {
    let fields, fieldsArr;

    fields = document.querySelectorAll(`${DOMStrings.bodyPartInputString}, ${DOMStrings.exerciseInputString}, ${DOMStrings.weightInputString}`);

    fieldsArr = Array.prototype.slice.call(fields);

    fieldsArr.forEach(element =>  element.value = '' );

    fieldsArr[0].focus();
}

