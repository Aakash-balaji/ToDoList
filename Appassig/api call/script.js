

let btn = document.querySelector('.btn');
let  input = document.querySelector('#Id');
let forId = document.querySelector('.forId')
let  inputName = document.querySelector('#name');
let forName = document.querySelector('.forName')


function apiCall(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.onprogress = function () {
        console.log('...processing');
    };

    xhr.onload = function () {
        callback(xhr.response);
    };

    xhr.open('GET', url);
    xhr.send();
}

let div = document.querySelector('.list');

btn.addEventListener('click', function () {
    apiCall('https://dummyjson.com/users', function (data) {
        console.log(data.users);

        data.users.forEach(function (e) {
            let ul = document.createElement('ul'); 
            ul.innerHTML = `<li>${e.firstName}</li>
                            <li>${e.lastName}</li>
                            <li>${e.age}</li> 
                            <p></p>`;

            div.appendChild(ul);
        })

    })

})


forId.addEventListener('click', function () {
    apiCall('https://dummyjson.com/users', function (data) {
        // console.log(data.users);

        let user = data.users.find(function (e) {
            return e.id == input.value;
        });

        // Display user data if found
        if (user) {
            let ul = document.createElement('ul');
            ul.innerHTML = `<li>${user.firstName}</li>
                            <li>${user.lastName}</li>
                            <li>${user.age}</li> 
                            <p></p>`;

            div.innerHTML = ""; // Clear previous content
            div.appendChild(ul);
        } else {
            console.log('User not found');
            div.innerHTML = "User not found";
        }

    })

})
  

forName.addEventListener('click', function () {
    apiCall('https://dummyjson.com/users', function (data) {
        // console.log(data.users);

        let user = data.users.find(function (e) {
            return e.firstName == inputName.value;
        });

        // Display user data if found
        if (user) {
            let ul = document.createElement('ul');
            ul.innerHTML = `<li>${user.firstName}</li>
                            <li>${user.lastName}</li>
                            <li>${user.age}</li> 
                            <p></p>`;

            div.innerHTML = ""; // Clear previous content
            div.appendChild(ul);
        } else {
            console.log('User not found');
            div.innerHTML = "User not found";
        }

    })

})