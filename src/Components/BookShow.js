import { useState } from 'react';
import BookEdit from './BookEdit';
import useBooksContext from '../hooks/use-books-context';

function BookShow({ book }) {

    //bydefault it is false bcoz we don't want to see edit form first
    const [showEdit, setShowEdit] = useState(false);

    const { deleteBookById } = useBooksContext();

    //this is toggle button when click edit shows, then again click edit gone
    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    //here we send id to App.js to delete the book if user will click on delete button
    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };

    const handleSubmit = () => {
        setShowEdit(false);
    }

    //by default it will shows book title on the book, but if user clicks on edit button then it will open edit form, so here it will goes to BookEdit page
    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book} />;
    };

    return (
        <div className="book-show">
            <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`}></img>
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
)}

export default BookShow;