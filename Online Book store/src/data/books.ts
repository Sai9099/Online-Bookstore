import { Book } from '../types';

export const books: Book[] = [
  {
    id: '1',
    title: 'The Art of Clean Code',
    author: 'Robert C. Martin',
    price: 29.99,
    description: 'A comprehensive guide to writing maintainable, readable, and robust code. This book teaches you the principles and practices of clean coding that will help you become a better programmer.',
    imageUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
    category: 'Technology',
    rating: 4.8,
    isbn: '978-0132350884',
    publisher: 'Prentice Hall',
    publishedDate: '2008-08-01',
    pages: 464,
    reviews: [
      {
        id: '1',
        userId: '1',
        userName: 'John Developer',
        rating: 5,
        comment: 'Excellent book for anyone serious about programming. The principles taught here are invaluable.',
        date: '2024-01-15'
      },
      {
        id: '2',
        userId: '2',
        userName: 'Sarah Code',
        rating: 4,
        comment: 'Great insights into writing better code. Some examples feel a bit dated but principles are timeless.',
        date: '2024-01-10'
      }
    ]
  },
  {
    id: '2',
    title: 'JavaScript: The Definitive Guide',
    author: 'David Flanagan',
    price: 39.99,
    description: 'The comprehensive reference and tutorial for JavaScript, covering everything from basic syntax to advanced features and modern JavaScript development.',
    imageUrl: 'https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg',
    category: 'Technology',
    rating: 4.6,
    isbn: '978-1491952023',
    publisher: "O'Reilly Media",
    publishedDate: '2020-05-01',
    pages: 688,
    reviews: [
      {
        id: '3',
        userId: '3',
        userName: 'Mike Frontend',
        rating: 5,
        comment: 'The ultimate JavaScript reference. Goes deep into every aspect of the language.',
        date: '2024-01-08'
      }
    ]
  },
  {
    id: '3',
    title: 'Design Patterns',
    author: 'Gang of Four',
    price: 34.99,
    description: 'The classic book on design patterns in object-oriented programming. Essential reading for software architects and developers.',
    imageUrl: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg',
    category: 'Technology',
    rating: 4.7,
    isbn: '978-0201633610',
    publisher: 'Addison-Wesley',
    publishedDate: '1994-10-21',
    pages: 395,
    reviews: [
      {
        id: '4',
        userId: '4',
        userName: 'Alex Architect',
        rating: 5,
        comment: 'Timeless patterns that every developer should know. Still relevant after all these years.',
        date: '2024-01-05'
      }
    ]
  },
  {
    id: '4',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    price: 16.99,
    description: 'Timeless lessons on wealth, greed, and happiness. This book explores the psychological aspects of financial decision-making.',
    imageUrl: 'https://images.pexels.com/photos/1370297/pexels-photo-1370297.jpeg',
    category: 'Finance',
    rating: 4.9,
    isbn: '978-0857197689',
    publisher: 'Harriman House',
    publishedDate: '2020-09-08',
    pages: 256,
    reviews: [
      {
        id: '5',
        userId: '5',
        userName: 'Emma Finance',
        rating: 5,
        comment: 'Life-changing book about money psychology. Easy to read and full of wisdom.',
        date: '2024-01-12'
      }
    ]
  },
  {
    id: '5',
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 18.99,
    description: 'An easy & proven way to build good habits & break bad ones. Learn how small changes can make a big difference.',
    imageUrl: 'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg',
    category: 'Self-Help',
    rating: 4.8,
    isbn: '978-0735211292',
    publisher: 'Avery',
    publishedDate: '2018-10-16',
    pages: 320,
    reviews: [
      {
        id: '6',
        userId: '6',
        userName: 'David Growth',
        rating: 5,
        comment: 'Practical and actionable advice on building better habits. Highly recommended!',
        date: '2024-01-14'
      }
    ]
  },
  {
    id: '6',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    price: 14.99,
    description: 'A magical and thought-provoking novel about life, regret, and the paths we choose. A journey through infinite possibilities.',
    imageUrl: 'https://images.pexels.com/photos/1370299/pexels-photo-1370299.jpeg',
    category: 'Fiction',
    rating: 4.5,
    isbn: '978-0525559474',
    publisher: 'Viking',
    publishedDate: '2020-08-13',
    pages: 288,
    reviews: [
      {
        id: '7',
        userId: '7',
        userName: 'Lisa Reader',
        rating: 4,
        comment: 'Beautiful story that makes you think about life choices. Emotional and uplifting.',
        date: '2024-01-11'
      }
    ]
  },
  {
    id: '7',
    title: 'Educated',
    author: 'Tara Westover',
    price: 17.99,
    description: 'A memoir about education, identity, and the power of learning. A remarkable story of transformation through knowledge.',
    imageUrl: 'https://images.pexels.com/photos/1370300/pexels-photo-1370300.jpeg',
    category: 'Biography',
    rating: 4.7,
    isbn: '978-0399590504',
    publisher: 'Random House',
    publishedDate: '2018-02-20',
    pages: 334,
    reviews: [
      {
        id: '8',
        userId: '8',
        userName: 'Robert Wisdom',
        rating: 5,
        comment: 'Incredible memoir that shows the transformative power of education. Beautifully written.',
        date: '2024-01-09'
      }
    ]
  },
  {
    id: '8',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    price: 16.99,
    description: 'A captivating novel about a reclusive Hollywood icon who finally decides to tell her story to a young journalist.',
    imageUrl: 'https://images.pexels.com/photos/1370301/pexels-photo-1370301.jpeg',
    category: 'Fiction',
    rating: 4.6,
    isbn: '978-1501161933',
    publisher: 'Atria Books',
    publishedDate: '2017-06-13',
    pages: 400,
    reviews: [
      {
        id: '9',
        userId: '9',
        userName: 'Maria Romance',
        rating: 5,
        comment: 'Absolutely captivating! Could not put this book down. Great character development.',
        date: '2024-01-07'
      }
    ]
  }
];

export const categories = ['All', 'Technology', 'Finance', 'Self-Help', 'Fiction', 'Biography'];