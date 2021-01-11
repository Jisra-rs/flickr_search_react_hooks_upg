import React, {Component} from 'react';
import HomeHeader from './HomeHeader';
import SearchTool from './SearchTool';
import PicturesResults from './PicturesResults';
import Loader from './Loader';
import { getPicturesBySearch } from '../services/PicturesService';
import PaginationResults from './PaginationResults';

class HomeContainer extends Component{
    constructor(props){
        super(props)

         this.state = {
            pictureArray : [],
            isFetched:  true,
            page: 1,
            lastPage: 0,
            search: '',
            btnIniPagDisable: true,
            btnFinPagDisable: true            
          }; 
    }

    handleSearch = async (search, page) => {
        const responseJson = await getPicturesBySearch(search, page);
        this.setState({ 
            search: search,
            pictureArray : responseJson.photos,
            isFetched: false,
            lastPage: responseJson.photos.pages,
            page: responseJson.photos.page,
            })
            console.log(responseJson.photos.page);
        if (responseJson.photos.page !== 1) {
            this.setState({ 
                btnIniPagDisable: false
                })
        }else{
            this.setState({ 
                btnIniPagDisable: true
                })
        }
        if (responseJson.photos.page !== responseJson.photos.pages) {
            this.setState({ 
                btnFinPagDisable: false
                })
        }else{
            this.setState({ 
                btnFinPagDisable: true
                })
        }
    }

    render(){

        const { isFetched, pictureArray, page , lastPage, search, btnIniPagDisable, btnFinPagDisable } = this.state
        
        return (
            <>
                <HomeHeader/>
                <SearchTool handleSearch={ this.handleSearch } />
                {isFetched ? <Loader /> : <PaginationResults 
                    handleSearch={ this.handleSearch } 
                    page={ page } 
                    lastPage={ lastPage }
                    btnIniPagDisable={ btnIniPagDisable }
                    btnFinPagDisable={ btnFinPagDisable }
                    search={ search } /> }
                {isFetched ? <Loader /> : <PicturesResults pictureArray={ pictureArray } />}
            </>
        )
    }
}

export default HomeContainer;