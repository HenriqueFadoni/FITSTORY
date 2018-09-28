let activities = {};

export const addActivityToList = (bodyPart, exercise, weight) => {
    if (!activities[bodyPart]){
        activities[bodyPart] = [];
    }

    activities[bodyPart].push({exercise, weight});

    persistData(activities);

    return activities; // {perna}
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