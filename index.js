/* 21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
        22) Create an object with properties such name, surname, email
        23) Delete Email from the previously created object
        24) Create an array with 10 strings in it
        25) Print in the console every string in the previous array
        26) Create an array with 100 random numbers in it
        27) Wrote a function to get the MAX and the MIN from the previously created array
        28) Create an array of arrays, in which every array has 10 random numbers
        29) Create a function that gets 2 arrays and returns the longest one
        30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values */
        console.log("EX 22 ")
        let x = "John"
        let y = "Doe"
        console.log(`${x} <> ${y}`)

        console.log("EX 23 ")
        let myDetails = {name:"Rashmi",surname:"Hiremath",email:"rashuafz@gmail.com"}
        console.log(myDetails)

        console.log("EX 24 ")
        let arr = ["rash","pills","hula","rashyaa","handii","shona","bangari","mygirl","avakka","pillu"]

        console.log("EX 25 ")
        console.log(arr)

        console.log("EX 26 ")
          let randomArray = []
         for(let i=0 ;i<=100;i++){
         let randomVariable = Math.round(Math.random()*100)
         console.log(randomVariable)
         randomArray.push(randomVariable)
         } 
         console.log(randomArray)
         
        
        let arr1 = [];

function randomNumber() {
    let num = Math.floor((Math.random() * 100) + 0);
    arr1.push(num);
    console.log(arr1);
}

randomNumber();

console.log("EX 27 ")

console.log(Math.max.apply(Math,randomArray))
console.log(Math.min.apply(Math,randomArray))

console.log("EX 28 ")
randomArray[10]
console.log(randomArray)


console.log("EX 29")
console.log("EX 30")

/* DOM 

        31) Get element with ID "container" from the page
        32) Get every "td" from the page
        33) Create a cycle that prints the text inside every td of the page
        34) Write a function to change the heading of the page
        35) Write a function to add an extra row to the table
        36) Write a function to add the class "test" to each row in the table
        37) Write a function to add a red background to every link in the page
        38) Console log "Page loaded" when the page is correctly loaded
        39) Write a function to add new items to a UL
        40) Write a function to empty a list

         */
        console.log("EX 31")
        document.getElementById("container")

        console.log("EX 32")
        document.getElementsByTagName("td")

        console.log("EX 33")


        console.log("EX 34")
        const changeTheHeading = function(){
         let heading = document.getElementsByTagName(h1).inn
         heading.innerHTML = "thhttgbb"

        }


