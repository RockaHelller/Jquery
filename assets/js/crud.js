"use strict"

let name = document.querySelector(".name-input");
let surname = document.querySelector(".surname-input");
let age = document.querySelector(".age-input");
let createButton = document.querySelector(".create-button");
let tableBody = document.querySelector("tbody");
let id = 0;
let updateButton = document.querySelector(".update-button")
let deleteAllButton = document.querySelector(".delete-all")

let dataBase = JSON.parse(localStorage.getItem("database")) || [];

dataBase.forEach(item => {
  tableBody.innerHTML += `<tr>
    <td>${item.number}</td>
    <td>${item.stuName}</td>
    <td>${item.stuSurname}</td>
    <td>${item.stuAge}</td>
    <td><i class="fa-solid fa-trash" style="color: red;"></i></td>
  </tr>`;

  id = item.number + 1;
});

createButton.addEventListener("click", function (e) {
  e.preventDefault();
  let nameInput = name.value;
  let surnameInput = surname.value;
  let ageInput = age.value;
  let exists = false;

  dataBase.forEach(item => {
    if (nameInput == item.stuName && surnameInput == item.stuSurname && ageInput == item.stuAge) {
      alert("Already exists")
      exists = true;
      return;
    }
  });

  if (!exists && name.value.length != 0 && surname.value.length != 0 && age.value.length != 0) {
    tableBody.innerHTML += `<tr>
      <td>${id}</td>
      <td>${nameInput}</td>
      <td>${surnameInput}</td>
      <td>${ageInput}</td>
      <td><i class="fa-solid fa-trash" style="color: red;"></i></td>
    </tr>`;

    dataBase.push({
      number: id,
      stuName: nameInput,
      stuSurname: surnameInput,
      stuAge: ageInput
    });

    localStorage.setItem("database", JSON.stringify(dataBase));
    id++;

    name.value = ""
    surname.value = ""
    age.value = ""

    let deleteButton = document.querySelectorAll(".fa-trash")

    deleteButton.forEach(deletItem => {
      deletItem.addEventListener("click", function (e) {
        let id = this.parentNode.parentNode.firstElementChild.innerText
        let students = JSON.parse(localStorage.getItem("database"))
        console.log(students);
        let result = students.filter(m => m.number != id)
        localStorage.setItem("database", JSON.stringify(result))
        this.parentNode.parentNode.remove()
      })
    });
  }
});

updateButton.addEventListener("click", function (e) {
  let idChange = document.querySelector(".id-change")
  let idName = document.querySelector(".name-change")
  let idSurname = document.querySelector(".surname-change")
  let idAge = document.querySelector(".age-change")

  let alertDisplay = false;
  let checkIsTrue = false;
  dataBase.forEach(item => {
    if (item.number == idChange.value && idChange.value.length != 0) {
      if (idName.value.length == 0) {
        item.stuName == item.stuName
      } else {
        item.stuName = idName.value
      }

      if (idSurname.value.length == 0) {
        item.stuSurname == item.stuSurname
      } else {
        item.stuSurname = idSurname.value
      }

      if (idAge.value.length == 0) {
        item.stuAge == item.stuAge
      } else {
        item.stuAge = idAge.value
      }

      tableBody.innerHTML = "";
      dataBase.forEach(item => {
        tableBody.innerHTML += `<tr>
          <td>${item.number}</td>
          <td>${item.stuName}</td>
          <td>${item.stuSurname}</td>
          <td>${item.stuAge}</td>
          <td><i class="fa-solid fa-trash" style="color: red;"></i></td>
          </tr>`;
      });

      localStorage.setItem("database", JSON.stringify(dataBase));
      checkIsTrue = true
      idChange.value = ""
      idName.value = ""
      idSurname.value = ""
      idAge.value = ""
    }
  })

  if (!checkIsTrue && !alertDisplay) {
    alert("Please enter correctly")
    alertDisplay = true

  }
})

deleteAllButton.addEventListener("click", function (e) {

  localStorage.clear("database")
  id = 0;
  tableBody.innerHTML = ""
})






let deleteButton = document.querySelectorAll(".fa-trash")

deleteButton.forEach(deletItem => {
  deletItem.addEventListener("click", function (e) {
    let id = this.parentNode.parentNode.firstElementChild.innerText
    let students = JSON.parse(localStorage.getItem("database"))
    console.log(students);
    let result = students.filter(m => m.number != id)
    localStorage.setItem("database", JSON.stringify(result))
    this.parentNode.parentNode.remove()
  })
});
