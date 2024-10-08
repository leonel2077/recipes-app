import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ boxShadow: 3, backgroundColor: '#556B2F' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Recetas de Cocina
        </Typography>
        <Button color="inherit" component={Link} to="/create-recipe">
          Crear Receta
        </Button>
        <Button color="inherit" component={Link} to="/view-recipes">
          Ver Recetas
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
