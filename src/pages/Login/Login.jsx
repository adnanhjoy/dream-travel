import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/AuthProvider';
import { toast } from 'react-hot-toast';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGooglePlusG } from 'react-icons/fa';

const Login = () => {
    const { signIn, googelSignIn } = useContext(UserContext);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const handleSubmitLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                result.user;
                form.reset();
                navigate('/package')
                toast.success('Login Successfull')
            })
            .catch(error => console.error(error))
    }

    const handleSubmitGoogle = () => {
        googelSignIn(provider)
            .then(result => {
                result.user;
                navigate('/package')
                toast.success('Login Successfull')
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
            <div className='text-center'>
                <button onClick={handleSubmitGoogle} className='bg-primary border border-none py-2 px-3 rounded text-white fw-semibold'><FaGooglePlusG className='fs-2 me-2'></FaGooglePlusG>Sign in With Google</button>
            </div>
        </Container>
    );
};

export default Login;