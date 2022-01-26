
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
    if (arguments.length == 0) {
        return [];
      }
      else {
    
    let newArr = [];

    for(let i =0; i < matrix.length; i++) {
    for (let k = 0; k<matrix[i].length; k++) {
    
    if (i%2 != 0) {
        matrix[i].sort(function(a, b) {
      return b - a;
    });
    newArr.push(matrix[i][k])
    
    
    }
    else {
    
    
    
    newArr.push(matrix[i][k])
    }
    }
    }
    return newArr
}
}
