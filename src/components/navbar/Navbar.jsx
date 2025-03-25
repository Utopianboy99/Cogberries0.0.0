import './Navbar.css';
import React, { useState } from "react";
import { Drawer, Button, IconButton, List, ListItem, ListItemText } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Function to toggle drawer
  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpen(open);
  };

  // Drawer content
  const drawerContent = (
    <List style={{ width: 250 }}>
      <ListItem button>
        <ListItemText primary="Profile" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Settings" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
  );

  return (
    <div className="Navbar">
      <a href="Navbar.jsx">
        <img src="/Vector-3.svg" alt="logo" className="logo" />
      </a>
      <section className="links">
        <ol className="nav-links">
          <li className="dropdown">
            <button className="dropbtn">Explore</button>
            <div className="dropdown-content">

            <h3 className='lead-text'>Beginner-Level Courses (For Those with Zero Knowledge)</h3>

              <div className="block1-intro">
                <div className="block1 info-block">
                  <h4 className="Intro">Introduction to Stocks & Investing</h4>
                  <ul>
                    <li><a href="#"> What are stock </a></li>
                    <li><a href=""> Why should you invest </a></li>
                    <li><a href=""> How the stock market works </a></li>
                  </ul>
                </div>
                <div className="block2 info-block">
                  <h4>How To Buy Your First Stock</h4>
                  <ul>
                    <li> <a href="">Understanding Stock Exchange </a></li>
                    <li> <a href="">Choosing S Brokerage Account </a> </li>
                    <li> <a href=""> Step-By-Step Buying Guide </a> </li>
                  </ul>
                </div>
                <div className="block3 info-block">
                  <h4>Stock Market Terms Made Simple</h4>
                  <ul>
                    <li> <a href="" > Bulls, Bears, IPOs, Dividence, and more </a> </li>
                    <li> <a href="" > Understanding Stock Price Movements </a> </li>
                  </ul>
                </div>
                <div className="block4 info-block">
                  <h4>How To Read Stock Chart & Trends</h4>
                  <ul>
                    <li> <a href="" > Basic technical analysis </a></li>
                    <li> <a href=""> How to spot patterns </a> </li>
                  </ul>
                </div>
                <div className="block4 info-block">
                  <h4>Common Mistakes Beginner Investors Make</h4>
                  <ul>
                    <li> <a href=""> Emotional investing </a> </li>
                    <li> <a href=""> Overtrading </a> </li>
                    <li> <a href=""> Ignoring risk management </a> </li>
                  </ul>
                </div>
              </div>

              {/* this is the second row of the drop-content */}

              <h3 className='lead-text'>Intermediate-Level Courses (For Those Who Know the Basics)</h3>
              <div className="block1-intro">
                <div className="block1 info-block">
                  <h4 className="Intro">Introduction to Stocks & Investing</h4>
                  <ul>
                    <li><a href="#"> What are stock </a></li>
                    <li><a href=""> Why should you invest </a></li>
                    <li><a href=""> How the stock market works </a></li>
                  </ul>
                </div>
                <div className="block2 info-block">
                  <h4>How To Buy Your First Stock</h4>
                  <ul>
                    <li> <a href="">Understanding Stock Exchange </a></li>
                    <li> <a href="">Choosing S Brokerage Account </a> </li>
                    <li> <a href=""> Step-By-Step Buying Guide </a> </li>
                  </ul>
                </div>
                <div className="block3 info-block">
                  <h4>Stock Market Terms Made Simple</h4>
                  <ul>
                    <li> <a href="" > Bulls, Bears, IPOs, Dividence, and more </a> </li>
                    <li> <a href="" > Understanding Stock Price Movements </a> </li>
                  </ul>
                </div>
                <div className="block4 info-block">
                  <h4>How To Read Stock Chart & Trends</h4>
                  <ul>
                    <li> <a href="" > Basic technical analysis </a></li>
                    <li> <a href=""> How to spot patterns </a> </li>
                  </ul>
                </div>
                <div className="block4 info-block">
                  <h4>Common Mistakes Beginner Investors Make</h4>
                  <ul>
                    <li> <a href=""> Emotional investing </a> </li>
                    <li> <a href=""> Overtrading </a> </li>
                    <li> <a href=""> Ignoring risk management </a> </li>
                  </ul>
                </div>
              </div>

              {/* This is the third secrtion of the drop-cont */}

                <h3 className='lead-text'>Specialty Courses & Extras</h3>
              <div className="block1-intro">
                <div className="block1 info-block">
                  <h4 className="Intro">Introduction to Stocks & Investing</h4>
                  <ul>
                    <li><a href="#"> What are stock </a></li>
                    <li><a href=""> Why should you invest </a></li>
                    <li><a href=""> How the stock market works </a></li>
                  </ul>
                </div>
                <div className="block2 info-block">
                  <h4>How To Buy Your First Stock</h4>
                  <ul>
                    <li> <a href="">Understanding Stock Exchange </a></li>
                    <li> <a href="">Choosing S Brokerage Account </a> </li>
                    <li> <a href=""> Step-By-Step Buying Guide </a> </li>
                  </ul>
                </div>
                <div className="block3 info-block">
                  <h4>Stock Market Terms Made Simple</h4>
                  <ul>
                    <li> <a href="" > Bulls, Bears, IPOs, Dividence, and more </a> </li>
                    <li> <a href="" > Understanding Stock Price Movements </a> </li>
                  </ul>
                </div>
                <div className="block4 info-block">
                  <h4>How To Read Stock Chart & Trends</h4>
                  <ul>
                    <li> <a href="" > Basic technical analysis </a></li>
                    <li> <a href=""> How to spot patterns </a> </li>
                  </ul>
                </div>
                <div className="block4 info-block">
                  <h4>Common Mistakes Beginner Investors Make</h4>
                  <ul>
                    <li> <a href=""> Emotional investing </a> </li>
                    <li> <a href=""> Overtrading </a> </li>
                    <li> <a href=""> Ignoring risk management </a> </li>
                  </ul>
                </div>
              </div>

            </div>
          </li>
          <input type="search" placeholder="Search" className="search-box" />
          <li>
            <a href="#" id="PnP" >Plans & Pricing</a>
          </li>
          <li>
            <a href="#" id="cog-bizz">Cog Bizz</a>
          </li>
        </ol>
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32">
            <rect width="32" height="32" fill="none" />
            <path fill="#08144f" d="M29.02 11.754L8.416 9.474L7.16 4.715a.76.76 0 0 0-.727-.558H3.34a1.21 1.21 0 0 0-.963-.49a1.24 1.24 0 1 0 0 2.483c.4 0 .738-.2.965-.492h2.512l5.23 19.8a3.28 3.28 0 0 0-.89 2.242a3.29 3.29 0 0 0 3.292 3.293a3.296 3.296 0 0 0 3.297-3.293a3.2 3.2 0 0 0-.093-.743h5.533a3.3 3.3 0 0 0-.092.743c0 1.82 1.476 3.293 3.296 3.293S28.72 29.52 28.72 27.7a3.296 3.296 0 0 0-3.294-3.297c-.95 0-1.8.41-2.402 1.053h-7.136a3.28 3.28 0 0 0-2.402-1.053c-.38 0-.738.078-1.077.196l-.182-.686H26.81a2.5 2.5 0 0 0 2.39-1.96l1.575-7.798a2 2 0 0 0 .04-.414a1.995 1.995 0 0 0-1.795-1.988zm-3.592 16.24a.3.3 0 0 1-.297-.295c.003-.166.135-.298.298-.298s.295.132.297.297a.3.3 0 0 1-.297.294zm1.78-7.495l.948-.95l-.318 1.58zm-14.453-9.037L13.79 12.5l-1.29 1.29l-1.293-1.29l1.087-1.088zm4.498.498l.538.54l-1.29 1.29l-1.293-1.29l.688-.69l1.358.15zM9.63 14.076l.87-.868l1.29 1.292l-1.29 1.29l-.565-.563l-.304-1.152zm-.295-1.12l-.328-1.24l.785.785zM21.79 16.5l-1.29 1.29l-1.293-1.29l1.292-1.293zm-.583-2l1.292-1.292l1.29 1.292l-1.29 1.292zM18.5 15.79l-1.293-1.29l1.292-1.293l1.29 1.292zm-.71.71l-1.29 1.29l-1.292-1.29l1.292-1.293zm-3.29-.71l-1.293-1.29l1.292-1.293l1.29 1.292zm-.71.71l-1.29 1.29l-1.293-1.29l1.292-1.293zm-3.29.707l1.29 1.292l-.784.783l-.54-2.044l.033-.033zm.802 3.197l1.197-1.197l1.29 1.292l-1.29 1.29l-1.13-1.13zm1.906-1.905l1.29-1.293l1.293 1.292l-1.29 1.29l-1.292-1.29zm3.292.707l1.292 1.292l-1.292 1.29l-1.292-1.29zm.708-.708l1.292-1.293l1.29 1.292l-1.29 1.29zm3.29.707l1.293 1.292l-1.29 1.29l-1.292-1.292zm.71-.708l1.29-1.293l1.293 1.292l-1.29 1.29zm2-2l1.29-1.293l1.293 1.292l-1.29 1.29zm2-2l1.29-1.293L27.79 14.5l-1.29 1.292l-1.293-1.293zm-.71-.708l-1.155-1.156l2.082.23zM21.792 12.5l-1.29 1.292l-1.293-1.292l.29-.29l2.253.25zm-7.29-.71l-.152-.15l.273.03l-.12.12zm-4 .002l-.65-.65l1.17.13zm4 9.415l1.205 1.205h-2.41zm4 0l1.205 1.206h-2.412zm4 0l1.207 1.207h-2.414zm.707-.708l1.292-1.293l1.29 1.292l-1.29 1.29zm2-2l1.292-1.292l1.29 1.29l-1.29 1.293l-1.293-1.29zm3.292-.71l-1.292-1.29l1.29-1.292l.445.444l-.43 2.124l-.014.015zm.5-4.5l-.5.5l-.66-.657l1.017.112c.054.008.1.026.144.044zM13.488 27.993a.297.297 0 0 1 0-.593a.296.296 0 0 1 0 .591zm13.323-5.58h-1.517l1.207-1.207l.93.93c-.187.17-.423.29-.62.277" />
          </svg>
        </a>
        <button>
          <a href="login" className='Login' >Login</a>
        </button>
        <button>
          <a href="Sign-up" className='sign-up' >Sign Up</a>
        </button>
        <IconButton onClick={toggleDrawer(true)}>
          <AccountCircleIcon fontSize="large" />
        </IconButton>

        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <button className='drawer-links-button' ><a href="#" className='drawer-links' >Profile</a></button>
          <button className='drawer-links-button' ><a href="#" className='drawer-links' >Theme</a></button>
          <button className='drawer-links-button' ><a href="#" className='drawer-links' >Setings</a></button>
        </Drawer>
      </section>
    </div>
  );
};

export default Navbar;
