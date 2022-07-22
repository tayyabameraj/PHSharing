import { Box, Button, Icon, TextField } from 'gestalt'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { showModal } from '../actions/modalAction'
import CustomSlider from '../Components/CustomSlider'
import Page from '../Components/Page'
const Home = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [dob, setDob] = useState('')
    const [phone, setPhone] = useState('')
    const dispatch = useDispatch();
    const title="Home"
    
    // Functions
    const handleSubmit = e =>{
        e.preventDefault();
    }
    useEffect(() => {
        if(title){
            document.title = title;
            window.scrollTo(0, 0);
        }
    }, [title]);
    return (
        <main id="Home">
            <div className="text-center MainHeading">
                <h1><strong>Get your next</strong></h1>
                <h1 className="secondary-text"><strong>green thumb idea</strong></h1>
            </div>
            <div className="calcHeight">
                <CustomSlider />
            </div>
            <div className="bottomWindow" style={{backgroundImage: 'url(bottomWindow.jpg)', backgroundSize: 'cover'}}>
                <div className="row mx-0 justify-content-center">
                    <div className="col-lg-6 py-3">
                        <h1 className="signupCaption">Sign up to get your ideas</h1>
                    </div>
                    <div className="col-lg-6">
                        <div className="registerForm">
                        <div>
                            <center>
                                <Icon
                                    icon="pinterest"
                                    color="blue"
                                    size={30}
                                    accessibilityLabel="Pinterest"
                                />
                                <h2 className="mt-3"><strong>Welcome To Pinterest</strong></h2>
                                <p className="m-0">Find new ideas to try</p>
                            </center>
                        </div>
                            <form onSubmit={handleSubmit}>
                                <Box display="flex" direction="row" marginTop={5} justifyContent="center">
                                    <Box paddingX={8}>
                                        <Box marginTop={1}>
                                            <TextField
                                                id="name"
                                                onChange={({ value }) => setName(value)}
                                                placeholder="Enter Name"
                                                value={name}
                                                type="text"
                                            />
                                        </Box>
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
                                        <Box marginTop={2}>
                                            <TextField
                                                id="DOB"
                                                onChange={({ value }) => setDob(value)}
                                                placeholder="Enter Date Of Birth"
                                                value={dob}
                                                type="text"
                                            />
                                        </Box>
                                        <Box marginTop={2}>
                                            <TextField
                                                id="phoneNo"
                                                onChange={({ value }) => setPhone(value)}
                                                placeholder="Enter Phone No"
                                                value={phone}
                                                type="number"
                                            />
                                        </Box>
                                        <div className="text-center pb-5 pt-2">
                                            <Box marginTop={2}>
                                                <Button color="blue" type="submit" text="Sign up" />
                                            </Box>
                                            <span className="mt-1 d-block">OR</span>
                                            <Box marginTop={2}>
                                                <Button color="blue" onClick={()=> dispatch(showModal('login'))} text="login" />
                                            </Box>
                                        </div>
                                    </Box>
                                </Box>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home
