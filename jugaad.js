let no_of_post = 6

let delay_in_ms = 15000 

setInterval(function(){ 
    fetch("./post.json")
    .then(response => {
       return response.json();
    })
    .then(data => {
        for(let i = 0; i < no_of_post; i++){
            setTimeout(function () {
                document.getElementById('profile_pic').src = data[i]['profile_pic']
                document.getElementById('username').innerText = data[i]['username']
                document.getElementById('username1').innerText = data[i]['username']
                document.getElementById('image').src = data[i]['image']
                document.getElementById('caption').innerText = data[i]['caption']
              }, i*delay_in_ms);
        }
    });    
}, no_of_post*delay_in_ms);