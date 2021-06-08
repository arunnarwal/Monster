import React from 'react'
import {Container,Row} from'react-bootstrap'
import Cards from './CardComponent'
export default function CardList(props){
    return<>
    <Container>
        <Row>
            
    
        {
            props.monster.map(x=>(
                <Cards key={x.id} monster={x}/>
                
            ))
            }  
   
    </Row>
    </Container>
    </>
}