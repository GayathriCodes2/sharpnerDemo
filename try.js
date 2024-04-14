arr =[5,7,12,9, 15]
n=arr.length
out = []
for(i=0;i<n;i++){
    count =0;
for(j=0;j<=31;j++){
    if ((arr[i] & (1 << j)) !== 0) {
        count++
    }
}out.push(count);
}
for(let i=0;i<n-1;i++){
    for(j=0;j<=n-i-1;j++){
if(out[j]<out[j+1]){
temp = out[j];
out[j]=out[j+1]
out[j+1]=temp;

temp = arr[j];
arr[j]=arr[j+1]
arr[j+1]=temp;
}
}
}console.log(arr,out)