let activities = {};
let id;

export const addActivityToList = (bodyPart, exercise, weight) => {
    if (!activities[bodyPart]){
        activities[bodyPart] = [];
    }

    let idx = createID();
    activities[bodyPart].push({exercise, weight, idx});

    persistData(activities);
    return activities; // {perna}
}

const createID = () => {
    if (id === undefined || id === null) {
        return id = 0;
    } else {
        return id += 1;
    }
}

export const deleteList = tableID => {

    if(activities[tableID]){
        delete activities[tableID];
        console.log(activities);
    }

    persistData(activities);
}

export const deleteItem = (tableID, itemID) => {
    if(activities[tableID]){
        const intID = parseInt(itemID);
        const item = activities[tableID].find( arr => arr.idx === intID);
        const indexItem = activities[tableID].indexOf(item);
        activities[tableID].splice(indexItem, 1);
        console.log(activities[tableID]);
    }
}

export const persistData = list => {
    localStorage.setItem('actData', JSON.stringify(list));
}

export const loadStorage = () => {
    activities = JSON.parse(localStorage.getItem('actData')) || {};
    Object.keys(activities).forEach(key => ( {[key]: activities[key]} ));
    return activities;    
}
// 1 - Object.keys vai retornar: [perna,biceps] // 2 - Map vai retornar: [{perna: [{exercicio,peso}]}, {biceps: [{exercicio,perna}]}]