import { elements } from './base';

const newDatasArr = [];
const filteredData = [];

export const getInput = () => {
    return {
        bodyPart: elements.bodyPartInput.value,
        exercise: elements.exerciseInput.value,
        weight: elements.weightInput.value
    }
}

export const addListActivity = (newActivity, newDatas) => {
    let html, newHtml;


    if (validation(newActivity, newDatas) == true) {
        console.log('funciona');
    }
    let element = elements.exerciseList;

    html = '<div class="row table-btn"> '
        + '<div class="col span-2-of-2 js--body-part">'
        + '<a class="btn-title" hreft="#">%bodyPart%</a>'
        + '<ion-icon name="arrow-dropdown-circle" class="btn-icon arrow-dropdown-circle"></ion-icon>'
        + '<ion-icon name="close-circle" class="btn-icon close-circle"></ion-icon></div></div>'
        + '<div class="row table-argument">'
        + '<div class="exercise-name-result col span-1-of-2">%exercise%</div>'
        + '<div class="weight-number-result col span-1-of-2">%weight%</div></div>';

    newHtml = html.replace('%bodyPart%', newActivity.bodyPart);
    newHtml = newHtml.replace('%exercise%', newActivity.exercise);
    newHtml = newHtml.replace('%weight%', newActivity.weight);

    document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
}

const validation = (newActivity, newDatas) => {
    const newActivityArr = Object.values(newActivity);

    newDatas.forEach((element, index) => {
        if (newDatasArr.length === index) {
            newDatasArr.push(Object.values(element));
        }
    });
    newDatasArr.forEach((element, index) => {
        filteredData[index] = newDatasArr[index][1];
    });
    console.log(filteredData);


}