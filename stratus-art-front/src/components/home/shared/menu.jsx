import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentPaste from '@mui/icons-material/ContentPaste';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BrushIcon from '@mui/icons-material/Brush';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CountertopsIcon from '@mui/icons-material/Countertops';

const menuStyle = {
    width:'300px',
    maxWidth: '100%',
    padding: 0,
    '@media (max-width: 768px)': {
        width:'500px'
    }
}
export default function ProductsMenu() {
  return (
    <Paper sx={menuStyle}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <MenuBookIcon sx={{fontSize:'30px',color:'blue'}}    />
          </ListItemIcon>
          <ListItemText>Publications</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘P
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <BrushIcon sx={{fontSize:'30px',color:'blue'}} />
          </ListItemIcon>
          <ListItemText>Art Pieces</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘A
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste sx={{fontSize:'30px',color:'blue'}} />
          </ListItemIcon>
          <ListItemText>Paintings</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘P
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <TrendingUpIcon sx={{fontSize:'30px',color:'blue'}} />
          </ListItemIcon>
          <ListItemText>ceramics</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘P
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <CountertopsIcon sx={{fontSize:'30px',color:'blue'}} />
          </ListItemIcon>
          <ListItemText>Sculpture</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘P
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
