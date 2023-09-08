import { ImageGalleryItemImage, ImageGalleryItemWrap } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({image:{webformatURL, largeImageURL}})=>{
    return(
        <ImageGalleryItemWrap>
             <ImageGalleryItemImage src={webformatURL} alt="" />
        </ImageGalleryItemWrap>
    )
}