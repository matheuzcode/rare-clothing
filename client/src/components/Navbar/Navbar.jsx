import React, {useState} from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "react-router-dom";
import "./Navbar.scss"
import Cart from '../Cart/Cart.jsx'
import { useSelector } from 'react-redux'

const Navbar = () => {

	const [open, setOpen] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const products = useSelector((state) => state.cart.products);

	
	return (
		<>

		{openModal &&
		<div className='background'></div>
		}
		
		<div className="navbarHidden">
			<CloseIcon className="close" onClick={() => setOpenModal(false)} style={openModal ? {display: 'block'} : {display: 'none'}}/>
      <div className="rightH" style={openModal ? {right: '0px'} : {right: '-283px'}}>    
        <div className="rightItem">
          <Link className="link" to="/">Homepage</Link>
        </div>
        <div className="rightItem">
          <Link className="link" to="/">About</Link>
        </div>
        <div className="rightItem">
          <Link className="link" to="/">Contact</Link>
        </div>
        <div className="rightItem">
          <Link className="link" to="/">Stores</Link>
        </div>
      </div>
    </div>
		

		<div className="navbar">
			<div className="wrapper">

						<div className="left">
						<div className="item">
							<Link className="link" to="/products/1">Women</Link>
						</div>
						<div className="item">
							<Link className="link" to="/products/2">Men</Link>
						</div>
						<div className="item">
							<Link className="link" to="/products/3">Children</Link>
						</div>							 																																 																						
					</div>
					
					<div className="center">
						<Link className="link" to="/">RARE</Link>
					</div>

					<div className="right">
						<div className="rightHidden">
							<div className="item">
								<Link className="link" to="/">Homepage</Link>
							</div>
							<div className="item">
								<Link className="link" to="/">About</Link>
							</div>
							<div className="item">
								<Link className="link" to="/">Contact</Link>
							</div>
							<div className="item">
								<Link className="link" to="/">Stores</Link>
							</div>
						</div>
						
						<div className="icons">
								<MenuIcon onClick={() => setOpenModal(true)} className="menuIcon"/>
		            <div className="cartIcon" onClick={() => setOpen(!open)}>
		              <ShoppingCartOutlinedIcon/>
		              <span>{products.length}</span>
		            </div>
	          	</div>
					</div>	
				
			</div>
			{open && <Cart />}	
		</div>
		</>
	)
}

export default Navbar
