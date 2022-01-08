import React from 'react'
import {Container , Card , Row , Col ,  Image, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const Profile = 'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
const iconSkill = {
    "python" : "https://img.icons8.com/fluency/48/000000/python.png" ,
    "js" : "https://img.icons8.com/color/48/000000/javascript--v1.png" ,
    "react" : "https://img.icons8.com/color/48/000000/react-native.png" ,
    "css" : "https://img.icons8.com/color/48/000000/css3.png",
}

export default function About() {
    let navigate = useNavigate()

    const handleBack = ()=> {
        navigate(-1)
    }
    return (
        <div className='home-body mt-5'>
            <Row className= 'home-main-row'>
                <Col>
                    <Card className='p-5'>
                        <Card.Body >
                            <Image src={Profile} height={300} roundedCircle />
                            <Card.Title >
                                <h1>Name</h1>
                            </Card.Title>
                            <Card.Text >
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sequi quae eligendi ex officiis at hic quia architecto ipsam delectus consectetur voluptas, illo modi inventore aspernatur earum sed repellendus id?
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, repellendus ratione. Ducimus nihil laudantium libero debitis praesentium unde facilis. Error, excepturi. Vero odit eos debitis, aliquam laudantium velit reprehenderit ipsam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita quam veritatis dolores consequuntur eveniet alias natus quis hic molestias laboriosam, eos voluptatum tempore porro a qui quisquam veniam obcaecati officiis.
                                </p>
                                <h3 >My Skills</h3>
                                <ul className='skill'>
                                    <li><Image src={iconSkill.python}/></li>
                                    <li><Image src={iconSkill.js}/></li>
                                    <li><Image src={iconSkill.react}/></li>
                                    <li><Image src={iconSkill.css}/></li>
                                </ul>
                           
                            </Card.Text>    
                        </Card.Body>

                    </Card>
                </Col>
            </Row>
        </div>
    )
}
