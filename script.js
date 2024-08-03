
const input=document.getElementById("input");
const btn=document.getElementById("btn");
const nameRegion=document.getElementById("nameRegion");
const localTime=document.getElementById("localTime");
const temp=document.getElementById("temp");
const condition=document.getElementById("condition");

async function findweather(city){
const promise= await fetch(`http://api.weatherapi.com/v1/current.json?key=c3724c5ac0f14cd29e7223304240208&q=${city}&aqi=no`);
 return  await promise.json();
}

btn.addEventListener("click", async ()=>{
    const cityName=input.value;
    const cityData= await findweather(cityName);
    nameRegion.innerText=`${cityData.location.name}, ${cityData.location.region} - ${cityData.location.country}`
    localTime.innerText=`${cityData.location.localtime}`
    temp.innerText=`${cityData.current.temp_c}`
    condition.innerText=`${cityData.current.condition.text}`
})









