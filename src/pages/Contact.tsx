import React,{useState} from 'react'
import { Container , Card ,Row , Col , Image , Button , Form , Alert} from 'react-bootstrap'
export default function Contact() {

    const [name , setName ] = useState<string>("")
    const [email , setEmail ] = useState<string>("")
    const [message , setMessage ] = useState<string>("")
    const [show , setShow ] = useState<boolean>(false)

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>)=> {
        const {name , value} = event.target
        if (name==="name"){
            setName(value)
        }
        else if (name === "email") {
            setEmail(value)
        }
        else if (name === "message"){
            setMessage(value)
        }

    }
    return (
        <Container>
            <Card className="my-5 p-4">
                <Form.Floating>
                    <Form.Group>
                        <Form.Label className="mt-3">Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={handleChange}
                        />
                        
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mt-3">Email</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleChange}
                        />
                        
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mt-3">Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="message"
                            placeholder="Enter your message"
                            value={message}
                            onChange={handleChange}
                        />
                        
                    </Form.Group>
                    <Button variant="primary" onClick={()=>{setShow(true)}} type='submit' className="mt-3">
                        Submit
                    </Button>
                </Form.Floating>
                <Alert show={show} className='mt-3' variant='success'>
                    You message has been send!!
                </Alert>
            </Card>
        </Container>
    )
}
