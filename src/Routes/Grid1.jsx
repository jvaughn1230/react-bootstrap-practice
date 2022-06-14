import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Grid1 = () => {
    return(
        <div className='flex-shrink-0 body-main'>
            <Container className='h-100 minHeight'>
                <Row className='h-100 gy-2'>
                    <Col xs={12} md={6}>
                        <div className='bg-dark text-light h-100 p-2'>
                            <h1>COL ONE</h1>
                            <p>Lorem ipsum dolor sit amet. Est dolores veritatis qui sunt doloribus hic corrupti quae et odit consequatur non error debitis est voluptatem perspiciatis. Sit quibusdam galisum in ullam dolores ut velit quia sed eveniet autem et dolore nobis sit rerum possimus rem corrupti cupiditate.Ut tempore cupiditate eos beatae sunt qui facilis ullam non officiis praesentium est error voluptatem? Est corrupti placeat quo error tempora ut inventore totam non inventore ducimus.Qui quisquam saepe sit voluptas voluptas ea expedita architecto ea quia rerum et quia culpa qui laboriosam explicabo eum voluptatem veniam. Et aliquid voluptates sit laudantium fugit vel odio consequatur sed ratione accusamus eos quibusdam quidem aut pariatur assumenda. Vel saepe consequatur id voluptas quasi vel rerum veniam aut quia repudiandae ut illum neque et officia tenetur. Et doloribus expedita est vero aperiam et voluptatem autem qui officia numquam non repudiandae totam qui error quia qui eaque voluptatibus.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='bg-secondary text-light h-100 p-2'>
                            COL TWO
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>    
    );
}

export default Grid1;