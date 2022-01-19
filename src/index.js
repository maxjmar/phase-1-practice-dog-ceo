console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl).then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data.message)
    data.message.forEach(element => {
        console.log(element)

    });
})



// note

//DOM Render Functions
function renderImage(image) {
    //Build Image
    let dog = document.createElement('li')
}

//Add image to DOM
//document.querySelector('#dog-image-container').appendChild(dog)