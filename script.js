let array = generateRandomArray(20);
let stopSortingFlag = false; // Flag to stop sorting

function generateRandomArray(size) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() *100) + 1);
    }
    return array;
}
function resetArray() {
    array = generateRandomArray(20);
    bars_of_array(array);
    stopSortingFlag = false;
    document.getElementById('startButton').disabled = false;
    document.getElementById('stopButton').disabled = true;
}
function bars_of_array(array) {
    const container = document.getElementById('container');
    container.innerHTML = '';
    for (const num of array) {
        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${num * 4}px`;
        container.appendChild(bar);
    }
}

function stopSorting() {
    stopSortingFlag = true;
    document.getElementById('stopButton').disabled = true;
}

function startSorting() {
    document.getElementById('startButton').disabled = true;
    document.getElementById('stopButton').disabled = false;
    stopSortingFlag = false;

    const algorithm = document.getElementById('algorithmSelect').value;
    if (algorithm === 'bubbleSort') {
        bubbleSort(array).then(() => {
            document.getElementById('startButton').disabled = false;
            document.getElementById('stopButton').disabled = true;
        });
    } else if (algorithm === 'mergeSort') {
        mergeSort(array).then(result => {
            array = result;
            document.getElementById('startButton').disabled = false;
            document.getElementById('stopButton').disabled = true;
        });
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}