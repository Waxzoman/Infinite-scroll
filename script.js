//Unspash API
count = 10;
const apiKey = 'e0oDbFlhOY72cRmTeVIC-ktY4kdd2OgEMJMkt72zxFc'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = response.json();
        console.log(data);
    } catch (e) {
        console.log("We have a problem here", e)
    }
}

//On load
getPhotos();