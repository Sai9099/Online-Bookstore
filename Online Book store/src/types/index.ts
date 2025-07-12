export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  rating: number;
  reviews: Review[];
  isbn: string;
  publisher: string;
  publishedDate: string;
  pages: number;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  book: Book;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isAuthenticated: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  date: string;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
}