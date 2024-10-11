
    export type RemoteKeys = 'cards_mfe/Cards';
    type PackageType<T> = T extends 'cards_mfe/Cards' ? typeof import('cards_mfe/Cards') :any;