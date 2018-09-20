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
                <th colspan="2">%bodyPart%</td>
            </thead>
            <thead>
                <th>Exercise</td>
                <th>Weight</td>
            </thead>
            <tbody id="${bodyPartLower}">
                <td>%exercise%</td>
                <td>%weight%</td>
            </tbody>
        </table>`;

        newHtml = html.replace(`%bodyPart%`, bodyPartLower);
        newHtml = newHtml.replace(`%exercise%`, lastAdded[0]);
        newHtml = newHtml.replace(`%weight%`, lastAdded[1]);

        alreadyCreated.push(bodyPartLower);
    }
    document.querySelector(position).insertAdjacentHTML('beforeend', newHtml);
}
