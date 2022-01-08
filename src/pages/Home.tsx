import React from 'react'
import {Container , Card , Row , Col ,  Image, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Profile = 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
export default function Home() {
    return (
        <div className='home-body mt-5'>
            <Row className= 'home-main-row'>
                <Col>
                    <Card className='p-5'>
                        <Card.Body >
                            <Image src={Profile} height={300} roundedCircle />
                            <Card.Title >
                                <h1>JustDev-08</h1>
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted mt-3 " >
                                <h2>Developer</h2>
                            </Card.Subtitle>
                            <Card.Text >
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi quae eligendi ex officiis at hic quia architecto ipsam delectus consectetur voluptas, illo modi inventore aspernatur earum sed repellendus id?
                                </p>
                            </Card.Text>    
                            
                             
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
        </div>
    )
}
