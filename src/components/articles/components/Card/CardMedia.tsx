import Star from "../../../../assets/svg/star.svg";
import PlayButton from "../../../../assets/svg/play-button.svg";
import { useContext } from 'react';
import { ThemeContext } from '../../../../App';
import { Item } from "../../../../global/interfaces";

export default ({isVideo, number, circle, img, img_alternate, rating}: Item) => {
	const {theme, setTheme} = useContext(ThemeContext);
	if (img)
		return (
			<div className={`card-media ${isVideo ? 'video-thumbnail' : ''}`}>
				{number && <span className="card-number">{number}</span>}
				<img className={`card-image ${circle && 'rounded'}`} src={img_alternate ? theme == "dark" ? img_alternate : img : img} alt="" />
				{rating && <span className="card-rating"><Star /> {rating}</span>}
				{isVideo && <PlayButton className="play-button" />}
			</div>
		)
	else
		return null;
}