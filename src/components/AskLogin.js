import React, {useState, useEffect} from 'react'
import {  Modal} from "react-bootstrap"


const AskLogin = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
  
  useEffect(() => {
    handleShow()
  }, []);


  return (

    <div>
            <Modal show={show} onHide={handleClose}>

              <Modal.Header closeButton>
                <Modal.Title>Please Login Selecting An User...</Modal.Title>
              </Modal.Header>

            </Modal>
    </div>
      
  )
}



export default AskLogin;