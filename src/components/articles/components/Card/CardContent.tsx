import { CardSize, CardType } from "../../../../global/enums";
import { Item } from "../../../../global/interfaces";
import Label from "../Label";


export default ({label, pre_title, title, post_title, centered, description, author}: Item) => {
	return (
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
	)
}