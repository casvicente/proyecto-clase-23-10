function reconocerImagen() {
    let formData = new FormData();
    let fileField = document.querySelector('#inputImage');
    let divRespuesta = document.querySelector('#respuestaWatsonVisualRecognition');

    formData.append('imagen', fileField.files[0]);


    fetch('/api/v1/classify/image', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(response => console.log('Success:', response))
        .catch(error => console.error('Error:', error))
}