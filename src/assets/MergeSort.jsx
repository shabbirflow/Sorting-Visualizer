const mergeArrays = async (left, right, chartData, labels, colors, chartRef) => {
  let sorted = [];
  while (left.length && right.length) {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 400)
    );
    if (left[0] <= right[0]) {
      sorted.push(left.shift()); //shift removes 1st element & returns removed element
    } else {
      sorted.push(right.shift());
    }
  }
  let newData = [...sorted, ...left, ...right];
  chartData = newData;
  chartRef.current.update();
  return newData;
};

const mergeSort = async (chartData, unsorted, labels, colors, chartRef) => {
    if(!unsorted){
        unsorted = chartData;
    }
  const mid = unsorted.length / 2;
  if (unsorted.length <= 1) {
    return unsorted;
  }
  const leftSubArray = unsorted.splice(0, mid);
  chartRef.current.update();
  const sortedArray = await mergeArrays(
    await mergeSort(chartData, leftSubArray, labels, colors, chartRef),
    await mergeSort(chartData, unsorted, labels, colors, chartRef),
    chartData,
    labels,
    colors,
    chartRef,
  );
  chartData = sortedArray;
  chartRef.current.update();
  return sortedArray;
};

const swap = (arr, i, j) => {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
};

export default mergeSort;