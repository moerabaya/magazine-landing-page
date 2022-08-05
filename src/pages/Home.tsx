import Article from "../components/articles"
import dataJson from "../data/Sections.json";
import { TitleColor } from "../global/enums";
import { Item, Sections } from "../global/interfaces";

const data: Sections[] = dataJson as Sections[];
const Home = () => {
	const renderArticles = () => {
		const articles: any = [];
		data.map(({title, ...rest}: Sections) => articles.push(
			<Article key={`article-section-${title}`} title={title} {...rest}  />
		))
		return articles;
	}
	return (
		<div>
			{renderArticles()}
		</div>
	)
}

export default Home;