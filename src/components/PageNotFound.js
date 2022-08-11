import { Typography } from '@mui/material'
import React from 'react'
import BlockIcon from '@mui/icons-material/Block';
function PageNotFound() {
  return (
    <div>
      <Typography variant='h3'><BlockIcon/>404!</Typography>
      <h4>Page Not Found...</h4>
      
    </div>
  )
}

export default PageNotFound
