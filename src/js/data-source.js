export default class DataSource{
    constructor(){
        this.data = {};
        this.initialized = false;
    }
    async init(){
        
        if(localStorage.getItem("data") !== "null"){
            //we have the data in localstorage, so we need to get the stored data
            this.data = JSON.parse(localStorage.getItem("data"));
        }else{
            //current client not fetched the json yet
            this.data.dogs = await fetch("../json/general.json").then(res => res.json());
            localStorage.setItem("data",JSON.stringify(this.data))
        }
        this.initialized = true;
    }
    async getData(){
        if(this.initialized){
            await this.init();
        }
        return this.data;
    }
    async getDogs(){
        let data = await this.getData();
        return data.dogs;
    }

}