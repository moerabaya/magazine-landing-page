import { LabelSize } from "../../../../global/enums";

type LabelProps = {
	children: any,
	size?: LabelSize,
	className?: string
}
export default ({children, className = "", size = LabelSize.Regular}: LabelProps) => {
	return (
		<span className={`card-label ${className} ${size}`}>{children}</span>
	)
}