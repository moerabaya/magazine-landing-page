import Footer from "./Footer";
import Navigation from "./Navigation";
type LayoutProps = {
	children: any
}
const Layout = ({children}: LayoutProps) => {
	return (
		<div className="layout container">
			<Navigation />
			<hr />
			{children}
			<hr />
			<Footer />
		</div>
	)	
}

export default Layout;