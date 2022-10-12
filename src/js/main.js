let http = new XMLHttpRequest();
http.open("get", "json/general.json", true);
http.send();
http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let dogs = JSON.parse(this.responseText);
        let output = "<ul class='x-grid'>";
        for (let item of dogs) {
            // add pet it inside the href attri or you can add event listener refresh with url param
            // use map() with id
            output += `
                <li>
                    <div class="maincontainer">
                        <div class="thecard">
                            <div class="thefront">
                                <img class="theimage" src="${item.imageUrl}" alt="${item.breed}">
                                <a href="https://www.xcdc.gov/tb/topic/basics/default.htm" target="_blank"></a>
                            </div>
                            <div class="theback img-blank">
                                <a href="https://www.cdc.gov/tb/topic/basics/default.htm" target="_blank"></a>
                                <div class="x-info">
                                    <h3>About me!</h3>
                                    <p>My age is: ${item.age} </p>
                                    <p>I am a ${item.sex}  </p>
                                    <p>My size is: ${item.size} </p>
                                    <p>My age is: ${item.personality} </p>
                                    <p>My breed is a ${item.breed} and my speciality is: ${item.special_gift} </p>
                                </div>
                            </div>
                        </div>
                    </div>	
                </li>
            `;
        }
        output += "</ul>"
        document.querySelector(".dogs").innerHTML = output;
    }
} 
/*Todo: 
 * 1. make the function modulized
 * 2. offer interface to operate the dog candidate
*/
console.log("main")

class PetCandidates{
    constructor(){
        //init the dogs list from json, and load the local storage data
        this.dogs = [];
    }
    getDogs(){
        return this.dogs;
    }
    adoptDog(){
        // mark the selected dog is going to be adopted 
    }
}
