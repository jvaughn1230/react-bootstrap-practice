import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

const Grid3 = () => {
    return(
        <div className='flex-shrink-0 body-main'>
            <Container className='h-100 minHeight'>
                <Row className='h-100'>
                    <Col xs={7}>
                        <div className='bg-secondary text-light p-2 h-100'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Vitae turpis massa sed elementum. Egestas erat imperdiet sed euismod. Diam maecenas sed enim ut sem viverra. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Auctor elit sed vulputate mi. Nullam non nisi est sit amet facilisis magna. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Amet nisl suscipit adipiscing bibendum. Turpis cursus in hac habitasse platea.</p>
                        </div>
                    </Col>
                    <Col xs={5} className='h-100 d-flex flex-column justify-content-evenly'>
                        <div className='bg-dark text-light h-50 p-2'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Vitae turpis massa sed elementum. Egestas erat imperdiet sed euismod. Diam maecenas sed enim ut sem viverra. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Auctor elit sed vulputate mi. Nullam non nisi est sit amet facilisis magna. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Amet nisl suscipit adipiscing bibendum. Turpis cursus in hac habitasse platea.</p>
                        </div>
                        <div className='bg-dark text-light h-50 mt-2 p-2 overflow-hidden'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec dui nunc mattis enim ut. Vitae turpis massa sed elementum. Egestas erat imperdiet sed euismod. Diam maecenas sed enim ut sem viverra. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Auctor elit sed vulputate mi. Nullam non nisi est sit amet facilisis magna. Purus viverra accumsan in nisl nisi scelerisque eu ultrices. Amet nisl suscipit adipiscing bibendum. Turpis cursus in hac habitasse platea.</p>
                        </div>
                        <div className='bg-dark text-light border border-top p-2'>
                            <Button variant='light'>Learn more</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Grid3;