const swap = (arr, i, j) => {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
};

const selectionSort = async (thisData, labels, colors, chartRef) => {
  let min;
  const n = thisData.length;
  for (let i = 0; i < n; i++) {
    min = i;
    let tempCol = colors[min];
    colors[i] = '#ccff00';
    chartRef.current.update();
    for (let j = i + 1; j < n; j++) {
      let tempCol2 = colors[j];
      colors[j] = '#ccff00';
      chartRef.current.update();
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 400)
      );
      if (thisData[j] < thisData[min]) {
        min = j;
      }
      colors[j] = tempCol2;
    }
    colors[i] = tempCol;
    if (min !== i) {
      swap(thisData, i, min);
      swap(labels, i, min);
      swap(colors, i, min);
      chartRef.current.update();
    }
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 400)
    );

  }
};

export default selectionSort;
