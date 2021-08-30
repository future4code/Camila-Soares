import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { StyledToolBar } from './styled'
import { goToLoginPage } from '../../routes/coordinator';
import { useHistory } from 'react-router-dom'

const Header = () => {

  const history = useHistory()
  return (
    <AppBar position="static">
      <StyledToolBar>

        <Typography variant="h6">
          LabEddit
        </Typography>
        <Button color="inherit" onClick={() => goToLoginPage(history)}>Login</Button>
      </StyledToolBar>
    </AppBar>
  );
}

export default Header