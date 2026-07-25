function stringChop(str, size) {
  // your code here
	let ans = [];
	let count = 0;
	let s = "";
	for(let i = 0; i < str.length; i++) {
		if(count < 5) {
			s += str[i];
			count++;
		} else {
			count = 0;
			ans.push(s);
			s = "";
		}
	}
	if(s.length > 0) {
		ans.push(s);
	}
	return ans;
}

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
