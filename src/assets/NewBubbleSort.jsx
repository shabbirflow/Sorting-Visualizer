import React, { useState } from "react";

export default function NewBubbleSort() {
  const [array, setArray] = useState([8, 6, 3, 2, 8, 5, 1, 19]);

  const sortArray = () => {
    const unsortedArray = [...array];
    const n = unsortedArray.length;
    return new Promise((resolve) => {
      for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          setTimeout(() => {
            if (unsortedArray[j] > unsortedArray[j + 1]) {
              let temp = unsortedArray[j];
              unsortedArray[j] = unsortedArray[j + 1];
              unsortedArray[j + 1] = temp;
              setArray([...unsortedArray]);
            }
          }, 400 * (i + 1) + j * 20);
        }
      }
      setTimeout(() => {
        resolve();
      }, 400 * (n + 1));
    });
  };

  const handleClick = async () => {
    await sortArray();
    console.log("sorting done");
  };

  return (
    <div>
      <button onClick={handleClick}>Sort Array</button>
      <div>{array.join(", ")}</div>
    </div>
  );
}