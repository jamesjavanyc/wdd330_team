import DataSource from "./data-source.js";
import {getQueryVariable} from "./utils.js";

let petId = getQueryVariable("pet-id");
let dataSource = new DataSource();
async function initPage(){
    await dataSource.init();
    // get detail information
    let dog = dataSource.getDog(petId);
    // get the node to insert
    let image = document.querySelector(".dog-image");
    let name = document.querySelector(".dog-name");
    let description = document.querySelector(".description");
    let dog_sex = document.querySelector(".dog-sex");
    let age = document.querySelector(".dog-age");
    let size = document.querySelector(".dog-size");
    let breed = document.querySelector(".dog-breed");
    let gift = document.querySelector(".dog-gift");
    //TODO: start render



}
initPage()