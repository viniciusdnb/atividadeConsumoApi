   document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('verPiada').addEventListener('click', async function () {
        fetch('https://api.chucknorris.io/jokes/random', {
            method: 'GET'
        })
            .then(result => result.json())
            .then(data => {

                let card = document.getElementById('conteudo');
                
                if (!card.classList.contains('card')) {
                    
                    return criaElemento(data, card );
                }
                
                //remove a class que  da o estilo do elemento
                card.classList.remove('card')
                
                //remove os filhos do elemento
                card.replaceChildren()
                return criaElemento(data, card );

            });

           
    });


    function criaElemento(data, elementoPai) {
        let p = document.createElement('p');
        let img = document.createElement('img');

        p.textContent = data.value;
        img.setAttribute('src', data.icon_url);
        img.setAttribute('alt', 'img chucknorris');
        elementoPai.setAttribute('class', 'card');
        elementoPai.appendChild(img);
        elementoPai.appendChild(p);
    }
})

