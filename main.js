const {matrixProduct, sumOfMatrices, sumOfEachRow} = require("./utils.js")

 mat1 = [
     [1,2],
     [3,4]
 ]
 mat2 = [
     [5,6],
     [7,8]
 ]
console.log(matrixProduct(mat1, mat2));
console.log(sumOfMatrices(mat1, mat2));
console.log(sumOfEachRow(mat1));