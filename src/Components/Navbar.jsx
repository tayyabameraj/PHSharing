import React from 'react'
import { useEffect, useRef, useState, useReducer } from "react";
import {
  Avatar,
  Box,
  Button,
  Dropdown,
  Icon,
  IconButton,
  SearchField,
} from "gestalt";
import { Link } from "react-router-dom";
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../actions/modalAction';

const Navbar = () => {

    const [value, setValue] = useState("");
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const modals = useSelector((state) => state.modals);
    const { modal } = modals;
    //   const [selected, setSelected] = useState([]);
    const anchorRef = useRef(null);
    
    const [searchShow, setSearchShow] = useState(false)
    const showSearch = () =>{
      setSearchShow(!searchShow)
    }
    useEffect(()=>{
      if(searchShow){
        const searchField = document.querySelector('.responsiveSearchField input')
        searchField.focus()
      }
    },[searchShow])
    

  return (
    <div id="WPC_Navbar">
      {modal === 'login' && (
        <LoginModal />
      )}
      {modal === 'register'&& (
        <RegisterModal />
      )}
      
      <Box
        color="white"
        rounding={2}
        padding={3}
        display="flex"
        alignItems="center"
        justifyContent="between"
      >
        <Box display="flex" alignItems="center" padding={3}>
          <Icon
            icon="pinterest"
            color="blue"
            size={30}
            accessibilityLabel="Pinterest"
          />
          <h5 className="m-0 ml-1 text-primary">Pinterest</h5>
        </Box>
        <div>
            <Box display="flex" direction="row">
                <Box paddingX={2}>
                    <Button text="Login" onClick={()=> dispatch(showModal('login'))} color="blue" size="lg" />
                </Box>
                <Box paddingX={2}>
                    <Button text="Signup" onClick={()=> dispatch(showModal('register'))} color="transparent" size="lg" />
                </Box>
            </Box>
        </div>
        
      </Box>
    </div>
    )
}

export default Navbar
