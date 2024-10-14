export type RemoteKeys = 'footer_mfe/Footer';
type PackageType<T> = T extends 'footer_mfe/Footer'
  ? typeof import('footer_mfe/Footer')
  : any;
