import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    TumblrShareButton,
    FacebookShareButton,
    EmailShareButton,
    TumblrIcon,
    FacebookIcon,
    EmailIcon
} from 'react-share'
import './Modal.css'


function Modal({ closeModal }) {
    let { id } = useParams()
    let URL =`https://main--flourishing-lolly-1c0dbf.netlify.app/videos/${id}`


    return (
        <div className='modalOverlay'>
            <div className='modalInside'>
                <div className='xButton'>
               <button className='x' onClick={()=> closeModal(false)}> X </button> 
               </div>
                <div className='title'>
                   <b> Share with friends and family!</b>
                </div>
                <div className='body'>
                <EmailShareButton url={URL}>
                        <EmailIcon size={40} round={true}/>
                        </EmailShareButton>
                        <FacebookShareButton url={URL}>
                        <FacebookIcon size={40} round={true}/>
                        </FacebookShareButton>
                        <TumblrShareButton url={URL}>
                    <TumblrIcon size={40} round={true} />
                    </TumblrShareButton>
                    <br></br>
                    <br></br>
                    <p className='link'><b>Copy Url:</b> <Link to={URL}>{URL}</Link></p>

                </div>
                <div className='footer'>
                    <button onClick={()=> closeModal(false)}> Done </button>
                </div>
                



            </div>
            
        </div>
    );
}

export default Modal;