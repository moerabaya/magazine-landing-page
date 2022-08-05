import Template from "../../assets/images/vertical-card-template.jpg";
import { CardType, TitleColor } from "../../global/enums";
import { Item, Sections } from "../../global/interfaces";
import Title from "../Title";
import "./Articles.scss";
import Card from "./components/Card";

type ArticleProps = Sections;

export default ({items, title, title_color, with_bg = false, type = CardType.Vertical}: ArticleProps) => {
	const renderCards = () => {
		const cards: any = [];
		items?.map(({label, ...rest}: Item, index: number) => {
			cards.push (
				<Card key={label + index} label={label} type={type} {...rest}  />
			)
		});
		return cards
	}
	return (
		<div className="articles-container">
			{title && <Title hasBorder={true} titleColor={title_color}>{title}</Title>}
			<div className={`articles-wrapper ${with_bg ? "with-bg" : ""}`} >
				{renderCards()}
			</div>
		</div>)
}