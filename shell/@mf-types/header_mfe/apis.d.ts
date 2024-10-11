
    export type RemoteKeys = 'header_mfe/Button' | 'header_mfe/Navbar';
    type PackageType<T> = T extends 'header_mfe/Navbar' ? typeof import('header_mfe/Navbar') :T extends 'header_mfe/Button' ? typeof import('header_mfe/Button') :any;