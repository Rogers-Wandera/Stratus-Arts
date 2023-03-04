import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BrushIcon from '@mui/icons-material/Brush';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned';
import GavelIcon from '@mui/icons-material/Gavel';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import InfoIcon from '@mui/icons-material/Info';
import BookIcon from '@mui/icons-material/Book';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyIcon from '@mui/icons-material/Money';

const menuStyle = {
    width:'300px',
    maxWidth: '100%',
    padding: 0,
    '@media (max-width: 768px)': {
        width:'500px'
    }
}

export default function LeftMenu() {
  return (
    <Paper sx={menuStyle}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <MenuBookIcon sx={{fontSize:'30px',color:'blue'}} />
          </ListItemIcon>
          <ListItemText>FAQs</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘F
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <BrushIcon sx={{fontSize:'30px',color:'blue'}} />
          </ListItemIcon>
          <ListItemText>Help Center</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘A
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <StorefrontIcon sx={{fontSize:'30px',color:'blue'}} />
          </ListItemIcon>
          <ListItemText>Sell with us</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘S
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AssignmentReturnedIcon sx={{fontSize:'30px',color:'blue'}} />
          </ListItemIcon>
          <ListItemText>Returns Policy</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘R
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <GavelIcon sx={{fontSize:'30px',color:'blue'}} />
          </ListItemIcon>
          <ListItemText>Terms and conditions</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘TC
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PrivacyTipIcon sx={{fontSize:'30px',color:'blue'}} />
          </ListItemIcon>
          <ListItemText>Privacy Policy</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘PP
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <InfoIcon sx={{fontSize:'30px',color:'blue'}} />
          </ListItemIcon>
          <ListItemText>About us</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘A
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <BookIcon sx={{fontSize:'30px',color:'blue'}}/>
          </ListItemIcon>
          <ListItemText>Blog</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘B
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AttachMoneyIcon sx={{fontSize:'30px',color:'blue'}}/>
          </ListItemIcon>
          <ListItemText>Donations</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘B
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <MoneyIcon sx={{fontSize:'30px',color:'blue'}}/>
          </ListItemIcon>
          <ListItemText>Sponsor us</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘B
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
