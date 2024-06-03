import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookEdit({ book, onSubmit }) {

    //to handle input value we use useState() method, and book.title is used bcoz in form we bydefault shows current book title
    const [title, setTitle] = useState(book.title);

    const { editBookById } = useBooksContext();

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit();
        editBookById(book.id, title)
    };

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    return (
        <form className='book-edit' onSubmit={handleFormSubmit}>
            <label>Title</label>
            <input className='input' value={title} onChange={handleChange} />
            <button className='button is-primary'>
                Save
            </button>
        </form>
)}

export default BookEdit;