import { CardSize, CardType, TitleColor } from './enums';
export interface Item {
	number?: number;
	img?: string;
	img_alternate?: string;
	label: string;
	description?: string;
	author?: string;
	rating?: number;
	video?: ItemVideo;
	title?: string;
	pre_title?: string;
	post_title?: string;
	size?: CardSize;
	circle?: boolean;
	centered?: boolean;
	items?: Item[];
	inverted?: boolean;
	isVideo?: boolean;
	isFullWidth?: boolean;
	type?: CardType;
}

export interface ItemVideo {
	"url": string,
	"thumbnail": string
}

export interface Sections {
	title?: string;
	title_color?: TitleColor;
	with_bg: boolean;
	items: Item[];
	type: CardType;
}

export interface MenuItem {
	title: string;
	url: string;
}