import { AppBar, Toolbar } from '@mui/material';
import logo from '../assets/images/global_images/small_logo.png'
import React from 'react'
import { Link } from 'react-router-dom';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

const Header = (props) => {
  const hoverStyle = {
    "&:hover": {
      textDecoration: "underline",
      textUnderlinePosition: "under",
      backgroundColor: 'transparent',
      cursor: 'pointer',
    }
  }

  return (
    <AppBar color="primary" position="sticky">
      <Toolbar >
        <div className="flex ml-20">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-16"
          />
          <Link className="nav-item">
            Myth World
          </Link>
        </div>
        <div className="flex ml-auto">
          <Link className="nav-item px-10" to="/">
            Home
          </Link>
          <Link className="nav-item px-10" to="blogs">
            Blogs
          </Link>
          <Link className="nav-item px-10">
            Login/Register
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
