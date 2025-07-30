const xhr = new XMLHttpRequest();

//we need to wait for a response as responces from server arent instant
//without this response will run before the server responds and the value will be undefined
xhr.addEventListener('load', () => {
    xhr.response
});

xhr.open('GET', 'https://supersimplebackend.dev/documentation');
xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg');
xhr.send();
