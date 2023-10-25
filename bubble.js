async function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1 && !stopSortingFlag; i++) {
        for (let j = 0; j < n - i - 1 && !stopSortingFlag; j++) {
            if (arr[j] > arr[j + 1]) {
                await sleep(100); // Delay for visualization
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                bars_of_array(arr);
            }
        }
    }
}