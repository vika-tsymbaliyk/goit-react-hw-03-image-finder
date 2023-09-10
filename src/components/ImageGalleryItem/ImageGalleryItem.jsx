import { ImageGalleryItemImage, ImageGalleryItemWrap } from "./ImageGalleryItem.styled"

export const ImageGalleryItem = ({image:{webformatURL, largeImageURL, tags}, onModalOpen, onShowModalImg})=>{
    const handleItemClick = () => {
        onModalOpen();
        onShowModalImg(largeImageURL, tags);
      };
    return(
        <ImageGalleryItemWrap onClick={handleItemClick}>
             <ImageGalleryItemImage src={webformatURL} alt={tags}/>
        </ImageGalleryItemWrap>
    )
}