
import "./Branch.css"

import Button from 'react-bootstrap/Button';

import Offcanvas from 'react-bootstrap/Offcanvas';
import React, {useState} from "react";


function NavyKnowledge({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>U.S. Navy</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        The United States is a maritime nation, and the U.S. Navy protects America at sea. 
        Alongside our allies and partners, we defend freedom, preserve economic prosperity, 
        and keep the seas open and free. Our nation is engaged in long-term competition. 
        To defend American interests around the globe, 
        the U.S. Navy must remain prepared to execute our timeless role, as directed by Congress and the President. 
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Example() {
  return (
    <>
      {['start', 'top', 'end','bottom', 'bottom'].map((placement, idx) => (
        <NavyKnowledge key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Example;