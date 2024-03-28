let url = "http://127.0.0.1:5000/api/students";

const btn = document.getElementById("btn");

let tableBody = document.querySelector("#dataTable tbody");

btn.addEventListener('click', getData);

async function getData() {
    let response = await fetch(url);
    let data = await response.json();

    tableBody.innerHTML = '';

    data.forEach((element) => {
        let row = document.createElement('tr');
        let idCell = document.createElement('td');
        let nameCell = document.createElement('td');
        let cityCell = document.createElement('td');

        idCell.textContent = element.id;
        nameCell.textContent = element.name;
        cityCell.textContent = element.city;

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(cityCell);

        tableBody.appendChild(row);
    });
}
