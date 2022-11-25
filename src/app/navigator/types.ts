
export enum HOME_ROUTER {
  LOGIN = 'LOGIN',
  HOME = 'HOME',
  HOME_GET_PRODUCT = 'HOME_GET_PRODUCT',
  HOME_POST_PRODUCT = 'HOME_POST_PRODUCT',
}

export type HomeStackParamList = {
  [HOME_ROUTER.LOGIN]: undefined;
  [HOME_ROUTER.HOME]: undefined;
  [HOME_ROUTER.HOME_POST_PRODUCT]: undefined;
  [HOME_ROUTER.HOME_GET_PRODUCT]: undefined
};