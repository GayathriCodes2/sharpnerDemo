arr = 5
count =0;
for(j=0;j<=31;j++){
    if ((arr & (1 << j)) !== 0) {
        count++
    }
}console.log(count)