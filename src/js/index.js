import * as DataCtrl from "./modules/dataController";
import * as UICtrl from "./views/UIController";
import { elements } from './views/base';

/** GLOBAL APP CONTROLLER */
const state = {};

const ctrlAddItem = () => {
    let input;

    // 1 - Get the field input data
    input = UICtrl.getInput();

    if (input.bodyPart !== "" && input.exercise !== "" && input.weight !== "") {

        // 2- Add the item to the dataController
        const newActivity = DataCtrl.addActivity(input.bodyPart, input.exercise, input.weight);
        // 3- Add the item to the UI
        UICtrl.addListActivity(newActivity);
        // 4- Clear the fields

    } else {
        alert("Please, input some data.");
    }
}


elements.addButton.addEventListener('click', ctrlAddItem);
