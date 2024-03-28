let URL = "https://cat-fact.herokuapp.com/facts";
 
const div = document.getElementById('fact');
 
const btn = document.getElementById('btn');
 
btn.addEventListener('click', getData);


const btn2 = document.getElementById('btn2');
 
btn2.addEventListener('click', hideData);


const msgBar=document.getElementById('msg');
 
async function getData() {

    msgBar.innerHTML="Loading..."

    let response = await fetch(URL);

    let data = await response.json();

    msgBar.innerHTML=""
 
    div.innerHTML = '';
 
    data.forEach((fact,index) => {
        const factNo = document.createElement('p');
        const factText = document.createElement('h3');

        factNo.innerText=index+1;
        factText.innerText = fact.text;
        
        div.appendChild(factNo);
        div.appendChild(factText);
    });
 
}

function hideData(){
    div.innerHTML = 'Cat Facts';
}
