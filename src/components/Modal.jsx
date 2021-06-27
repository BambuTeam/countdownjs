
import React, { useEffect } from 'react'
import Terminos from '../pages/Terminos'




const Modal = props => {

    const closeOnEscapeKeyDown = (e)=>{
        if((e.charCode||e.keyCode)===27){
            props.onClose()
        }
    }
    useEffect(()=>{
        document.body.addEventListener('keydown',closeOnEscapeKeyDown)
        return function cleanup(){
            document.body.removeEventListener('keydown',closeOnEscapeKeyDown)
        }
    },[])

    if (!props.show){
        return null
    }

    /*@author: ngonzalez
        @description: para desactivar por medio del esquipe(ESC)
    */
   const clseOnEscapeKeyDown = (e)=>{
       if((e.charCode||e.keyCode)===27){
           props.onClose()
       }
   }
    





    return(
        <div className="modal-terms" onClick={props.onClose}>
            <div className="modal-content" onClick={e=>e.stopPropagation()} >
                <div className="modal-header">
                    <h1 className="modal-title">
                    Terms and Conditions
                    </h1>
                </div>
                <div className="modal-body">
                  
                   <Terminos/>
                  
                      
                </div>
                <div className="modal-footer">
                    <button className="button" onClick={props.onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    )

}

export default Modal;