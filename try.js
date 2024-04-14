present = [3,0,1]
n = present.length;
res = (n*(n+1))/2;
sum = 0
for(i=0;i<n;i++){
    sum +=present[i]
}
console.log(res-sum)