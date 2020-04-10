import { IBook } from './IBook';

export interface IBooksState {
    list: IBook[],
    isLoading: boolean
}