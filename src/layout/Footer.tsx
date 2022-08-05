import data from "../data/FooterData.json";
import "./Footer.scss";

const FooterList = () => {
	const Link = ({title, url}: any) => (
		<li className="link">
			<a className="hover" href={url}>{title}</a>
		</li>
	)
	const Header = ({title}: any) => (
		<li className="title">
			{title}
		</li>
	)
	const Newsletter = ({placeholder, description, submit}: any) => (
		<div className="newsletter">
			<p className="bold">
				{description}
			</p>
			<form>
				<input placeholder={placeholder} />
				<button title={submit} type="submit">{submit}</button>
			</form>
		</div>
	)
	const Content = ({data}: any) => {
		switch (data.type) {
			case "list":
				return (
					data.list.map((link: any) => <Link key={`page-${link.title}`} title={link.title} url={link.url} />)
				)
			case "newsletter":
				return (<Newsletter placeholder={data.placeholder} description={data.description} submit={data.submit} />)
			case "space":
				return null;
		}
	}
	return (
		<ul className="footer-columns">
			{data.footerList.map((item: any, index: number) => (
				<li key={`footer-column-${item.title}-${index}`}>
					<ul className={`footer-list ${item.type}`}>
						<Header title={item.title} />
						<Content data={item}/>
					</ul>
				</li>
			))}
		</ul>
	)
}

const FooterPages = () => (
	<ul className="footer-pages">
		{data.footerPages.map((page: any, index: number) => (
			<li key={`page-${page.title}-${index}`}><a className="hover uppercase bold" href={page.url}>{page.title}</a></li>
		))}
	</ul>
)
const Footer = () => {
	return (
		<footer>
			<FooterList />
			<FooterPages />
			<hr />
		</footer>
	)
}

export default Footer;