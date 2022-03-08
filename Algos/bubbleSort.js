const nums1 = [5,4,3,2,1];
const nums2 = [9,2,5,6,4,1,9,4,8];
const nums3 = [10,9,8,7,6,5,4,3,2,1];


function bubbleSort(array) {
    for(let i = 0; i < array.length - 1; i++){
      for(let j = 0; j < array.length - 1; j++){
        if(array[j] > array[j + 1]){
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return array;
  }

console.log(bubbleSort(nums1));
console.log(bubbleSort(nums2));
console.log(bubbleSort(nums3));


