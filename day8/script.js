const image = document.getElementById("dogImage");
const button = document.getElementById("btn");

async function getDogImage() {

    try {

        const response = await fetch("https://dog.ceo/api/breeds/image/random");

        const data = await response.json();

        image.src = data.message;

    } 
    catch (error) {

        alert("Something went wrong!");

        console.log(error);

    }

}

button.addEventListener("click", getDogImage);
getDogImage();

