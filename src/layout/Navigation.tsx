import { CSSProperties, FC, useContext, useEffect, useRef, useState } from "react";
import Logo from "../assets/svg/logo.svg";
import BurgerIcon from "../assets/svg/burger-menu.svg";
import DarkMode from "../assets/svg/dark-mode.svg";
import menuData from "../data/MenuData.json";
import "./Navigation.scss";
import { MenuItem } from "../global/interfaces";
import { ThemeContext } from "../App";

const Component = ({children, className}: any) => (
	<li className={`${className}`}>
		{children}
	</li>
)

const Center = Component;
const Right = Component;
const Left = ({className}: any) => {
	const { theme, setTheme } = useContext(ThemeContext);
	const changeTheme = (e: any) => {
		const theme: any = document.documentElement.getAttribute("data-theme") ? document.documentElement.getAttribute("data-theme") : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light";
		document.documentElement.setAttribute("data-theme", theme == "dark" ? "light" : "dark")
		setTheme(theme == "dark" ? "light" : "dark");
	}

	return (
	<li className={`center-vertical ${className}`}>
		<a className="burger-menu">
			<BurgerIcon className="stroked" />
			<span className="menu-title">MENU</span>
		</a>
		<DarkMode onClick={(e) => changeTheme(e)} className="filled dark-mode" />
	</li>
)};


const Navigation: FC = () => {
	const [isSticky, setIsSticky]: any = useState(false);
	const stickyNavigation: any = useRef();
	const renderMenuList = () => {
		const menuList: any = [];
		menuData.map((page: MenuItem, index: number) => menuList.push(<li key={`menu-${page}-${index}`}><a href={page.url} className="hover">{page.title}</a></li>))
		return menuList;
	}
	useEffect(() => {
		function handleScroll() {
			const scrollTop = window.scrollY;
			if(stickyNavigation.current.offsetTop >= scrollTop){
				setIsSticky(false);
			} else {
				setIsSticky(true);
			}
		}
		window.addEventListener("scroll", handleScroll);
	}, []);

	
	return (
		<nav>
			<ul className="menu-list static-menu-list">
				<Left />
				<Center className="center-text">
					<Logo className="logo-icon" />
				</Center>
				<Right>
				</Right>
			</ul>
			<div ref={stickyNavigation} className="sticky-menu-list">
				<ul className={`menu-list ${isSticky ? "sticky" : ''}`}>
					<Left className="invisible" />
					<Center className="center-text links-list-container">
						<ul className="links-list">
							{renderMenuList()}
						</ul>
					</Center>
					<Right className="right-text invisible">
						<Logo width="90px" />
					</Right>
				</ul>
			</div>
		</nav>
	)
}

export default Navigation;