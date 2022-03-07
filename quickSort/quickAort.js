
let arr = [4,65,8,1,2,54,2,66,45,2,945,4]

function quickSort(array) {
    if(array <= 1){
      return array;
    }
  
    const pivot = array[array.length -1]
    const leftArr = [];
    const rightArr = [];
  
    for(const el of array.slice(0, array.length - 1)){
      el < pivot ? leftArr.push(el) : rightArr.push(el);
    }
  
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  
  }


console.log(quickSort(arr));