import DataSource from "./data-source";
import {getQueryVariable} from "./utils";

let petId = getQueryVariable("pet-id");
let dataSource = new DataSource();
async function initPage(){
    await dataSource.init();
    // get detail information
    let dog = dataSource.getDog(petId);
    // get the node to insert
    let node = document.querySelector();
    //TODO: start render

}
initPage()