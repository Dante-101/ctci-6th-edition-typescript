export const mergeSort = (arr: number[]): number[] => {
    if (arr.length <= 1) { return [...arr] }
    return mergeSortSubArr(arr, 0, arr.length - 1)
}

const mergeSortSubArr = (arr: number[], low: number, high: number): number[] => {
    if (low == high) { return [arr[low]] }
    if (low > high) { return [] }
    if (low == high - 1) {
        if (arr[low] > arr[high]) {
            return [arr[high], arr[low]]
        } else {
            return [arr[low], arr[high]]
        }
    }
    const mid = Math.floor((low + high) / 2)
    const sortedLowerArr = mergeSortSubArr(arr, low, mid)
    const sortedHigherArr = mergeSortSubArr(arr, mid + 1, high)
    return mergeArr(sortedLowerArr, sortedHigherArr)
}

const mergeArr = (arr1: number[], arr2: number[]): number[] => {
    if (arr1.length == 0) { return arr2 }
    if (arr2.length == 0) { return arr1 }

    const mergedArr: number[] = []
    for (let i = 0, j = 0; i < arr1.length || j < arr2.length;) {
        if (arr1[i] && arr2[j]) {
            if (arr1[i] == arr2[j]) {
                mergedArr.push(arr1[i])
                mergedArr.push(arr2[j])
                ++i
                ++j
            } else if (arr1[i] > arr2[j]) {
                mergedArr.push(arr2[j])
                ++j
            } else {
                mergedArr.push(arr1[i])
                ++i
            }
        } else if (arr1[i]) {
            mergedArr.push(arr1[i])
            ++i
        } else {
            mergedArr.push(arr2[j])
            ++j
        }
    }
    return mergedArr
}