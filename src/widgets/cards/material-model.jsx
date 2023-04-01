import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { Avatar } from '@mui/joy';

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button variant="solid" color="danger" onClick={() => setOpen(true)}>
        View Profile
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', size: 'lg' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
            alignItems: 'center'
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '50%',
              bgcolor: 'background.body',
              
            }}
          />
          <div className=" flex justify-center">
          <Avatar
          src={props.src}
          alt='avatar'
          sx={{height: '120px', width: '120px'}}
          />
         </div> <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
            className='text-center font-extrabold'
          >
            {props.name}
          </Typography>
          <div className="text-center">
          <Typography id="modal-desc" textColor="text.tertiary" className='text-left text-base font-bold'>
            Position: <code>{props.pos}</code>
            </Typography>
            <Typography id="modal-desc" textColor="text.tertiary" className='text-left text-base font-bold'>
            Affliation: <code>{props.aff}</code> 
            </Typography>
            <Typography id="modal-desc" textColor="text.tertiary" className='text-left text-base font-bold'>
            Skill set: <code>{props.skills}</code>
          </Typography>
          </div>
          <span className="mt-3 h-0.5 w-full bg-red-600 lg:w-full"></span>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}