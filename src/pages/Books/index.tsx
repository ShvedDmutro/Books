import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submit } from 'redux-form'
import { v4 as uuidv4 } from 'uuid'
import { requestBooks, updateBookList } from '../../store/books/actionCreators'
import IRootState from '../../types/IRootState'
import BookList from '../../components/Books/BookList'
import AddEditBookDialog from '../../components/Books/AddEditBookDialog'
import AddEditBookForm, { ADD_EDIT_BOOK_FORM } from '../../components/Forms/AddEditBookForm'
import useStyles from './styles'
import { IBook } from '../../types/IBook'
import { Button } from '@material-ui/core'

const Books = () => {
  const dispatch = useDispatch()
  const books = useSelector(({ books }: IRootState) => books.list)
  const [openAddEdit, setOpenAddEdit] = useState(false)
  const [selectedBook, setSelectedBook] = useState<IBook | null>(null)

  const classes = useStyles()

  useEffect(() => {
    dispatch(requestBooks())
  }, [])

  const onBookEditPress = (id: number) => {
    setOpenAddEdit(true)
    const book = books.find(item => item.id === id) || null
    setSelectedBook(book)
  }

  const closeModal = () => {
    setOpenAddEdit(false)
  }

  const onFormSubmit = (values: any) => {
    let list = []

    if (values.id) {
      const index = books.findIndex(el => el.id.toString() === values.id.toString())
      const book = {...books[index], ...values}
      list = [...books] // avoid mutation
      list.splice(index, 1, book);
    } else {
      list = [{
        id: uuidv4(),
        ...values
      }, ...books]
    }

    dispatch(updateBookList(list))
    setOpenAddEdit(false)
  }

  const onSavePress = () => {
    dispatch(submit(ADD_EDIT_BOOK_FORM))
  }

  const onAddBookPress = () => {
    setOpenAddEdit(true)
    setSelectedBook(null)
  }

  const initialValues = selectedBook
  
  if (initialValues) initialValues.date = initialValues.date.split('T')[0]

  return (
    <div>
      <div className={classes.addBook}>
        <Button onClick={onAddBookPress} className={classes.addButton} variant="outlined" color="primary">Add Book</Button>
      </div>
      <BookList books={books} onBookEdit={onBookEditPress} />
      <AddEditBookDialog 
        isOpen={openAddEdit}
        isEdit={!!selectedBook}
        title={selectedBook && selectedBook.title}
        onClose={closeModal} 
        onSave={onSavePress}
      >
          <div className={classes.form}>
            <AddEditBookForm
              onSubmit={onFormSubmit}  
              initialValues={initialValues || {}}
            />
          </div>
        </AddEditBookDialog>
    </div>
  )
}

export default Books
