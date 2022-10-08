import React from 'react';
import {Stack} from '@mui/material';
import {categories} from '../utilities/consts'

const sidebar = ({selectedCategory,setSelectedCategory}) => (
    <Stack direction='row' 
    m={1}
    sx={{ overflowY: 'auto', 
    height: {sx: 'auto', md: '95%'}, 
    flexDirection: {md: 'column'}}}>
    {categories.map(category => (
      <button 
      className='category-btn'
      onClick={() => setSelectedCategory(category.name)}
      style={{background: category.name === selectedCategory && '#8a3fd1', color: 'white',}} 
      key={category.name}>
        <span style={{color: category.name === selectedCategory ? 'white' : '#8a3fd1', marginRight: '18px',}}>{category.icon}</span>
        <span style={{opacity: category.name === selectedCategory ? '1' : '0.7'}}>{category.name}</span>
      </button>
    ))}  
    </Stack>
  )

export default sidebar