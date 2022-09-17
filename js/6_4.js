function showNumbersSequence(num1,num2){
    // let numbersArr=[]
    for(i=num1;i<=num2;i++){
        // numbersArr.push(i)
        function showAndDelete(){
            console.log(i)
        }
        setTimeout(showAndDelete,[1000])
    }
    // function showAndDelete(arr){
    //     console.log(arr[0]);
    //     arr.shift();
    // }
    // setInterval(showAndDelete,[1000],[numbersArr])
}
showNumbersSequence(2,10)
