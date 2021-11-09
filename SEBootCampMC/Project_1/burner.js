function magicArray(a, b, c){
for(i = 0; i < c.length; i++){
	c[i] = (a[i]+b[i])/2;
}
return c;
}
function printArray(arr){
for(i = 0; i < arr.length; i++){
document.write(arr[i]);
}

}
