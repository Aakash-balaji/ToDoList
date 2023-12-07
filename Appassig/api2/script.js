

// let btn = document.querySelector('#apiButton')

// btn.addEventListener('click', function(){

//     apiCall('https://dummyjson.com/carts/1')
   
// })

function apiCall(url){

    xhr = new XMLHttpRequest()
    xhr.responseType = 'json'

    let promise = new promise(function(resolve, reject){

        xhr.onload() = function(){
            resolve(xhr.response);
            
        }
        xhr.error() = function(){
            reject('there is an error')
        }
    
    })
    
    xhr.open('GET', url)
    xhr.send()

    return promise

}


    fetch("https://dummyjson.com/carts/1")

        .then((data) => {
            // console.log('hello');
            console.log(data);
            return data.json()
        })
        .then((data)=>{
            console.log(data);
            return data
        })
        .then((data)=>{
            // console.log(data.products[0]);
           return data.products  
        })
        .then((data)=>{
            // console.log(data);
          let t = data.reduce((s, n)=> s + n.price,0)

          return t
           
          })

          .then((data)=>{
            console.log(data);
          })
           
       
        