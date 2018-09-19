import { elements } from './base';

const alreadyCreated = [];

export const getInput = () => {
    return {
        bodyPart: elements.bodyPartInput.value,
        exercise: elements.exerciseInput.value,
        weight: elements.weightInput.value
    }
}

export const addActivityToUI = (exerciseList,bodyPart) => {
    let html, newHtml, idx, lastAdded, bodyPartLower;

    bodyPartLower = bodyPart.toLowerCase();
    idx = exerciseList[`${bodyPartLower}`].length - 1;
    lastAdded = Object.values(exerciseList[`${bodyPartLower}`][idx]);
    


    //SE O ELEMENTO JA EXISTIR
    if(alreadyCreated.find(bodyPart) !== undefined || alreadyCreated.find(bodyPart) !== null){
        let position = `.${bodyPartLower}`;
    
        html = `<ul><li>%exercise%</li><li>%weight%</li></ul>`;

        newHtml = html.replace(`%exercise%`, lastAdded[0]);
        newHtml = newHtml.replace(`%weight%`, lastAdded[1]);

        document.querySelector(position).insertAdjacentHTML('beforeend', newHtml);
    } 
    //SE O ELEMENTO N EXISTIR
    else {
        AlreadyCreated.push(bodyPartLower);
    }
    

    console.log(exerciseList);
    console.log(lastAdded);
}