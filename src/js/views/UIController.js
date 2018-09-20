import { elements } from './base';

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

    //SE O ELEMENTO JA EXISTIR
    if (alreadyCreated.includes(bodyPartLower)) {
        position = `#${bodyPartLower}`;

        html = `
            <td>%exercise%</td>
            <td>%weight%</td>
        `;

        newHtml = html.replace(`%exercise%`, lastAdded[0]);
        newHtml = newHtml.replace(`%weight%`, lastAdded[1]);
    }
    //SE O ELEMENTO N EXISTIR
    else {
        position = elements.exerciseList;

        html = `
        <table>
            <thead>
                <tr>
                    <th class="table-title" colspan="2">%bodyPart%</th>
                </tr>
            </thead>
            <thead>
                <tr>
                    <th class="sub-title-table">Exercicio</th>
                    <th class="sub-title-table">Peso</th>
                </tr>
            </thead>
            <tbody id="${bodyPartLower}">
                <tr>
                    <td>%exercise%</td>
                    <td>%weight%</td>
                </tr>
        </tbody>`;

        newHtml = html.replace(`%bodyPart%`, bodyPart.toUpperCase());
        newHtml = newHtml.replace(`%exercise%`, lastAdded[0]);
        newHtml = newHtml.replace(`%weight%`, lastAdded[1]);

        alreadyCreated.push(bodyPartLower);
    }
    document.querySelector(position).insertAdjacentHTML('beforeend', newHtml);
}

            