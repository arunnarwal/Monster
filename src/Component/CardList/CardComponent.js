import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import './CardStyle.css'

export default function Cards(props) {
    return <>
        <Col md={3}  key={props.monster.id}>
            <Card className="CardContainer">
            <Card.Img variant="top" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
                <Card.Body key={props.monster.id}>
                    <h6>
                        {props.monster.name}
                   </h6>
                   
                       <span> {props.monster.email}</span>
                   
                </Card.Body>
            </Card>
        </Col>
    </>
}