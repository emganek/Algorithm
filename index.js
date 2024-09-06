function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

function recursiveFactorial(n) {
  if (n < 2) {
    return 1;
  }

  return recursiveFactorial(n - 1) * n;
}

function binarySearch(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    let middleIndex = Math.floor((left + right) / 2);

    if (target === sortedArray[middleIndex]) {
      return middleIndex;
    }

    if (target < sortedArray[middleIndex]) {
      right = middleIndex - 1;
    } else {
      left = middleIndex + 1;
    }
  }

  return -1;
}

function recursiveBinarySearch(sortedArray, target, offset = 0) {
  let left = 0;
  let right = sortedArray.length - 1;

  if (left > right) {
    return -1;
  }

  let middleIndex = Math.floor((left + right) / 2);

  if (target === sortedArray[middleIndex]) {
    return middleIndex + offset;
  }

  if (target < sortedArray[middleIndex]) {
    right = middleIndex - 1;
  } else {
    left = middleIndex + 1;
  }

  return recursiveBinarySearch(
    sortedArray.slice(left, right + 1),
    target,
    left + offset
  );
}

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++)
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        const temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }

  return array;
}

function bubbleSortV2(array) {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const numberToInsert = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > numberToInsert) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = numberToInsert;
  }

  return array;
}

function quickSort(array) {
  const pivot = array[array.length - 1];
  let smallerNumbers = [];
  let biggerNumbers = [];

  if (array.length < 2) {{
    return array;
  }}

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      smallerNumbers.push(array[i]);
      continue;
    }

    biggerNumbers.push(array[i]);
  }

  return [...quickSort(smallerNumbers), pivot, ...quickSort(biggerNumbers)];
}

function mergeSort(array) {
  const middleIndex = Math.floor(array.length / 2);
  let left = [];
  let right = [];

  if (array.length < 2) {
    return array
  }
  
  for (let i = 0; i < array.length; i++ ) {
    if (i < middleIndex) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return mergeActionInMergeSort(mergeSort(left), mergeSort(right));
}

function mergeActionInMergeSort(left, right) {
  if (left.length === 0) {
    return right
  }

  if (right.length === 0) {
    return left
  }

  let temp = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (temp.length < right.length + left.length) {
    const firstLeft = left[leftIndex];
    const firstRight = right[rightIndex];

    if ((firstLeft && firstLeft < firstRight) || !firstRight) {
      temp.push(firstLeft);
      leftIndex++
    } 
    
    if ((firstRight && firstRight < firstLeft) || !firstLeft){
      temp.push(firstRight);
      rightIndex++
    }
  }

  return temp;
}

// console.log(recursiveBinarySearch([-5, 2, 3, 5, 6, 100, 121], -5));
// console.log(insertionSort([-5, 2, 121, 3, -5, 6, -100]));
// console.log(quickSort([-5, 2, 121, 3, -5, 6, -100]));
// console.log(bubbleSort([-1, -3, 9, -5]));
console.log(quickSort([-6, 20, 8, -2, 4]));
console.log(mergeSort([-6, 20, 8, -2, 4]));
