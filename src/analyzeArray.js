export default function analyzeArray(arr) {
    if(arr.length > 0) {
        const average = arr.reduce((prev, curr) => (prev + curr), 0) / arr.length;
        const min = Math.min(...arr);
        const max = Math.max(...arr);
        return {average, min, max, length: arr.length};
    } else {
        return {average: null, min: null, max: null, length: 0};
    }
}

console.log(analyzeArray([1,8,3,4,2,6]))