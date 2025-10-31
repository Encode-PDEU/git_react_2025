//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

console.log(a); // 300
// console.log(b);
// console.log(c);



// -----------------------------------------

function one(){
    const username = "rohan"

    function two(){
        const website = "reddit"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

// difference b/w var let const