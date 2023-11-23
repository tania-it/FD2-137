const element = document.querySelector('#inp');

element.addEventListener('keydown', function (event) {
//    console.log(event);
   
  const message = '<code>' + event.key + '</code>'
    const value = event.target.value

    if (event.key === 'Enter' && value.length > 0) {
        const messageElement = document.createElement('div')

        messageElement.classList.add(message)
        messageElement.innerText = value
        document.querySelector('.result').appendChild(messageElement)
        event.target.value = ''
    }

    document.querySelector('.event').innerHTML = message; 
});
