"use strict";
const feature = document.getElementById('feature');
const overview = document.getElementById("overview");
const spec = document.getElementById("spec");
const featureClass = document.querySelector('.features');
const overviewClass = document.querySelector('.overview');
const specClass = document.querySelector('.spec');
console.log(specClass)

console.log(feature)

const accordian = (e)=>{
    console.log(e.target.id);
    let target = e.target.id;
    if(target === "overview"){
        featureClass.classList.add('hidden');
        overviewClass.classList.remove('hidden');
        specClass.classList.add('hidden');
    }
    else if(target === "spec"){
      specClass.classList.remove('hidden');
      featureClass.classList.add('hidden');
     overviewClass.classList.add('hidden');
    }
    else{
    featureClass.classList.remove('hidden');
    overviewClass.classList.add('hidden');
    specClass.classList.add('hidden');

    }
}

feature.addEventListener("click",accordian);
overview.addEventListener("click",accordian);
spec.addEventListener('click', accordian);
