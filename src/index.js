module.exports = function towelSort (matrix) { return arguments.length > 0 ? matrix.reduce( (acc, cur, i ) =>{return acc.concat( i % 2 === 0 ? cur : cur.reverse()) }, [] ) : [] }

