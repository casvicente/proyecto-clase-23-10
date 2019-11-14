function buscarDiscovery(text) {
    let formData = new FormData();
    let field = document.querySelector('#searchDiscovery')
    formData.append('text', text);
    fetch('/api/v1/search/discovery', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
        .then(response => {
            console.log(response);
            document.querySelector('#informacionDiscovery')
                .innerHTML = response.results[0].text
        })
}

function printClassifier(classifier) {
    let html = "<ul>"
    classifier.classes.forEach(
        clase => {
            html += `<li> Clase: ${clase.score} - ${clase.class}</li>`
        });
    html += '</ul>';
    return html;
}


function reconocerImagen() {
    let formData = new FormData();
    let fileField = document.querySelector('#inputImage');
    let divRespuesta = document.querySelector('#respuestaWatsonVisualRecognition');
    mostrarImagen(fileField);
    formData.append('image', fileField.files[0]);


    fetch('/api/v1/classify/image', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(response => {
            console.log('Success:', response);
            divRespuesta.innerHTML = JSON.stringify(response.result, null, 2);
            classifiers = response.result.images[0].classifiers;
            customClassifier = classifiers.find(c => c.classifier_id == 'DefaultCustomModel_332227269');
            defaultClassifier = classifiers.find(c => c.classifier_id =='default');
           
            customClassifierHtml = printClassifier(customClassifier);
            defaultClassifierHtml = printClassifier(defaultClassifier);


            divRespuesta.innerHTML = `
                <h2>Resultados</h2>
                <br/>
                <br/>
                <h3>Modelo Custom</h3>
                ${customClassifierHtml}
                <h3>Modelo Default</h3>
                ${defaultClassifierHtml}
            ` ;
            return customClassifier.classes[0].class;
        })
        .then(clazz => {
            console.log('JJJJJJ')
            buscarDiscovery(clazz)
        })
        .catch(error => console.error('Error:', error))
}
function mostrarImagen(input) {
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        let imagenPreview = document.querySelector('#imagenPreview');
        reader.onload = function (e) {
            imagenPreview.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}