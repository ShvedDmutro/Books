import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IBook } from '../../../types/IBook'
import Book from '../Book'
import ConfirmationDialog from '../../common/ConfirmationDialog'
import { updateBookList } from '../../../store/books/actionCreators'
import useStyles from './styles'

interface IBookListProps {
  books: IBook[],
  onBookEdit: (id: number) => void
}

const BookList = ({ books, onBookEdit }: IBookListProps) => {
    const dispatch = useDispatch()
    
    const [openConfirmModal, setOpenConfirmModal] = useState<boolean>(false)
    const [selectedBookId, setSelectedBookId] = useState<number | null>(null)

    const classes = useStyles()

    const onEditPress = (id: number) => {
      onBookEdit(id)
    }

    const onDeletePress = (id: number) => {
      setOpenConfirmModal(true)
      setSelectedBookId(id)
    }

    const onDeleteConfirmPress = () => {
      setOpenConfirmModal(false)
      if(selectedBookId) {
        const list = books.filter((book: IBook) => book.id !== selectedBookId)
        dispatch(updateBookList(list))
      }
    }

    const onCloseModalPress = () => {
      setOpenConfirmModal(false)
      setSelectedBookId(null)
    }

    return (
      <div className={classes.root}>
        {
          books.map((item: IBook) => (
              <div className={classes.item} key={item.id}>
                <Book 
                  {...item}
                  onEdit={onEditPress}
                  onDelete={onDeletePress}
                /> 
              </div>  
          ))
        }
        <ConfirmationDialog 
          title="Are you sure?"
          description="Are you sure that you whant to delete the book?"
          isOpen={openConfirmModal} 
          onConfirm={onDeleteConfirmPress} 
          onClose={onCloseModalPress} 
        />
      </div>
  )
}

export default BookList
