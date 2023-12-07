
let btn = document.querySelector('#apiButton')

function apiCall(url, callback){
    let xhr = new XMLHttpRequest()
    console.log(xhr);
    
    xhr.onprogress = ()=>{
        console.log('...processing');
    }
    xhr.responseType = `json`

    xhr.onload = function(){
        callback(xhr.response)
        // console.log('hello');
    }

    xhr.open('GET', url)
    xhr.send()
}

btn.addEventListener('click', function(){
    apiCall('https://dummyjson.com/users',(data)=>{
        console.log(data.users);
        apiCall(`https://dummyjson.com/users/${data.users[1].id}`,(dataID)=>{
            console.log(dataID);
            apiCall(`https://dummyjson.com/users/${dataID.id}/todos`, (todos)=>{
                console.log(todos);
            })
        })
    })
    // console.log(users);
})