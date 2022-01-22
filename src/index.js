module.exports = function towelSort (matrix) { return arguments.length > 0 ? matrix.reduce( (acc, cur, i ) =>{return acc.concat( i % 2 === 0 ? cur : cur.reverse()) }, [] ) : [] }


// // ==============================читабельный вариант =========================================
// module.exports = function towelSort (matrix) {
//   let arr = arguments.length > 0 ? matrix : []
//   arr = arr.reduce( (acc, cur, i ) =>{return acc.concat( i % 2 === 0 ? cur : cur.reverse()) }, [] )
//   return arr
// }
