import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import styles from '@/styles/navbar.module.css';
import Button from '@mui/material/Button';
import Link from "next/link";
// Icons
import { IoEnter } from "react-icons/io5";
import { MdSportsBasketball } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { RiMovie2Line } from "react-icons/ri";
import { RiAliensLine } from "react-icons/ri";
import { SiYourtraveldottv } from "react-icons/si";
import { MdNightlife } from "react-icons/md";
import { SiDcentertainment } from "react-icons/si";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { BsInfoCircle } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { RiAdvertisementLine } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { LiaPodcastSolid } from "react-icons/lia";
import { IoNewspaperOutline } from "react-icons/io5";


function Sidebar() {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        color="inherit"
        className={styles.menuIcon}
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="end" // Adjusted edge to 'end'
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right" // Adjusted anchor to 'right'
        open={open}
        onClose={handleDrawerClose}
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronRightIcon />
          </IconButton>
        </div>

        <Divider />
        <List className={styles.sidebarList}>          

          <div className={styles.mobileSideBar}>          
            <ListItem onClick={handleDrawerClose}>
                <Link href=""><ListItemText primary={<><LiaPodcastSolid /> Podcast</>} /></Link>
            </ListItem>        
            <ListItem onClick={handleDrawerClose}>
                <Link href=""><ListItemText primary={<><IoNewspaperOutline /> News</>} /></Link>
            </ListItem>      
            <Divider className={styles.sidebarDivider} />
          </div>

          <ListItem onClick={handleDrawerClose}>
            <Link href=""><ListItemText primary={<><MdSportsBasketball /> Sport</>} /></Link>
          </ListItem>
          <ListItem onClick={handleDrawerClose}>
            <Link href=""><ListItemText primary={<><GrTechnology /> Technology</>} /></Link>
          </ListItem>
          <ListItem onClick={handleDrawerClose}>
            <Link href=""><ListItemText primary={<><RiMovie2Line /> Movies</>} /></Link>
          </ListItem>
          <ListItem onClick={handleDrawerClose}>
            <Link href=""><ListItemText primary={<><RiAliensLine /> Conspiracy</>} /></Link>
          </ListItem>
          <ListItem onClick={handleDrawerClose}>
            <Link href=""><ListItemText primary={<><SiYourtraveldottv /> Travel</>} /></Link>
          </ListItem>
          <ListItem onClick={handleDrawerClose}>
            <Link href=""><ListItemText primary={<><MdNightlife /> Lifestyle</>} /></Link>
          </ListItem>
          <ListItem onClick={handleDrawerClose}>
            <Link href=""><ListItemText primary={<><SiDcentertainment /> Entertainment</>} /></Link>
          </ListItem>
          <ListItem onClick={handleDrawerClose}>
            <Link href=""><ListItemText primary={<><FaPersonCircleQuestion /> Anonymous</>} /></Link>
          </ListItem>
          <ListItem onClick={handleDrawerClose}>
            <Link href=""><ListItemText primary={<><TiWeatherPartlySunny /> Weather</>} /></Link>
          </ListItem>
          <Divider className={styles.sidebarDivider} />
          <ListItem onClick={handleDrawerClose}>
            <Link href=""><ListItemText primary={<><BsInfoCircle /> About</>} /></Link>
          </ListItem>
          <ListItem onClick={handleDrawerClose}>
            <Link href=""><ListItemText primary={<><TiContacts /> Contacts</>} /></Link>
          </ListItem>
          <ListItem onClick={handleDrawerClose}>
            <Link href=""><ListItemText primary={<><RiAdvertisementLine /> Adversiment</>} /></Link>
          </ListItem>
          <ListItem onClick={handleDrawerClose}>
            <Button variant="contained" startIcon={<IoEnter />} size="small" className={styles.sidebarSignIn}>Sign In</Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Sidebar;
