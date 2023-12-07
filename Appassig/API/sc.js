
let btn = document.querySelector('#apiButton')

btn.addEventListener('click', function(){
    
    apiCall('https://dummyjson.com/users')
    // console.log(xhr.response);
});

    function apiCall(url){

    let xhr = new XMLHttpRequest()
    // console.log(xhr);
    xhr.responseType = `json`

    
    xhr.onload = function(){
        console.log('API Response:', xhr.response);
        users(xhr.response)
    };

    xhr.open('GET', url)
    xhr.send()

   
}


function users(responseData) {
    let div = document.querySelector('.user-d');
    div.innerHTML = ""; // Clear previous content

        responseData.users.forEach(function(user) {
            let ul = document.createElement('ul');
            ul.innerHTML = `<li>${user.firstName} ${user.maidenName} ${user.lastName}</li>
                            <li>${user.age}</li> 
                            <span></span>`;
            div.appendChild(ul);
        });
    
}

