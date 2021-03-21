
import React,{useRef} from 'react'
import {Container,Form, Button} from 'react-bootstrap'
import {v4 as uuidV4} from 'uuid'




export default function Login({onIdSubmit}) {

    const idRef = useRef()

    function handleSubmit(e){
        e.preventDefault()
        onIdSubmit(idRef.current.value)

    }

    function createNewId(){
        onIdSubmit(uuidV4())
    }
    
    return (
        <Container className  = "align-items-center d-flex" style = {{height:'100vh'}}>
            <Form className = "w-100" onsubmit = {handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter your id</Form.Label>
                    <Form.Control type = "text" ref = {idRef} required/>
                </Form.Group>
               <Button className = "mr-2" type = "submit">Login</Button>
               <Button onClick = {createNewId} variant = "warning">create a new id</Button>
            </Form>
        </Container>
    )
}
