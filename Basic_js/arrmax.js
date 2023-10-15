let arr = [52,45,78,69,25]
let max = -Infinity
let len = arr.length
function arrmax(arr){
    while(len--){
        if(arr[len]>max){
            max = arr[len]
        }
    }
    console.log( max)

}

arrmax(arr);

