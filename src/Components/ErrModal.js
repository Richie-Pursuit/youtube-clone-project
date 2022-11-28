import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';



function ErrModal({ closeM, errModal }) {
const navigate = useNavigate()
if(!errModal) return null
    return (
        <div className='modalOverlay'>
            <div className='modalInside'>
                <div className='body'>
                    Please enter a name in the search bar to continue!

                </div>
                <div className='footer'>
                    <button onClick={()=> { 
                    closeM(false)
                    navigate("/")}} > Ok </button>
                </div>
                



            </div>
            
        </div>
    );
}

export default ErrModal;