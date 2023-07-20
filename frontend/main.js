window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApiURL = 'https://getresumecounter-amart.azurewebsites.net/api/GetResumeCounter?code=ULG5XUiyqc0r18Rn2G1gIhWQLiUw1iCdw6P_uq7oomoAAzFulOOHgA==';
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApiURL).then(response =>{
        return response.json()
    }).then(response =>{
        console.log("Website called funtcion API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}