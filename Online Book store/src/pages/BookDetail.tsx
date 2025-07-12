import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, ArrowLeft, Calendar, FileText, Building } from 'lucide-react';
import { books } from '../data/books';
import { useCart } from '../contexts/CartContext';

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  
  const book = books.find(b => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Book not found</h1>
          <Link to="/" className="text-amber-600 hover:text-amber-700">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(book);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to books
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Book Image */}
            <div className="aspect-[3/4] lg:aspect-square overflow-hidden rounded-lg">
              <img
                src={book.imageUrl}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Book Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
                <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(book.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {book.rating} ({book.reviews.length} reviews)
                  </span>
                </div>

                <div className="text-3xl font-bold text-gray-900 mb-6">
                  ${book.price.toFixed(2)}
                </div>
              </div>

              {/* Book Details */}
              <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-200">
                <div className="flex items-center text-sm text-gray-600">
                  <Building className="h-4 w-4 mr-2" />
                  <span>{book.publisher}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{new Date(book.publishedDate).getFullYear()}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <FileText className="h-4 w-4 mr-2" />
                  <span>{book.pages} pages</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-medium">ISBN:</span>
                  <span className="ml-2">{book.isbn}</span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <ShoppingCart className="h-6 w-6" />
                <span>Add to Cart</span>
              </button>

              {/* Category Badge */}
              <div>
                <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  {book.category}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="px-8 pb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{book.description}</p>
          </div>

          {/* Reviews */}
          <div className="px-8 pb-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Reviews</h2>
            <div className="space-y-6">
              {book.reviews.map((review) => (
                <div key={review.id} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{review.userName}</h3>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;