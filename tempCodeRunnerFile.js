rr = [0, 1, 0, 1, 0, 1, 0, 1];
let i = 0;
let j = 0;

while(i<arr.length && j !== arr.length){
    if(arr[i] == 0){
        [arr[i], arr[j]] = [arr[j], arr[i]];
        j++;
        i++;
    }else{
        i++;
    }
}

console.log(arr);
