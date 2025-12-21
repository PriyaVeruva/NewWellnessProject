import { useState } from "react";
import { Link } from "react-router-dom";
import { headerMenu } from "./data";
import "./Header.css";
const Header = () => {
	const [open, setOpen] = useState(false);
	const handleClose = () => {
		setOpen(!open);
	};
	return (
		<header>
			<div className="header-container">
				{/* Branding */}
				<div className="logo">
					<Link to="/">
						<img
							src="https://mairawellness.com/wp-content/uploads/2025/06/Maira_Logo-removebg-preview.png"
							loading="lazy"
						/>
					</Link>
				</div>

				{/* Hamburger Icon (Mobile) */}
				<button
					className="menu-toggle"
					onClick={() => setOpen(!open)}
				>
					☰
				</button>

				{/* Navigation */}
				<nav className={open ? "nav open" : "nav"}>
					{open ? (
						<span className="close_btn" onClick={handleClose}>
							X
						</span>
					) : (
						""
					)}
					<ul>
						{headerMenu.map((item) => (
							<li key={item.label}>
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
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
