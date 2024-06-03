import useBooksContext from '../hooks/use-books-context';
import BookShow from './BookShow';

function BookList() {

    const { books } = useBooksContext();

    //const { count, increamentCount } = useContext(BooksContext);

    //map is used to list-down every book 
    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} />;
    });

return <div className='book-list'>
        {/* {count}
        <button onClick={increamentCount}>Click Me</button> */}
        {renderedBooks}
    </div>;
}

export default BookList;