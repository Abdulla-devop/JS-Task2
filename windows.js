// obj1 = {name."Person 1" , age 5};
// obj2 = {age:5, name: "Pe"rson 1"};

//changing to json data"
const json ={
        obj1:{name: "Person 1" ,
            age: "5",
          obj2 :{ age : "5",
                  name: "Person1",
}
    
}
}
console.log(json.obj1.obj2.age);

// displaying countries flag

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function (){
       const data = JSON.parse(xhr.response)
       console.log(data);
       console.log(xhr.status);
     for(let i=0; i< data.length; i++){
        console.log("Name :", data[i].name.common);
        console.log("Flag :",data[i].flags.png);
        console.log("Population :",data[i].population);
        console.log("Region :",data[i].region);
        console.log("Sub Region :",data[i].subregion);
     }

};