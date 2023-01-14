const $results = document.getElementById('results')
const $name = document.getElementById('name')
const fetchApi = country => {
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
        .then(res => res.json())
        .then((data) => {
            //console.log("::::::::::::::::::::::::::::");
            console.log(data[0]);
            //console.log(data[0].name.common);
            //console.log(data[0].capital[0]);
            //console.log(data[0].fifa);
            //console.log(data[0].altSpellings[2]); //republica 
            //console.log(data[0].flags.svg);

            // console.log(data[0].region); //region
            // console.log(data[0].subregion); //sub region
            // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            // console.log(data[0].currencies[Object.keys(data[0].currencies)].symbol);
            $results.innerHTML = `
            
            <img src="${data[0].flags.svg}" class="flag-img">
            <h6>País: ${data[0].name.common} (${data[0].fifa})</h6>

            <div class="todo">
                <span><strong>Capital: </strong>${data[0].capital[0]}</span> <br>
                <span><strong>Region: </strong>${data[0].region}</span><br>
                <span><strong>Subregion: </strong>${data[0].subregion}</span><br>
                <span><strong>Moneda: </strong>${data[0].currencies[Object.keys(data[0].currencies)].name} - (${data[0].currencies[Object.keys(data[0].currencies)].symbol})</span>
            </div>
            
            `
            $name.innerHTML = `<h5>${data[0].altSpellings[2]}</h5>`
        })
        .catch(err => $name.innerHTML = `<h5>Lo siento ocurrió un error, revisa nuevamente</h5>`)
}

const $search = document.getElementById('search-btn')
const $input = document.getElementById('country-inp')


$search.addEventListener('click', async (e) => {
    e.preventDefault()
    const { value } = $input


    if (!value) return

    await fetchApi(value)
})


