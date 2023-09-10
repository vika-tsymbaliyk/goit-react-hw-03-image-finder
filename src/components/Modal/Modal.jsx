import Modal from 'react-modal';
Modal.setAppElement('#root');

export const ModalWindow = ({isOpen, handleCloseModal, modalImg:{url, alt}})=>{

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          overflow: 'hidden',
          padding: '0px',
          maxWidth: 'calc(100vw - 48px)',
          maxHeight: 'calc(100vh - 24px)',
          width:'70%',
        },

        overlay : {
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:' rgba(0, 0, 0, 0.8)',
            zIndex: '1200',
            
        }
      };

    return(

        <Modal 
              isOpen={isOpen}
              style={customStyles}
              onRequestClose={handleCloseModal}
              >
                
            <img src={url} alt={alt}/>
        </Modal>
    
    )
}