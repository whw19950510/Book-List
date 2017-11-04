function selectBook(book)
{//return an action,an action with type property
    return {
        type:"BOOK_SELECTED",
        payload:book
    };
}

export default selectBook;