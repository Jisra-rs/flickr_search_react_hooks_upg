import React, {useState} from 'react';
import HomeHeader from './HomeHeader/HomeHeader';
import SearchTool from './SearchTool/SearchTool';
import PicturesResults from './PicturesResults/PicturesResults';
import Loader from './Loader';
import { getPicturesBySearch } from '../services/PicturesService';
import PaginationResults from './PaginationResults/PaginationResults';
import PictureModalView from './PictureModalView/PictureModalView';

const HomeContainer = () => {

    // State
    const [pictureArray, setPictureArray]       = useState([])
    const [isFetched, setIsFetched]             = useState(true)
    const [total, setTotal]                     = useState(0)
    const [page, setPage]                       = useState(1)
    const [lastPage, setLastPage]               = useState(0)
    const [search, setSearch]                   = useState('')
    const [hideModal, setHideModal]             = useState(true)
    const [indexPic, setIndexPic]               = useState(0)
    const [btnIniPagDisable, setBtnIniPagDisable] = useState(true)
    const [btnFinPagDisable, setBtnFinPagDisable] = useState(true)
    const [btnIniModDisable, setBtnIniModDisable] = useState(true)
    const [btnFinModDisable, setBtnFinModDisable] = useState(true)


    const handleSearch = async (search, page) => {
        const responseJson = await getPicturesBySearch(search, page);
            setSearch ( search )
            setPictureArray ( responseJson.photos )
            setIsFetched ( false )
            setLastPage ( responseJson.photos.pages )
            setPage ( responseJson.photos.page )
            setTotal ( responseJson.photos.total )
        if (responseJson.photos.page !== 1) {
                setBtnIniPagDisable( false )
        }else{
                setBtnIniPagDisable( true )
        }
        if (responseJson.photos.page !== responseJson.photos.pages) {
                setBtnFinPagDisable( false )
        }else{
                setBtnFinPagDisable( true )
        }
    }

    /* 
        Modal
     */
    // Abrir modal
    const handleOpenModal = (e) => {
        let indexPicArray   = Number(e.target.dataset.id);
        let totalPic        = total - 1;
            setHideModal( false )
            setIndexPic ( indexPicArray )
            setBtnIniModDisable( false )
            setBtnFinModDisable( false )
          if (indexPicArray === totalPic)
              setBtnFinModDisable( true )
          if (indexPicArray === 0)
              setBtnIniModDisable( true )
    }

    // Cerrar modal
    const handleCloseModal = () => {
            setHideModal( true )
            setIndexPic ( 0 )
            setBtnIniModDisable( false )
            setBtnFinModDisable( false )
    }
    // Control botón Next
    const nextPicture = () => {
        const newIndex = indexPic + 1;
        const totalPic = total - 1;
            setIndexPic( newIndex )
            setBtnIniModDisable( false )
            setBtnFinModDisable( false )
        if (newIndex === totalPic)
            setBtnFinModDisable( true )
    }
    // Control botón Previo
    const prevPicture = () => {
        const newIndex = indexPic - 1;
            setIndexPic( newIndex )
            setBtnIniModDisable( false )
            setBtnFinModDisable( false )
        if (newIndex === 0)
            setBtnIniModDisable( true )
    }

    return (
        <>
            <HomeHeader/>
             <SearchTool handleSearch={ handleSearch } />
           {isFetched ? <Loader /> : <PaginationResults 
                handleSearch    ={ handleSearch } 
                page            ={ page } 
                lastPage        ={ lastPage }
                btnIniPagDisable={ btnIniPagDisable }
                btnFinPagDisable={ btnFinPagDisable }
                search          ={ search } /> }
            {isFetched ? <Loader /> : <PicturesResults 
                pictureArray    ={ pictureArray } 
                handleOpenModal ={ handleOpenModal } />}
            {hideModal ? <Loader /> : <PictureModalView 
                pictureArray    ={ pictureArray } 
                indexPic        ={ indexPic } 
                btnIniModDisable={ btnIniModDisable } 
                btnFinModDisable={ btnFinModDisable } 
                prevPicture     ={ prevPicture } 
                nextPicture     ={ nextPicture } 
                handleCloseModal={ handleCloseModal } />}
        </>
    )
   
}

export default HomeContainer;