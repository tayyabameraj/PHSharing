import { Box, Button, CompositeZIndex, FixedZIndex, Heading, Icon, Layer, Modal, TextField } from 'gestalt'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { showModal } from '../actions/modalAction';
import { loginAction } from "../actions/UserAction";

const Header = () =>{
    return(
        <div className="pt-4">
            <center>
                <Icon
                    icon="pinterest"
                    color="blue"
                    size={30}
                    accessibilityLabel="Pinterest"
                />
                <h1 className="mt-3"><strong>Welcome To Pinterest</strong></h1>
            </center>
        </div>
    );
}

const LoginModal = ({subDispatch}) => {
    const HEADER_ZINDEX = new FixedZIndex(10);
    const zIndex = new CompositeZIndex([HEADER_ZINDEX]);
    console.log(zIndex, 'z-index')
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = e =>{
        e.preventDefault();
        dispatch(loginAction(email, password));
    }
    return (
        <div className="loginModal">
            <Layer zIndex={zIndex}>
                <div className="loginModal">
            <Modal
              accessibilityModalLabel="View default padding and styling"
              heading={<Header />}
              onDismiss={()=> dispatch(showModal('dismiss'))}
              size="sm"
            >
                <form onSubmit={handleSubmit}>
                    <Box display="flex" direction="row" justifyContent="center">
                        <Box paddingX={8} maxWidth={400}>
                            <Box marginTop={1}>
                                <TextField
                                    id="email"
                                    onChange={({ value }) => setEmail(value)}
                                    placeholder="Add email"
                                    value={email}
                                    type="email"
                                />
                            </Box>
                            <Box marginTop={2}>
                                <TextField
                                    id="Password"
                                    onChange={({ value }) => setPassword(value)}
                                    placeholder="Enter Password"
                                    value={password}
                                    type="password"
                                />
                            </Box>
                            <div className="text-center pb-5 pt-2">
                                <Box marginTop={2}>
                                    <Button color="blue" type="submit" text="login" />
                                </Box>
                                <span className="mt-1 d-block">OR</span>
                                <Box marginTop={2}>
                                    <Button color="blue" onClick={()=> dispatch(showModal('register'))} text="Signup" />
                                </Box>
                            </div>
                        </Box>
                    </Box>
                </form>
            </Modal>
            </div>
          </Layer>
        </div>
    )
}

export default LoginModal
