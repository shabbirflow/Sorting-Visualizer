const swap = (arr, i, j) => {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
};

const insertionSort = async (thisData, labels, colors, chartRef, speed) => {
  const delay = 600 - speed;
  const n = thisData.length;
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      let prevTemp = colors[j];
      let prevTemp1 = colors[j + 1];
      colors[j] = "#ccff00";
      colors[j + 1] = "#ccff00";
      chartRef.current.update();
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      if (thisData[j] > thisData[j + 1]) {
        swap(thisData, j, j + 1);
        swap(labels, j, j + 1);
        colors[j] = prevTemp1;
        colors[j + 1] = prevTemp;
        chartRef.current.update();
      } else {
        colors[j] = prevTemp;
        colors[j + 1] = prevTemp1;
        chartRef.current.update();
      }
    }
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
  }
};

export default insertionSort;
