const activities = {};

export const addActivityToList = (bodyPart, exercise, weight) => {
    //let id;

    let lowerCaseBodyPart = bodyPart.toLowerCase();
    
    if (!activities[lowerCaseBodyPart]){
        activities[lowerCaseBodyPart] = [];
        //id = 0;
    }

    //id = activities[lowerCaseBodyPart].length;

    activities[lowerCaseBodyPart].push({exercise, weight});

    return activities;
}
