

do {
    let a = prompt("Enter your age: ")

    if (parseInt(a) > 18) {
     alert("Yes, you can drive")
    }
    
    else {
        alert("Watch POGO")
    }

    m = prompt("Enter y to play again any other key to terminate the game: ")
}while (m === "y" || m === "Y")
