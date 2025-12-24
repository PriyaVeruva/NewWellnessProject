import { useState } from "react";
import { Link } from "react-router-dom";
import { headerMenu } from "./data";
import "./Header.css";
import headerLogo from "../../assets/header/wellness.png";
const Header = () => {
	const [open, setOpen] = useState(false);
	const [activeMenu, setActiveMenu] = useState(null);
	const closeBackdrop = () => {
		setActiveMenu(null);
	};
	return (
		<header>
			<div className="header-container">
				{/* Logo */}
				<div className="logo">
					<Link to="/">
						<img src={headerLogo} loading="lazy" />
					</Link>
				</div>

				<button
					className="menu-toggle"
					onClick={() => setOpen(!open)}
				>
					☰
				</button>

				<nav className={open ? "nav open" : "nav"}>
					<ul>
						{headerMenu.map((item) => (
							<li key={item.label}>
								{item.dropdown ? (
									<Link
										to={item.link}
										className={
											item.highlight
												? "highlight-btn"
												: ""
										}
										onClick={() =>
											setActiveMenu(item)
										}
									>
										{item.label} ▾
									</Link>
								) : (
									<Link
										to={item.link}
										className={
											item.highlight
												? "highlight-btn"
												: ""
										}
									>
										{item.label}
									</Link>
								)}
							</li>
						))}
					</ul>
				</nav>
			</div>

			{/* BACKDROP + DROPDOWN PANEL */}
			{activeMenu && (
				<>
					<div
						className="header-backdrop"
						onClick={closeBackdrop}
					/>

					<div className="menu-panel">
						<h3>{activeMenu.label}</h3>
						<ul>
							{activeMenu.dropdown.map((sub) => (
								<li key={sub.label}>
									<Link
										to={sub.link}
										onClick={closeBackdrop}
									>
										{sub.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</>
			)}
		</header>
	);
};

export default Header;
