arr = [[1,2,5],[3,5,5]]
out = [];
count = 0
for(i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
        if(arr[i][j]===5){
            count++
        }
    }
}console.log(count)