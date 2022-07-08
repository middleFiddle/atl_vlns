import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
type Props = {}

{/* <button type="button" className="btn btn-lg btn-outline-primary mx-auto w-100" data-bs-toggle="modal" data-bs-target="#mapModal">
    <FontAwesomeIcon icon={faLocationDot} /><span className="px-3 lead">Find Us</span>
</button> */}

const MapModal = (props: Props) => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-primary" onClick={handleShow}>
                <FontAwesomeIcon icon={faLocationDot} /><span className="px-3 lead">Find Us</span>
            </Button>

            <Modal show={show} onHide={handleClose}>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.3434739247164!2d-84.36273978439591!3d34.00939342743362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f50ca68f8b6679%3A0x91a810546d1094ae!2sAtlanta%20Violins!5e0!3m2!1sen!2sus!4v1656171800398!5m2!1sen!2sus" width={600} height={450} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Modal>
        </>
    );
}


export default MapModal