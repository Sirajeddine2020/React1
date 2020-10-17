import React from "react";
import Form from 'react-bootstrap/Form'
import {Col, Button} from 'react-bootstrap'
import './Complain.css';


function Complain() {
  return (
    <div className='general'>
      <br></br>
    <h3>Complain</h3>
 <Form> 
<Form.Row >
    <Form.Label column sm={2}>
     First name
    </Form.Label>
    <Col sm={10}>
      <Form.Control placeholder="First name" />
    </Col>
    <Form.Label column sm={2}>
     Last name
    </Form.Label>
    <Col sm={10}>
      <Form.Control placeholder="Last name" />
    </Col>
  </Form.Row>

  <Form.Row>
    <Form.Label column sm={2}>
     Customer id
    </Form.Label>
    <Col sm={10}>
      <Form.Control placeholder="Customer id" />
    </Col>
    <Form.Label column sm={4}>
     N° of Fidelity Card 
    </Form.Label>
    <Col sm={8}>
      <Form.Control placeholder="N° of Fidelity Card" />
    </Col>
  </Form.Row>

    <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Region</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
      <option>Tunis</option>
      <option>Ben Arous</option>
      <option>Ariana</option>
      <option>Manouba</option>
      <option>Nabeul</option>
      <option>Bizerte</option>
      <option>Sousse</option>
      <option>Monastir</option>
      <option>Mahdia</option>
      <option>Sfax</option>
      <option>Gabes</option>
      <option>Mednine</option>
      <option>Tataouine</option>
      <option>Kebili</option>
      <option>Touzeur</option>
      <option>Gafsa</option>
      <option>Sidi Bouzid</option>
      <option>Kasserine</option>
      <option>Kairouan</option>
      <option>Siliana</option>
      <option>Zaghouan</option>
      <option>Beja</option>
      <option>Jendouba</option>
      <option>Kef</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Postal code</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Row>
    <Form.Label column sm={4}>
     Product id/Service code
    </Form.Label>
    <Col sm={8}>
      <Form.Control placeholder="Product id/Service code" />
    </Col>
    <Form.Label column sm={4}>
     Serial Number
    </Form.Label>
    <Col sm={8}>
      <Form.Control placeholder=" Serial Number" />
    </Col>
    </Form.Row>


  <Form.Row>
    <Form.Label column sm={3}>
     Shop name
    </Form.Label>
    <Col sm={9}>
      <Form.Control placeholder="Shop name" />
    </Col>
    <Form.Label column sm={4}>
     Date of purchase
    </Form.Label>
    <Col sm={8}>
     <input type="date"/>
     <br></br>
     </Col>
  </Form.Row>
  <section>
 <p  class="text-muted"> Please enter a copy of your purchasing contract </p>
  <div className="mb-3">
    <Form.File id="formcheck-api-custom" custom>
      <Form.File.Input isValid />
      <Form.File.Label data-browse="Button text">
        Custom file input
      </Form.File.Label>
      <Form.Control.Feedback type="valid" >Well !</Form.Control.Feedback>
    </Form.File>
  </div>
  {/* <div className="mb-3">
    <Form.File id="formcheck-api-regular">
      <Form.File.Label>Regular file input</Form.File.Label>
      <Form.File.Input />
    </Form.File>
  </div> */}
  </section>

 

  <Form.Row>
    <Form.Group controlId="formGridAddress3">
     <Form.Label>Address of the revendor</Form.Label>
      <Form.Control placeholder="Shop address" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
      <option>Tunis</option>
      <option>Ben Arous</option>
      <option>Ariana</option>
      <option>Manouba</option>
      <option>Nabeul</option>
      <option>Bizerte</option>
      <option>Sousse</option>
      <option>Monastir</option>
      <option>Mahdia</option>
      <option>Sfax</option>
      <option>Gabes</option>
      <option>Mednine</option>
      <option>Tataouine</option>
      <option>Kebili</option>
      <option>Touzeur</option>
      <option>Gafsa</option>
      <option>Sidi Bouzid</option>
      <option>Kasserine</option>
      <option>Kairouan</option>
      <option>Siliana</option>
      <option>Zaghouan</option>
      <option>Beja</option>
      <option>Jendouba</option>
      <option>Kef</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Postal code</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <textarea >Your complain / reclamations</textarea> 

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="I confirm the above information" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div> 
  );
}

export default Complain;