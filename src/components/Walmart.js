import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data';

function App() {
    const [sales, setSales] = useState(data);
    const [search, setSearch] = useState('');



    return (
        <div>
            <Container>
                <h1 className='text-center mt-4'>Sales Database</h1>
                <Form>
                    <InputGroup className='my-3'>

                        {/* onChange for search */}
                        <Form.Control
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder='Search Products'
                        />
                    </InputGroup>
                </Form>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Shipping</th>
                            <th>Department</th>
                            <th>Category</th>
                            <th>Product</th>
                            <th>Brand</th>
                            <th>Sales</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data
                            .filter((item) => {
                                return search.toLowerCase() === ''
                                    ? item
                                    : item.id.toLowerCase().includes(search);
                            })
                            .map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.Shipping}</td>
                                    <td>{item.Department}</td>
                                    <td>{item.Category}</td>
                                    <td>{item.Product}</td>
                                    <td>{item.Brand}</td>
                                    <td>{item.Sales}</td>
                                    <td>{item.Date}</td>

                                </tr>
                            ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default App;