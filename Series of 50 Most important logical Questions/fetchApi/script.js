let tbody = document.querySelector("#table-data tbody");

async function populate() {
  let response = await fetch("https://reqres.in/api/users?page=2");

  let res = await response.json();
  let result = res.data;
  console.log(result);

  tbody.innerHTML = "";

  result.map((item) => {
    let row = document.createElement("tr");

    row.innerHTML = `<td style="border-right: 1px solid #000">${item.id}</td><td style="border-right: 1px solid #000" >${item.email}</td><td >${item.first_name}</td><td style="border-right: 1px solid #000">${item.last_name}</td><td ><img style="border-radius:70px" src="${item.avatar}" alt="Image"></td> `;

    tbody.appendChild(row);
  });
}

populate();

// {"page":2,
// "per_page":6,
// "total":12,
// "total_pages":2,
// "data":[
//     {"id":7,
//     "email":"michael.lawson@reqres.in",
//     "first_name":"Michael",
//     "last_name":"Lawson",
//     "avatar":"https://reqres.in/img/faces/7-image.jpg"
// }],
// }
