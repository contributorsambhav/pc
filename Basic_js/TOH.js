const prompt = require('prompt-sync')({sigint : true}) 

function towerOfHanoi(n, fromRod, toRod, auxRod) 
{ 
		if (n == 0) 
		{ 
			return; 
		} 
		towerOfHanoi(n - 1, fromRod, auxRod, toRod); 
		console.log("Move disk " + n + " from rod " + fromRod + 
		" to rod " + toRod); 
		towerOfHanoi(n - 1, auxRod, toRod, fromRod); 
	} 
	var N = prompt("Enter no of disks: ")

	towerOfHanoi(N, 'A', 'C', 'B'); 


