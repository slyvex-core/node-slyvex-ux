export * from './flow-ux.js';

import {SlyvexWalletDesktop} from './slyvex-wallet-desktop.js';
import {SlyvexWalletMobile, isMobile, dontInitiatedComponent} from './slyvex-wallet-mobile.js';

if(isMobile)
	document.body.classList.add('is-mobile');
export {isMobile}

export const SlyvexWallet = isMobile ? SlyvexWalletMobile : SlyvexWalletDesktop;

if(!dontInitiatedComponent)
	SlyvexWallet.define("slyvex-wallet");
