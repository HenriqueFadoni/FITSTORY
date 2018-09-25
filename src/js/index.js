import * as DataCtrl from "./modules/dataController";
import * as UICtrl from "./views/UIController";
import { elements } from './views/base';

/** GLOBAL APP CONTROLLER */

const controller = () => {
    elements.addButton.addEventListener('click', ctrlAddItem);
    //document.querySelector('btn-delete-list').addEventListener('click', ctrlDeleteList);
}


const ctrlAddItem = () => {
    let input;

    // 1 - Get the field input data
    input = UICtrl.getInput();

    if (input.bodyPart !== "" && input.exercise !== "" && input.weight !== "") {

        // 2- Add the item to the dataController
        const newActivityList = DataCtrl.addActivityToList(input.bodyPart, input.exercise, input.weight);
        // 3- Add the item to the UI
        UICtrl.addActivityToUI(newActivityList);
        // 4- Clear the fields
        UICtrl.clearFields();

    } else {
        alert("Please, input some data.");
    }
    
}

const ctrlDeleteList = event => {
    let listBodyPart = event.target.parentNode.parentNode.parentNode.id;

    if(listBodyPart){
        console.log(listBodyPart);
    }
}

window.addEventListener('load', () => {
    DataCtrl.loadStorage();
});

controller();




//Object.keys(dataRecovery) // Object.keys vai retornar: [perna,biceps]
//    .map(key => ( {[key]: dataRecovery[key]} )) // Map vai retornar: [{perna: [{exercicio,peso}]}, {biceps: [{exercicio,perna}]}]
//    .forEach(element => UICtrl.addActivityToUI(element)); // A função passa para o forEach vai receber: 0: {perna: [{exercicio,peso}]} , 1: {biceps: [{exercicio,perna}]}