import { Modal , Box, Typography, Button, Alert, AlertTitle, Stack} from '@mui/material'

import React from 'react'


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  

const DeleteModal = ({open, handleClose, action, name}) => {
  
  return (
    <>
        <Modal open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Alert severity='info' sx={style}>
            <Typography id="modal-modal-title" >Confirmacion</Typography>
            <Typography id="modal-modal-description">{`Esta serguro que desea eliminar: ${name}`}</Typography>
            <Stack direction="row" spacing={2} sx={{paddingTop:"1em"}}>
                <Button variant='contained' onClick={action}>Eliminar</Button>
                <Button variant='contained' onClick={handleClose}>Cancelar</Button>
            </Stack>
        </Alert>

        </Modal>
    </>
  )
}

export default DeleteModal