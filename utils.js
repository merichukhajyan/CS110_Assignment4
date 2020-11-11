function matrixProduct(mat1, mat2) {
    let result = [];
    for (let i = 0; i < mat1.length; i++) {
        result[i] = [];
        for (let j = 0; j < mat2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < mat1[0].length; k++) {
                sum += mat1[i][k] * mat2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}




function sumOfMatrices(mat1, mat2) {
    let result = [];
    result = new Array (mat1.length);
    for( let i = 0; i < result.length; i++){
        result [i] = new Array (mat1[i].length);
        for ( let j = 0; j < result[i].length;j++){
            result[i][j] = mat1[i][j] + mat2[i][j];
        }
    }
    return result;
    
    }
    

    //finding the sum of each row in a matrice
    
    function sumOfEachRow(mat1) {
       let array = [];
        for ( let row = 0; row < mat1.length; ++row) {
          array[row] = SumOfArray(mat1[row]);
        }
        return array;
    }
   
    function SumOfArray (array) {
        let sum = 0;
        for (let i = 0; i < array.length; ++i){
            sum += array[i];
        }
        return sum;
    }

    module.exports = {
        matrixProduct, sumOfMatrices, sumOfEachRow
    };



    
