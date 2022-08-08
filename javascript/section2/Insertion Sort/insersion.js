function insersion_sort(...arr) {
    let n = arr.length;
        for (let i=1; i<n;i++) {
            let current = arr[i];
            let j = i-1; 
            while ((j > -1) && (current < arr[j])) {
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = current;
        }
    return arr;
}

function reverse_insersion(...arr) { 

    for(let i = arr.length-2; i>=0; i--) {
        let value = arr[i];
        let j;
        for(j = i; ((j < arr.length) && (arr[j+1] > value)); j++){ 
            arr[j] = arr[j+1]; 
        } 
        arr[j] = value;
    }
    return arr;
}
