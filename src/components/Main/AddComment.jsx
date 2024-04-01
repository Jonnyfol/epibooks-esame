import './AddComment.css'
import { Form, FloatingLabel, Button } from 'react-bootstrap'

export default function AddComment () {

    return (
            <Form className="d-flex flex-column align-items-start gap-2">
                <FloatingLabel controlId="floatingCommento" label="Lascia un commento...">
                    <Form.Control type="text" />
                </FloatingLabel>  
                <FloatingLabel controlId="floatingRate" label="Dai un voto da 1 a 5">
                    <Form.Control type="number" max={5}/>
                </FloatingLabel>  

                <Button 
                    variant="success" 
                    type="submit"
                    >
                    Invia
                </Button>   
            </Form>                    
    )
}