export type RemoteKeys = 'header_mfe/Navbar';
type PackageType<T> = T extends 'header_mfe/Navbar'
  ? typeof import('header_mfe/Navbar')
  : any;
