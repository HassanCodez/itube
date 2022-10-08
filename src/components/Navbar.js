import React from 'react';
import { Stack } from '@mui/material';
import {Link} from 'react-router-dom';
import logo from '../utilities/logo.png';
import SearchBar from './SearchBar';

const Navbar = () => (
    <Stack 
    direction='row' 
    alignItems='center' 
    p={2} 
    sx={{ postion: 'sticky', backgroundColor: '#000', top: '0', justifyContent:'space-between'}}>
      <Link to='/' style={{display: 'flex', alignItems: 'center'}}>
        <img src={logo} alt='Logo' height={30}/>
      </Link>
      <SearchBar/>
    </Stack>
  )

export default Navbar