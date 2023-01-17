const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities=[];
fetch(endpoint)                                 //using .then we are using promise which promises of giving a data back..
    .then(blob=>blob.json())                        //data is not in JSONN so we turn it into jon using another promise
    .then(data=>cities.push(...data));                //we get a list of 100 cities


   function findMatches(wordToMatch,cities){
    return cities.filter(place =>{
        //here we figure out if the city or state matches with what was searched
        const regex= new RegExp(wordToMatch,'gi')        //gi ->global and insensitive so matches for all evenupper lower case
        return place.city.match(regex)||place.state.match(regex)
    })
   } 

   //In order to seperate the number in the population with commas..
   function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

   function displayMatches(){
     const matchArray=findMatches(this.value,cities);
    const html=matchArray.map(place =>{
    const regex=new RegExp(this.value,'gi');
    //To highlight the words in the searched bar with yellow color
    const cityName=place.city.replace(regex,`<span class ="hl">${this.value}</span>`);
    const stateName=place.state.replace(regex,`<span class ="hl">${this.value}</span>`);

    //To return each city with population as an li in the suggestions ul.
        return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>
  `;
}).join('');
suggestions.innerHTML=html;
}

   const searchInput =document.querySelector('.search');
   const suggestions =document.querySelector('.suggestions');
 
   searchInput.addEventListener('change',displayMatches);
   searchInput.addEventListener('keyup',displayMatches);