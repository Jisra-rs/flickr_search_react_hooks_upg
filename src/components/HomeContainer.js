import React, {Component} from 'react';
import HomeHeader from './HomeHeader';
import SearchTool from './SearchTool';
import { getPicturesBySearch } from '../services/PicturesService';

class HomeContainer extends Component{
    constructor(props){
        super(props)

         this.state = {
            pictureArray : [],
            isFetched:  true
          }; 
    }

    handleSearch = async (search) => {
        console.log(search);
        const responseJson = await getPicturesBySearch(search);
        this.setState({ 
            pictureArray : responseJson.photos,
            isFetched: false
            })
            console.log(this.state.pictureArray);
    }

    render(){
        const { isFetched, pictureArray } = this.state
        return (
            <>
                <HomeHeader/>
                <SearchTool handleSearch={ this.handleSearch } />
            </>
        )
    }
}

export default HomeContainer;