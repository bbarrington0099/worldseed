import { GetColorName } from "hex-color-to-color-name";

export class Color {
	private hex: string;
	private name: string;

	constructor(hex: string) {
		this.hex = this.formatHexString(hex);
		this.name = this.formatNameString(GetColorName(this.formatHexValue(hex)));
	}

	public setColor(hex: string) {
		this.hex = this.formatHexString(hex);
		this.name = this.formatNameString(GetColorName(this.formatHexValue(hex)));
	}

	public setHex(hex: string) {
		this.hex = this.formatHexString(hex);
	}

	public setName(name: string) {
		this.name = this.formatNameString(name);
	}

	public getHexString() {
		return this.hex;
	}

	public getHexValue() {
		return this.formatHexValue(this.hex);
	}

	public getName() {
		return this.name;
	}

	public toString() {
		return `${this.name}: ${this.hex}`;
	}

	private formatNameString(name: string) {
		return name.trim().toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
	}

	private formatHexString(hex: string) {
		if (hex.startsWith('#')) {
			return hex;
		}
		return `#${hex}`;
	}

	private formatHexValue(hex: string) {
		if (hex.startsWith('#')) {
			return hex.slice(1);
		}
		return hex;
	}
}

export const Colors = {
	BLACK: new Color('000000'),
	DARK_BLUE: new Color('00008B'),
	BLUE: new Color('0000FF'),
	GREEN: new Color('008000'),
	DARK_PURPLE: new Color('4B0082'),
	BROWN: new Color('654321'),
	STEEL_GRAY: new Color('71797E'),
	GRAY: new Color('808080'),
	LIGHT_BLUE: new Color('87CEEB'),
	CRIMSON: new Color('8B0000'),
	SICKLY_GREEN: new Color('A9BA9D'),
	SILVER: new Color('C0C0C0'),
	MAUVE: new Color('E0B0FF'),
	PLATINUM: new Color('E5E4E2'),
	PALE_GOLD: new Color('EEE8AA'),
	GOLD: new Color('EFBF0A'),
	BONE_WHITE: new Color('F9F6EE'),
	RED: new Color('FF0000'),
	ORANGE: new Color('FFA500'),
	PINK: new Color('FFC0CB'),
	YELLOW: new Color('FFFF00'),
	WHITE: new Color('FFFFFF'),
	COAL_RANK: new Color('2C2C2C'),
	COPPER_RANK: new Color('B87333'),
	IRON_RANK: new Color('708090'),
	SILVER_RANK: new Color('C0C0C0'),
	GOLD_RANK: new Color('FFD700'),
	PLATINUM_RANK: new Color('E5E4E2'),
	MITHRAL_RANK: new Color('B0C4DE'),
}