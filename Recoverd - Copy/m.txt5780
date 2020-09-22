import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const axios = require('axios');


function AddModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  function submitInfo(e) {
    e.preventDefault();
    
    console.log('hii');
    var name1 = document.getElementById("name1").value;
    console.log(name1);
    var phone1 = document.getElementById("phone1").value;
    console.log(phone1);
    var time1 = document.getElementById("time1").value;
    time1 = String (String(time1).substring(0, String(time1).length - 1)) + '0';
    console.log(time1);
    var imageName = document.getElementById("img1").value;
    console.log(imageName);
    axios.post('http://localhost:5000/users/add', {
      "name": name1,
	    "phonenumber": '+1' + phone1,
	    "imagename": imageName,
	    "time": time1
    }).then((res) => {
      console.log('statuscode: ' + res.statusCode);
      console.log(res);
      alert(res.data);
    }).catch((err) => {
      console.log(err)
    });
   
    handleClose();
}

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Get Started!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a user to get a message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id = "tform" onSubmit = {submitInfo}>
          <label>
          Name:
          <br></br>
          <input type="text" name="name" id = "name1"required/>
          </label>
          <br></br>
          <label htmlFor="phone" required>Enter your phone number:</label>
          <br></br>
          <input type="tel" id="phone1" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}"required></input>
          <small>Format: 1234567890 only works with +1 numbers</small>
          <label>
          Imagename:
          <br></br>
          <input type="text" name="imagename" id = "img1" required />
          </label>
          <br></br>
          <label htmlFor="appt">Choose a time for the picture sent:</label>
          <br></br>
          <input type="time"  name="appt" id = "time1" required></input>
          <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  type="submit" value="Submit" >
            Submit Form
            
          </Button>
        </Modal.Footer>
         
          </form>
          
          
        
        </Modal.Body>
        
         
      </Modal>
    </>

  );
}
function RemoveModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  function submitInfo(e) {
    e.preventDefault();
    
    console.log('hii');
    var phone1 = document.getElementById("phone2").value;
    console.log(phone1);
    axios.post('http://localhost:5000/users/remove', {
	    "phonenumber": '+1' + phone1
    }).then((res) => {
      console.log('statuscode: ' + res.statusCode);
      console.log(res);
      alert(res.data);
    }).catch((err) => {
      console.log(err);
      alert(err);
    });
   
    handleClose();
}

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Remove User
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a user to get a message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit = {submitInfo}>
          <label htmlFor="phone" required>Enter your phone number:</label>
          <br></br>
          <input type="tel" id="phone2" name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}"required></input>
          <small>Format: 1234567890 only works with +1 numbers</small>
          <br></br>
          <Modal.Footer>
           <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary"  type="submit" value="Submit" >
           Remove number
            
          </Button>
        </Modal.Footer>
         
          </form>
          
          
        
        </Modal.Body>
        
         
      </Modal>
    </>

  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Modal show = {true}>
        <h1 className = "centert">
          Da Epic Photo Scheduler
        </h1>
        <br/>
        <img src= "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/SMS_Message.png/220px-SMS_Message.png" className="App-logo" alt="logo" />
       <br/>
       <br/>
       <div id = "modalb">
          <AddModal></AddModal>
          
          <RemoveModal></RemoveModal>
        </div>
       <h2 className = "centert">What is this?</h2>
       <p  className = "centert">
      Have you ever wanted a photo of a specific item to be sent by text message to you or a loved one at a scheculed time EVERY DAY?
      <br/>
      </p>
      <small className = "centert">No? Well now you can anyway.</small>
      <h2 className = "centert">Why would you ever want to do this?</h2>
       <ul>
         <li>It's Cool</li>
         <li>A prolonged joke can be funny at times</li>
      </ul>
        

        </Modal>
      </header>
      
    </div>
   
  );
}

export default App;
