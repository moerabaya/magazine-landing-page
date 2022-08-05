import { TitleColor } from "../global/enums";

type TitleProps = {
	children: any,
	titleColor?: TitleColor,
	hasBorder?: Boolean
}

const Title = ({ children, titleColor = TitleColor.Regular, hasBorder = false }:TitleProps) => (
	<h2 className={`title ${titleColor ? titleColor + '-title' : ''} ${hasBorder ? 'has-border' : ''}`}>{children}</h2>
);

export default Title;