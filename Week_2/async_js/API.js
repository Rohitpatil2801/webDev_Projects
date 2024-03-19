let URL = "https://cat-fact.herokuapp.com/facts";

const div = document.getElementById('fact');

const btn = document.getElementById('btn');

btn.addEventListener('click', getData);

//// -----------------------------------Fetch API .then----------------------------------------------

function getData(){
    console.log("fetching data...")
    fetch(URL)
    .then((response)=>{
        console.log(response);
        return response.json();
    })
    .then((response)=>{
      console.log(response);
    })
}

//// ---------------------------------Fetch API using async await-----------------------------------------------

// async function getData() {

//     console.log("fetching data...");
//     let response = await fetch(URL);
//     console.log(response);

//     let data = await response.json();
//     console.log(data);

//     div.innerText=data[0].text;
// }

//// ---------------------------------Display List from API-----------------------------------------------

// async function getData() {

//     console.log("fetching data...");
//     let response = await fetch(URL);
//     console.log(response);

//     let data = await response.json();
//     console.log(data);

//     div.innerHTML = '';

//     data.forEach(fact => {
//         const factText = document.createElement('p');
//         factText.innerText = fact.text;
//         div.appendChild(factText);
//     });

// }

//// ----------------------------------------------------------------------------------