function loadJSON(file){
  return new promise((resolve,reject)=>{
    return fetch(file).then(response=>{
    if(response.ok){
      resolve(response.json());
    }  else{
      reject(new Error('error'));
    }
    })
  })
}

var fetchedData=loadJSON("data.json");
fetchedData.then(data=>{
  console.log(data);
  career(data.career);
})
var child2=document.queryselector("#child2")
function career(car){
  var p=document.createElement("p");
  p.textContent=car.info;
  child2.appendChild(p);

}
