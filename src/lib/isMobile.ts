import { getContext, setContext } from 'svelte';

const IS_MOBILE_CTX = Symbol('isMobile');

export type IsMobileContext = {
	get current(): boolean;
};

export function setIsMobileContext(value: IsMobileContext) {
	setContext(IS_MOBILE_CTX, value);
}

export function getIsMobileContext(): IsMobileContext {
	return getContext<IsMobileContext>(IS_MOBILE_CTX);
}
