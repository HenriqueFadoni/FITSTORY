import * as DataCtrl from "./modules/dataController";
import * as UICtrl from "./views/UIController";
import { elements } from './views/base';

/** GLOBAL APP CONTROLLER */
let loadList = {};

const controller = () => {
    elements.addButton.addEventListener('click', ctrlAddItem);
    document.querySelector(elements.exerciseList).addEventListener('click',deleteTable);
}

const ctrlAddItem = () => {
    // 1 - Get the field input data
    const { bodyPart, exercise, weight } = UICtrl.getInput();

    if (bodyPart && exercise && weight) {
        const lowerCaseBodyPart = bodyPart.toLowerCase();

        // 2- Add the item to the dataController
        const newActivityList = DataCtrl.addActivityToList(lowerCaseBodyPart, exercise, weight);
        // 3- Add the item to the UI
        UICtrl.addActivityToUI(lowerCaseBodyPart, newActivityList[lowerCaseBodyPart]);
        // 4- Clear the fields
        UICtrl.clearFields();

    } else {
        alert("Please, input some data.");
    }
}

const deleteTable = event => {
    let splitID, idDelete;

    const tableID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if(tableID && event.target.matches(' .icon-table-head-1, .icon-table-head-1 *')){
        splitID = tableID.split('-');
        idDelete = splitID[0];

        // 1- Delete the item from the data structure
        DataCtrl.deleteList(idDelete);

    }

}
window.addEventListener('load', () => {
    loadList = DataCtrl.loadStorage();
    //loadList = { "a": [{ "exercise": "a", "weight": "1" }, { "exercise": "a", "weight": "2" }], "b": [{ "exercise": "b", "weight": "1" }], "c": [{ "exercise": "c", "weight": "1" }, { "exercise": "c", "weight": "2" }] }

    Object.keys(loadList) // [a,b,c]
        .forEach(prop => UICtrl.addActivityToUI(prop, loadList[prop])); // [{ "exercise": "a", "weight": "1" }, { "exercise": "a", "weight": "2" }]
});

controller();

//Object.keys(dataRecovery) // Object.keys vai retornar: [perna,biceps]
//    .map(key => ( {[key]: dataRecovery[key]} )) // Map vai retornar: [{perna: [{exercicio,peso}]}, {biceps: [{exercicio,perna}]}]
//    .forEach(element => UICtrl.addActivityToUI(element)); // A função passa para o forEach vai receber: 0: {perna: [{exercicio,peso}]} , 1: {biceps: [{exercicio,perna}]}