import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Paper, IconButton} from '@mui/material';
import {Search} from '@mui/icons-material';
const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper 
    component='form'
    onSubmit={submitHandler}
    sx={{borderRadius: '20px', border: '1px solid #8a3fd1', pl: '2', mr:{sm:5}}}>
        <input 
        className='search-bar' 
        placeholder='Search...' 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} />
        <IconButton type='submit' sx={{p:'15px', color: '#8a3fd1'}}>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar