let activities = {};
let data = [];

export const addActivityToList = (bodyPart, exercise, weight) => {
    

    let lowerCaseBodyPart = bodyPart.toLowerCase();
    
    if (!activities[lowerCaseBodyPart]){
        activities[lowerCaseBodyPart] = [];
    }

    activities[lowerCaseBodyPart].push({exercise, weight});

    persistData(activities);

    return activities;
}

export const persistData = list => {
    localStorage.setItem('actData', JSON.stringify(list));
}

export const loadStorage = () => {
    
    data = JSON.parse(localStorage.getItem('actData')) || {};

    activities = Object.keys(data).forEach(key => ( {[key]: data[key]} ));
    // 1 - Object.keys vai retornar: [perna,biceps] // 2 - Map vai retornar: [{perna: [{exercicio,peso}]}, {biceps: [{exercicio,perna}]}]
    console.log(activities);
}