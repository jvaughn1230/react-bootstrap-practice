import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Grid2 = () => {
    return(
        <div className='flex-shrink-0 body-main'>
            <Container className='h-100 minHeight'>
                <Row className='h-100'>
                    <Col xs={3}>
                        <div className='bg-secondary text-light h-100 p-2'>
                            <h5>Side Nav</h5>
                        </div>
                    </Col>
                    <Col xs={9}>
                        <div className='bg-dark text-light h-100 p-2'>
                            <h5>Main Content</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Grid2;