
    export type RemoteKeys = 'footer_mfe/button';
    type PackageType<T> = T extends 'footer_mfe/button' ? typeof import('footer_mfe/button') :any;