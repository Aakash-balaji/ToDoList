let div = document.querySelector('.apiData')

function display(){
    
let promise = fetch('https://restcountries.com/v2/all')

    .then((data)=>{

        return data.json()
    })
    .then((data)=>{
        console.log(data);
        return data
    })
    .then((data)=>{

        data.map((e)=>{
           

           console.log( e.name);
           console.log(e.capital);
           console.log(e.languages[0].nativeName);
           console.log(e.population);
           console.log('');
      
           let tr = table.insertRow()

           let tdN = tr.insertCell(0)
           let tdC = tr.insertCell(1)
           let tdL = tr.insertCell(2)
           let tdP = tr.insertCell(3)

            tdN.textContent = e.name
            tdC.textContent = e.capital
            tdL.textContent = e.languages[0].nativeName
            tdP.textContent = e.population

            
       })
       
       
     
    })

    let thN = document.createElement('th')
    let thC = document.createElement('th')
    let thL = document.createElement('th')
    let thP = document.createElement('th')
    let table = document.createElement('table')
    let tr = document.createElement('tr')

    thN.innerHTML = 'Name of country'
       tr.appendChild(thN)
   
       thC.innerHTML = 'capital'
       tr.appendChild(thC)
   
       thL.innerHTML = 'languages'
       tr.appendChild(thL)
   
       thP.innerHTML = 'population'
       tr.appendChild(thP)
   
       table.appendChild(tr)
       div.appendChild(table)
   
    return promise
}

// display()
  
let btn = document.querySelector('.forData')
btn.addEventListener('click', function(){

    display()
    
})



// for the largest countrys by name 

// let but = document.querySelector('.largCoun')

// function displayData(){

//     let  countrys = fetch('https://restcountries.com/v2/all')

//         .then((data)=>{
//            return data.json()
//         })
//         .then((data)=>{
//             console.log(data);
//             return data
//         })
//         .then((data)=>{
//             data.map((e)=>{
//                 // console.log(e.name);
//                 // console.log(e.area);
//                 // console.log();

//                 // let country = e.name
//                 // let array = e.area
//                 // console.log(country);
//                 // console.log(array);
//                 // console.log('');

//                 // let country = e.name
//                 // let array = e.area
//                 // lar = [country,array]
//                 // console.log(lar);
//                 // gest = lar.sort()
//                 // console.log(country);
//                 // console.log(array);
//                 // console.log(gest);
//                 // console.log('');


//                 //  let array = e.area
//                 //  lar = array.sort()
//                 //  console.log(array);
//                 //  console.log(lar);
//                 //  console.log('');

//             })

//         })
//         // .then((data)=>{
//         //     data.sort(data)
//         //     console.log(data);

//         // })
//     return countrys

// }

// displayData()

/////////////////////////////////////////////////
/////////////// secound attempt for the largest counrtry 
let container = document.querySelector('.largCoun')

function displaycount(){

    let largestcoun = fetch('https://restcountries.com/v3.1/all')

    .then(response => response.json())
    .then((data)=>{
        // console.log(data);
        let country = data.sort((a,b)=> b.area - a.area)
        let topcoun = country.slice(0,10)
        console.log(topcoun);

        topcoun.forEach(e => {
            let tr = document.createElement('tr')
            tr.innerHTML = ` <td>${e.name.common}</td>
                             <td>${e.area}</td> `
            table.appendChild(tr)
            // container.appendChild(table)

        });
        // console.log(country);

        // console.log(topcoun);

        // data.map((e) => {
        //     console.log(e.name.common)
        //     console.log(e.area)
        //     console.log('');

        //     // let topcoun = e.name.slice(0,1)
        //     // console.log(topcoun);

        // })
       
    })

    let table = document.createElement('table')
    let tr = document.createElement('tr')
    let td = document.createElement('th')
    let td1 = document.createElement('th')

    td1.innerHTML = `<td>Top 10 largest countrys</td>`
    td.innerHTML = `<td>area</td>`
    
    // td.innerHTML = 'Top 10 largest countrys'
    // td.innerHTML = 'area'
    // td.textContent = 'area'

   
    
    tr.appendChild(td1)
    // table.appendChild(tr)
    // container.appendChild(table)
    tr.appendChild(td)
    table.appendChild(tr)
    container.appendChild(table)
    
    

    return largestcoun
}

// displaycount()

let area = document.querySelector('.area')

area.addEventListener('click', function(){

    displaycount()
})


    
// total number of languages in the world

let totallang = document.querySelector('.total')

function totalCoun(){

    let lang = fetch('https://restcountries.com/v3.1/all')

    .then(response => response.json())
    .then((data)=>{
        console.log(data);
        return data 
    })
    .then((data)=>{

        let allLanguages = new Set();

            // Iterate over each country
            data.forEach((e) => {
                // Check if the country has a 'languages' property
                if (e.languages) {
                    // Iterate over the properties of the 'languages' object
                    Object.keys(e.languages).forEach((language) => {
                        allLanguages.add(e.languages[language]);
                    });
                }

                
            });
           
            console.log(allLanguages.size);

            numlang = allLanguages.size

            let langnum = document.createElement('h2')
            
            langnum.innerHTML = 'Total number of languages = '+numlang
            totallang.appendChild(langnum)


    })

    return lang
}

totalCoun()