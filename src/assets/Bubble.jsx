const swap = (arr, i, j) => {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
};

const bubble = async (thisData, labels, colors, chartRef, speed) => {
  const delay = 600 - speed;
  // console.log(delay);
  const n = thisData.length;  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      let prevTemp = colors[j];
      let prevTemp1 = colors[j + 1];
      colors[j] = "#ccff00";
      colors[j + 1] = "#ccff00";
      // console.log("set", j, j+1)
      chartRef.current.update();
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      if (thisData[j] > thisData[j + 1]) {
        swap(thisData, j, j + 1);
        swap(labels, j, j + 1);
        // swap(colors, j, j+1);
        colors[j] = prevTemp1;
        colors[j + 1] = prevTemp;
        chartRef.current.update();
        // console.log("get", j, j+1)
      } else {
        colors[j] = prevTemp;
        colors[j + 1] = prevTemp1;
        chartRef.current.update();
        // console.log("get", j, j+1)
      }
    }
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
  }
  // console.log(n, thisData);
};

export default bubble;
