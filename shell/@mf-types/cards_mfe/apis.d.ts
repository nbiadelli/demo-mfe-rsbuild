
    export type RemoteKeys = 'cards_mfe/button';
    type PackageType<T> = T extends 'cards_mfe/button' ? typeof import('cards_mfe/button') :any;