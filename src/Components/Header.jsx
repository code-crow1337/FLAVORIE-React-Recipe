import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Searchfield from './Searchfield';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: 'center',
  },
  menuBar: {
    backgroundImage: `url(${'https://images.pexels.com/photos/372851/pexels-photo-372851.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'})`,
    backgroundPosition: '40% 65%',
    backgroundSize: 'cover',
    height: 150,
    justifyContent: 'center',
    backgroundColor: '#40495E',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolBar: {
    backgroundColor: '#e4686aD4',
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  openMenu: {
    background: '#e4686aD4',
    height: '100%',
  },
}));

export default function Header() {
  const [drawerState, setDrawerState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerState(!drawerState);
  };
  const classes = useStyles();
  const menuItems = () => {
    const navLinks = [
      { menu: 'Recipes', path: '/' },
      { menu: 'About', path: '/about' },
      { menu: 'Bread Calculator', path: '/' },
    ];
    return (
      <List className={classes.openMenu}>
        {navLinks.map(({ menu, path }) => (
          <Link to={path} key={menu}>
            <ListItem button>
              <ListItemText primary={menu} />
            </ListItem>
          </Link>
        ))}
      </List>

    );
  };
  return (
    <div className={classes.root}>
      <AppBar className={classes.menuBar} position="static">
        <Toolbar className={classes.toolBar}>
          <Button onClick={toggleDrawer(true)}><MenuIcon style={{ color: 'white' }}/></Button>
          <Drawer anchor="left" open={drawerState} onClose={toggleDrawer(false)}>
            {menuItems()}
          </Drawer>
          <Typography className={classes.title} variant="h3" noWrap>
            <Link to="/">FLAVORIE</Link>
          </Typography>
         <Searchfield />
        </Toolbar>
      </AppBar>
    </div>
  );
}
