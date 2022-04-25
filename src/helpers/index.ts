export const numberToMinute = (num:number):number => {
    var minutes = num / 60;
    return minutes
}

export const randomIntFromInterval = (min:number, max:number):number => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}