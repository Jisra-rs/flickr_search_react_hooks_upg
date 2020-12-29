import React, {Component} from 'react';


const URL_FLICKR_REST = "https://api.flickr.com/services/rest/?method=flickr.photos.search";
const APP_API_KEY = "711fee89a5c0c9b86b046e640eb1ec3b";
const URL_FETCH = URL_FLICKR_REST + '&api_key=' + APP_API_KEY + '&text=napa&format=json&nojsoncallback=1';


class HomeContainer extends Component{
    constructor(){
        super()

        fetch(URL_FETCH)
            // Promesas
            .then(data => data.json())
            .then(pictures => {
                // _picturesResult = pictures.photos;
                console.log(pictures);
            });
    }
    render(){
        return (
            <div id="_homeContainer"></div>
        )
    }
}

export default HomeContainer;