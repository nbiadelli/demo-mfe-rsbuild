
    export type RemoteKeys = 'header_mfe/button';
    type PackageType<T> = T extends 'header_mfe/button' ? typeof import('header_mfe/button') :any;