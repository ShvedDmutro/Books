import client from '../utils/api';

export const requestBooks = () => client.get('books.json');
