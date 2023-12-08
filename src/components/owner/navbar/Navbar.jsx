import  { React, useState, useEffect } from "react";
import axios from "axios";
import "./navbar.css";
import { ImStatsDots } from "react-icons/im";
import { RxDashboard } from "react-icons/rx";
import { BiUser, BiLogOut } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import logo from '../../../assets/logo.png';
import profile from '../../../assets/profile.png';



const Navbar = () => {

	const [userInfo, setUserInfo] = useState(null);
	const [message, setMessage] = useState('');

	axios.defaults.withCredentials = true;
  
	useEffect(() => {
	  axios
		.get("http://188.213.25.184:8081/api/userInfo")
		.then((res) => {
		  if (res.data.id) {
			setUserInfo(res.data); // Stockage des informations utilisateur
		  } else {
			setMessage(res.data.Error);
		  }
		})
		.catch((err) => console.log(err));
	}, []);

	const handleDelete = () => {
		axios.get('http://188.213.25.184:8081/logout')
		.then(res => {
		  window.location.reload();
		}).catch(err => console.log(err));
	  }

	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Dashboard",
			icon: "icons/grid.svg",
		},
		{
			text: "Admin Profile",
			icon: "icons/user.svg",
		},
		{
			text: "Messages",
			icon: "icons/message.svg",
		},
		{
			text: "Analytics",
			icon: "icons/pie-chart.svg",
		},
		{
			text: "File Manager",
			icon: "icons/folder.svg",
		},
		{
			text: "Orders",
			icon: "icons/shopping-cart.svg",
		},
		{
			text: "Saved Items",
			icon: "icons/heart.svg",
		},
		{
			text: "Settings",
			icon: "icons/settings.svg",
		},
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src={logo} alt="" srcset="" />
						</div>
					)}
					<button
						className={
							isExpanded ? "dir dir-in" : "dir dir-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					<a
						className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
						href="#"
					>
						<span className="admin__icon"><RxDashboard /></span>
						{isExpanded && <p>dashboard</p>}
					</a>

					<a
						className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
						href="#"
					>
						<span className="admin__icon"><ImStatsDots /></span>
						{isExpanded && <p>statistics</p>}
					</a>

					<a
						className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
						href="#"
					>
						<span className="admin__icon"><BiUser /></span>
						{isExpanded && <p>manage Users</p>}
					</a>

					<a
						className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
						href="#"
					>
						<span className="admin__icon"><BiUser /></span>
						{isExpanded && <p>manage team</p>}
					</a>

					<a
						className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
						href="#"
					>
						<span className="admin__icon"><FiEdit /></span>
						{isExpanded && <p>Edit site</p>}
					</a>

				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img className="nav-details-img" src={profile} alt="" />
						<h1><span>{userInfo ? userInfo.name : "Loading..."}</span></h1>
					</div>
				)}
				<span className="logout-icon" onClick={handleDelete}><BiLogOut /></span>
			</div>
		</div>
	);
};

export default Navbar;
