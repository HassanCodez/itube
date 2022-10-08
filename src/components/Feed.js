import React, { useState, useEffect } from 'react';
import {Stack, Box, Typography} from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import {fetchFromAPI} from '../utilities/fetchFromAPI';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items));
  },[selectedCategory])

  return (
    <Stack sx={{flexDirection: {sx: 'column', md: 'row'}}}>
      <Box sx={{
        height: {sx: 'auto', md: '90vh'}, 
        borderRight: '1px solid #8a3fd1',
        boxShadow: '1px 1px #995bd3',
        px: {sx: '0' , md: '2'}}}>
      <Sidebar 
      selectedCategory = {selectedCategory}
      setSelectedCategory = {setSelectedCategory}
      />
      {/* <Typography className='copyright' variant='body2' sx={{ mt: '1.5', color: '#fff'}}> Copyright 2022 I Tube</Typography> */}
      </Box>
      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: '2'}}>
        <Typography variant='h4'fontWeight='bold' mb={4} ml={12} sx={{color: 'white'}}>
          {selectedCategory} <span style={{color: '#995bd3'}}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed