import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Book } from '../types';
import { useCart } from '../contexts/CartContext';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(book);
  };

  return (
    <Link to={`/book/${book.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={book.imageUrl}
            alt={book.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2 group-hover:text-amber-700 transition-colors">
            {book.title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{book.author}</p>
          
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 ml-1">{book.rating}</span>
            </div>
            <span className="text-xs text-gray-500 ml-2">
              ({book.reviews.length} reviews)
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">
              ${book.price.toFixed(2)}
            </span>
            <button
              onClick={handleAddToCart}
              className="flex items-center space-x-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:from-amber-700 hover:to-orange-700 transition-colors shadow-md hover:shadow-lg"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;