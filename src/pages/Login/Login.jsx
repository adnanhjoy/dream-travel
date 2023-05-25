import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/AuthProvider';

const Login = () => {
    const { signIn } = useContext(UserContext);

    const handleSubmitLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            result.user;
            form.reset();
        })
        .catch(error => console.error(error))
    }

    return (
        <Container>
            <h1 className='text-center'>Login</h1>
            <Form onSubmit={handleSubmitLogin} className='w-50 m-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>

                <Form.Group>
                    <Form.Text className="">
                        You don't have an account ?<Link to='/signup'>Signup</Link>
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default Login;