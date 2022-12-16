import logo from '../assets/images/global_images/small_logo.png'
import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import AppButton from './AppButton';
import { useAuth } from '../hooks'
import { Avatar } from '@mui/material';
import MenuDropdown from './MenuDropdown';
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
  const location = useLocation()
  const [authPopup, setAuthPopup] = useAuth()
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleBeforeUnload = (e) => {
    e.preventDefault();
    const message =
      "Are you sure you want to leave? All provided data will be lost.";
    e.returnValue = message;
    return message;
  };

  function toggleOpenAuthDialog() {
    setAuthPopup((previousState) => {
      return {
        ...previousState, open: !authPopup.open
      }
    })
    document.body.style.overflowY = "hidden"
  }

  function toggleDropdownMenu() {
    setShowProfileMenu(!showProfileMenu)
  }

  return (
    <header className="bg-brown sticky shadow-md shadow-dark-grey top-0 flex z-20">
      <div className="flex lg:ml-20 my-2 cursor-default "
      >
        <img
          src={logo}
          alt="logo"
          className="w-16 h-16"
        />
        <p className="nav-item lg:pt-4 select-none hover:no-underline">
          Myth World
          </p>
      </div>
      <div className="hidden lg:flex ml-auto mx-12">
        <NavLink className={`nav-item lg:px-10 ${(location.pathname === '/') && 'bg-teal'}`} to="/"
          onClick={() => {
            if (window.location.pathname.slice(0,4) === '/add')
              handleBeforeUnload()
          }}
        >
          Home
          </NavLink>
        <NavLink className={`nav-item lg:px-10 ${(location.pathname === '/blogs') && 'bg-teal'}`} to="blogs"
          onClick={() => {
            if (window.location.pathname.slice(0,4) === '/add')
              handleBeforeUnload()
          }}
        >
          Blogs
          </NavLink>

        {props.user && (
          <>
            <NavLink className={`nav-item lg:mr-12 lg:px-10 ${(location.pathname.slice(0,4) === '/add') && 'bg-teal'}`} to="add/init"
              onClick={() => {
                if (location.pathname.slice(5) !== 'init')
                  handleBeforeUnload()
              }}
            >
              Create Blog
            </NavLink>
            <div className={`cursor-pointer py-2`} onClick={() => {
              toggleDropdownMenu()
            }}>
              <Avatar {...stringAvatar(`${props.user.lastName} ${props.user.firstName}`)} className='my-3' />
            </div>
          </>
        )}

      </div>
        <MenuDropdown open={showProfileMenu} onClose={toggleDropdownMenu} user={props.user} />
      {!props.user && <AppButton content="Login/Register" className={` lg:mr-4`} onClick={toggleOpenAuthDialog} />}
    </header>
  )
}

export default Header
