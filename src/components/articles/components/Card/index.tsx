
import { Item } from "../../../../global/interfaces";
import "./Card.scss";
import { CardSize, CardType } from "../../../../global/enums";
import CardMedia from "./CardMedia";
import CardContent from "./CardContent";

type CardProps = Item;

const Card = (props: CardProps) => {
	const cardSize = props.size && props.size == CardSize.Small ? "small-card" : props.size == CardSize.Large ? "large-card" : "";
	const cardType = props.type && props.type == CardType.Horizontal ? "horizontal-card" : props.type == CardType.Story ? "story-card" : "";

	const list = () => {
		const articles: any = [];
		props.items?.map(({label, ...rest}:Item, index: number) => articles.push(<Card key={label + index} label={label} isVideo={props.isVideo} isFullWidth={props.isFullWidth} type={props.type} {...rest}  />))
		return articles;
	}

	const renderArticle = (
		<article className={`vertical-card ${props.inverted ? "inverted" : ""} ${props.centered ? "flex-center" : ""} ${props.isFullWidth ? "full-width" : ""} ${cardSize} ${cardType}`}>
			<CardMedia {...props} />
			<CardContent {...props} />
		</article>
	);

	const renderArticlesList = (
		<div className="articles-list">{list()}</div>
	)
	return props.items ? renderArticlesList : renderArticle;
}

export default Card;