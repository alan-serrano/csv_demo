/**
 * @callback onRead This function is executed during reading
 * @param {any} cell Every cell of csv except for headers
 */

/**
 * @typedef {Object} param0
 * @property {onRead} onRead
 * @property {function} beforeRead This function is executed before csv is processed
 * @property {function} afterRead This function is executed after the csv was processed
 */
/**
 * @callback csvTransform
 * This function get a csv file and returns its values, there are three hooks, onRead, beforeRead and afterRead,
 * these hooks do not convert the result
 * @param {param0} param0
 * @returns {Promise}
 */

export {};
