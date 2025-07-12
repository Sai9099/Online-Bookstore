import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Looks like you haven't added any books to your cart yet.</p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={item.book.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-4">
                  <Link to={`/book/${item.book.id}`} className="flex-shrink-0">
                    <img
                      src={item.book.imageUrl}
                      alt={item.book.title}
                      className="w-20 h-28 object-cover rounded"
                    />
                  </Link>
                  
                  <div className="flex-1 min-w-0">
                    <Link to={`/book/${item.book.id}`}>
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-amber-700 transition-colors">
                        {item.book.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600">{item.book.author}</p>
                    <p className="text-lg font-bold text-gray-900 mt-2">
                      ${item.book.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.book.id, item.quantity - 1)}
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="font-medium text-gray-900 w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.book.id, item.quantity + 1)}
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.book.id)}
                    className="p-2 text-red-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.book.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.book.title} × {item.quantity}
                    </span>
                    <span className="font-medium">
                      ${(item.book.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full block text-center bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-colors"
              >
                Proceed to Checkout
              </Link>

              <Link
                to="/"
                className="w-full block text-center text-amber-600 hover:text-amber-700 mt-4 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;