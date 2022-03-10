/**
 * Проверка массива на монотонность
 * Например:
 *  isMono([0, 1, 5, 9, 15]) вернет true
 *  isMono([0, 1, 1]) вернет true
 *  isMono([0, 1, 0]) вернет false
 * @param {Array} values массив значений
 * @returns {boolean} монотонность
 */
export const isMono = (values) => {
    // Не массив -> false
    if (!Array.isArray(values)) {
        return false;
    }

    // Длина 1 или 0 -> true
    if (values.length <= 1) {
        return true;
    }

    const isAscending = values[0] < values[values.length - 1] ? true : false;

    return values.every((item, index) => {
        if (!values[index + 1] ||
            !isAscending && item >= values[index + 1] ||
            isAscending && item <= values[index + 1]) {
            return true;
        }
        return false;
    });

}
