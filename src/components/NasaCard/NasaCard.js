import React from 'react';
import {Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const NasaCard = props => {
    return (
        <Col key={props.id}>
            <Card>
                <CardImg
                top width='60%'
                src={props.picture}
                alt='Nasa'
                />
                <CardBody>
                    <CardTitle> Title: {props.title}</CardTitle>
                    <CardText>Date: {props.date}</CardText>
                    <CardText>Description: {props.description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default NasaCard


{/*<Col key={props.id}>*/}
{/*    <h1>Title: {props.title}</h1>*/}
{/*    <img src={props.picture} alt='Nasa'/>*/}
{/*    <p>Date: {props.date}</p>*/}
{/*    <p>Description: {props.description}</p>*/}
{/*    <Col/>*/}