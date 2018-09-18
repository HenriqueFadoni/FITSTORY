class Data {
    constructor(id, bodyPart, exercise, weight) {
        this.id = id;
        this.bodyPart = bodyPart;
        this.exercise = exercise;
        this.weight = weight;
    }
}

const dataList = [];

export const addActivity = (bodyPart, exercise, weight) => {
    let id;

    if(dataList.length > 0){
        id = dataList[dataList.length - 1].id + 1;
    } else {
        id = 0;
    }

    const newData = new Data(id, bodyPart, exercise, weight);
    dataList.push(newData);
    console.log(dataList);
    return newData;
}