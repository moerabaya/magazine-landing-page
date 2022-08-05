
import Label from "../Label";
import Star from "../../../../assets/svg/star.svg";
import PlayButton from "../../../../assets/svg/play-button.svg";
import { Item, ItemVideo } from "../../../../global/interfaces";
import "./Card.scss";
import { CardSize, CardType } from "../../../../global/enums";
import { useContext } from 'react';
import { ThemeContext } from "../../../../App";

type CardProps = Item;

const Card = ({
	label,
	description,
	title,
	pre_title,
	img,
	img_alternate,
	author,
	centered = false,
	inverted = false,
	rating,
	circle,
	number,
	isVideo,
	isFullWidth,
	type,
	size,
	items,
	post_title
}: CardProps) => {
	const cardSize = size && size == CardSize.Small ? "small-card" : size == CardSize.Large ? "large-card" : "";
	const cardType = type && type == CardType.Horizontal ? "horizontal-card" : type == CardType.Story ? "story-card" : "";
	const {theme, setTheme} = useContext(ThemeContext);
	const renderMedia = () => (
		<div className={`card-media ${isVideo ? 'video-thumbnail' : ''}`}>
			{number && <span className="card-number">{number}</span>}
			<img className={`card-image ${circle && 'rounded'}`} src={img_alternate ? theme == "dark" ? img_alternate : img : img} alt="" />
			{rating && <span className="card-rating"><Star /> {rating}</span>}
			{isVideo && <PlayButton className="play-button" />}
		</div>
	)

	const renderContent = () => (
		<div className={`card-content ${centered ? "flex-center" : ""}`}>
			<Label>{label}</Label>
			{pre_title && <h5 className={`card-pre-title ${centered ? "center-text" : ""}`}>{pre_title}</h5>}
			{title && <h2 className={`card-title ${centered ? "center-text" : ""}`}>{title}</h2>}
			{post_title && <h5 className={`card-post-title ${centered ? "center-text" : ""}`}>{post_title}</h5>}
			<p className={`card-description ${centered ? "center-text" : ""}`}>
				{description}
			</p>
			{author && <small className="card-author">{author}</small>}
		</div>
	);

	const list = () => {
		const articles: any = [];
		items?.map(({label, ...rest}:Item, index: number) => articles.push(<Card key={label + index} label={label} isVideo={isVideo} isFullWidth={isFullWidth} type={type} {...rest}  />))
		return articles;
	}

	const renderArticle = (
		<article className={`vertical-card ${inverted ? "inverted" : ""} ${centered ? "flex-center" : ""} ${isFullWidth ? "full-width" : ""} ${cardSize} ${cardType}`}>
			{img && renderMedia()}
			{renderContent()}
		</article>
	);

	const renderArticlesList = (
		<div className="articles-list">{list()}</div>
	)
	return items ? renderArticlesList : renderArticle;
}

export default Card;