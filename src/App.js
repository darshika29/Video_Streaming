import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material';
import { Navbar, Feed,VideoDetail,ChannelDetail,SearchFeed } from './components';
const App = () => {
    return(<BrowserRouter>
        <Box sx={{ backgroundColor: '#000' }}>
            <Navbar /> {/* done */}
            <Routes>

                <Route path="/" exact element={<Feed />} />{/* done */}

                <Route path='/video/:id' element={<VideoDetail />} />{/* done */}

                <Route path='/channel/:id' element={<ChannelDetail />} /> {/* done */}
                
                <Route path='/search/:searchTerm' element={<SearchFeed/> } /> {/* done */}
            </Routes>
        </Box>
    </BrowserRouter>)
    
}

export default App