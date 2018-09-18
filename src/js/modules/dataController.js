function buildActivity(id, bodyPart, exercise, weight) {
    return {
        id,
        bodyPart,
        exercise,
        weight
    }
}

const dataList = [];

export const addActivity = (bodyPart, exercise, weight) => {
    let id;

    if (dataList.length > 0) {
        id = dataList[dataList.length - 1].id + 1;
    } 
    else {
        id = 0;
    }

    let newData = new buildActivity(id, bodyPart, exercise, weight);
    dataList.push(newData);
    return newData;
}

export const report = () => {
    return dataList;
}