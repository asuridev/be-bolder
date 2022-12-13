import { Box, Paper } from '@mui/material'
import { RoundTrip } from './RoundTrip'
import { Where } from './Where'


export const Panel = () => {

  return (
    <Paper elevation={5} sx={{
      width:'90%',
      height:'250px',
      position:'absolute',
      bottm:0,
      left:'50%',
      transform:'translate(-50%,-50%)'
    }}>
      <Box sx={{margin:'1rem'}}>
          <RoundTrip/>
          <Where/>
      </Box>
    </Paper>
  )
}
