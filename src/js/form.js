// for form page submit, get dog id and set as adopted.
import DataSource from "./data-source";
import { getQueryVariable } from "./utils";

// get the dog that being adopted
let petId = getQueryVariable("pet-id");

// let dataSource = new DataSource();
// dataSource.init();

let formData = { id: petId }
// bind with information input
// for instance, if you are add information of a dog's age, add onChange event on input html with function modifyData("age")
export const modifyData = (attri) => {
    let target = attri;
    return (val) => {
        formData[target] = val;
    }
}

// export const submitHandler = (e)=>{
//     e.preventDefault()
//     // logic
//     console.log(1)
// }
// bind with submit button
// if you are bind in form.html, please add event listener with function submitForm("adopt")
// if you are bind in add-dog.html, please add event listener with function submitForm("add")
export const submitForm = async (action) => {
    let dataSource = new DataSource()
    await dataSource.init()
    let datasource = dataSource;
    switch (action) {
        case "add":
            // add a dog
            dataSource.addDog(formData);
            break;
        case "adopt":
            // adopt a dog
            dataSource.adoptDog(formData);
            break;
    }

}



const submitHandler = async (e) => {
    e.preventDefault()
    localStorage.setItem("name","Dear Customer")
    window.location.replace("/pages/order-confirm.html")
    // let age = document.getElementById("age")
    // let gender = document.getElementById("gender")
    // let breed = document.getElementById("breed")
    // let size = document.getElementById("size")
    // let imageUrl = document.getElementById("ImageUrl")
    // let personality = document.getElementById("personality")
    // let specialgift = document.getElementById("specialgift")
    // let dataSource = new DataSource();
    // let data = await dataSource.init();
    // let dog = {}
    // dog.age = age.value
    // dog.size = size.value
    // dog.gender = gender.value
    // dog.breed = breed.value
    // dog.imageUrl = imageUrl.value
    // dog.personality = personality.value
    // dog.specialgift = specialgift.value
    // dog.isAdopted = "false"
    // let _id = 1 + data.dogs[data.dogs.length - 1].id
    // dog.id = _id
    // data.dogs[data.dogs.length] = dog;
    // console.log(data.dogs)
    // localStorage.setItem("data", JSON.stringify(data))
    // console.log(localStorage.getItem("data"))
    // window.location.replace("/pages/order-confirm.html")
}
let submitBtn = document.querySelector("#submit")
submitBtn.addEventListener("click", submitHandler)