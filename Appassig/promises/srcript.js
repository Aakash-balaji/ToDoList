
let btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
    apiCall('https://dummyjson.com/carts/1')
        .then(data => {
            console.log(data);
            return data;
        })
        .then((data)=>{
            console.log(data.products);
            return data.products
        })
        .then((data)=>{
            let price = data.reduce((a, b) => a + b.price,0)
            return price
        })
        .then((data)=>{
            console.log(data);
        })

        .catch(error => {
            console.error('Error in apiCall:', error);
        });
});

function apiCall(url) {
    
    let pro = new Promise(function (resolve, reject) {

        let api = new XMLHttpRequest();
        api.responseType = 'json';

        api.onload = function () {
          resolve(api.response);
           
        };

        api.onerror = function () {
            reject('Network error');
        };

        api.open('GET', url);
        api.send();
    });

    return pro
}
