import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { ImageGalleryList} from "./ImageGallery.styled"

export const ImageGallery =({images, onClick, onShowModalImg})=>{
    return(
        <ImageGalleryList>
            {images.map(image => (<li key={image.id}><ImageGalleryItem image={image} onModalOpen={onClick} onShowModalImg={onShowModalImg}/></li>))}
            
        </ImageGalleryList>
    )
}