async function fetchData() {
    try {
        const response = await fetch('https://icanhazdadjoke.com/slack');
        const data = await response.json()
        return data;
    } catch (error) {
        alert("Error: " +  error);
    }

}

async function displayData(){
    const data = await fetchData();
    const jokeText = data.attachments[0].text;
    const jokeElement = document.getElementById('jokeElement');

    jokeElement.textContent = jokeText;
}
displayData();