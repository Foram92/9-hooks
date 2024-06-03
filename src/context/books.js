import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider ({ children }) {

    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    };

    const editBookById = async (id, newTitle) => {
        //instead of ('http://localhost:3001/books'+id) we write following link
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });

        console.log(response.data);

        const updatedBook = books.map((book) => {
            if (book.id === id) {
                //here we have write ...response.data bcoz response.data will take all the updated values and put then into new book object with data, which are not going to edit
                return {...book, ...response.data};
                //return {...book, title:newTitle}
            }
            return book;
        });

        setBooks(updatedBook);
    };

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        });
        //console.log(response);
        
        const updatedBook = [...books, response.data];
            //[...books, 
            // {
            //     id: Math.round(Math.random () * 9999), 
            //     title
            // },];
        
        setBooks(updatedBook);
    };

    const deleteBookById = async (id) => {
        
        const response = await axios.delete(`http://localhost:3001/books/${id}`);

        const updatedBook = books.filter((book) => {
            return book.id !== id;
    });
        setBooks(updatedBook);
    };

    // const [count, setCount] = useState(0);

    // const valueToShare = {
    //     count,
    //     increamentCount: () => {
    //         setCount(count + 1);
    //     },
    // };

    const valueToShare = {
        books,
        fetchBooks,
        createBook,
        editBookById,
        deleteBookById
    }

    return (
        <BooksContext.Provider value={ valueToShare }>
            {children}
        </BooksContext.Provider>
    )
}

export {Provider};
export default BooksContext;