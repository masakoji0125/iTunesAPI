const Card = ({ src, title,name,url }) => `
    <div class="col-4 mb-5">
        <a href="${url}" target="_blank">
            <dib class="card">
                <img src="${src}" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="name">${name}</p>
                    <button>Detail</button>
                </div>
            </dib>
        </a>
    </div>

`;



$('#button-addon2').on('click', () => {

    $('#results').empty();

    const ward = $('#search-word').val();
    // alert(ward)
    const params = {
        lang: 'ja_jp',
        entry: 'music',
        const: 'music',
        country: 'jp',
        term: ward,
        limit: 50,
        // term: encodeURIComponent(),
        // country: 'jp',
        // media: 'music',
        // limit: 50,
        // lang: 'ja_jp',
    };


    $.ajax({
        url: 'https://itunes.apple.com/search',
        type: 'GET',
        data: params,
        dataType: 'jsonp',

    }).done((response) => {
        console.log(response.results[0].collectionCensoredName)
        console.log(response)
        console.log(response.results[0].artworkUrl100)
        // alert(ward)
        // let img = response.
       

        for(let i = 0; i < response.results.length; i++){
            let title = response.results[i].collectionCensoredName
            let src = response.results[i].artworkUrl100
            let name = response.results[i].artistName
            let url = response.results[i].collectionViewUrl

            $('#results').append(Card({  title: title, name: name, src: src, url: url,
            }));


            console.log(1)
        }
       

        
        
    }).fail((error) => {
        console.log(error)
    })
})