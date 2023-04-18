const swap = (arr, i, j) => {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
};

const partition = async (thisData, left, right, labels, colors, chartRef, speed) => {
  const delay = 600 - speed;
  let pivot = thisData[Math.floor((right + left) / 2)]; //initial pivot

  let i = left; //left pointer
  let j = right; //right pointer

  while (i <= j) {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    let prevCol = colors[pivot];
    colors[pivot] = "#ccff00";
    //increment left pointer if the value is less than the pivot
    while (thisData[i] < pivot) {
      chartRef.current.update();
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      i++;
    }

    //decrement right pointer if the value is more than the pivot
    while (thisData[j] > pivot) {
      j--;
    }

    //else we swap.
    if (i <= j) {
      //until i<=j
      let previ = colors[i];
      let prevj = colors[j];
      colors[i] = "#66ff00";
      colors[j] = "#66ff00";
      chartRef.current.update();
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      swap(thisData, j, i);
      swap(labels, j, i);
      colors[i] = previ;
      colors[j] = prevj;
      chartRef.current.update();
      // [items[i], items[j]] = [items[j], items[i]];
      i++;
      j--;
    }
    colors[pivot] = prevCol;
    chartRef.current.update();
  }

  //return the left pointer
  return i;
};

const quick = async (thisData, left, right, labels, colors, chartRef, speed) => {
  let ind = -69;

  if (thisData.length > 1) {
    ind = await partition(thisData, left, right, labels, colors, chartRef, speed); //get the left pointer returned
  }
  if (left < ind - 1) {
    //more elements on the left side
    await quick(thisData, left, ind - 1, labels, colors, chartRef);
  }
  if (ind < right) {
    //more elements on the right side
    await quick(thisData, ind, right, labels, colors, chartRef);
  }

  return thisData;
};

export default quick;
