import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import BookOptions from '../BookOptions'
import { IBook } from '../../../types/IBook'
import { cleanTitle } from '../../../utils/texts'
import useStyles from './styles'

interface IBookProps extends IBook {
  onDelete: (id: number) => void,
  onEdit: (id: number) => void
}

const Book = ({ id, title, author, date, image, onDelete, onEdit }: IBookProps) => {
    const classes = useStyles()
    const formatedDate = new Date(date).toLocaleDateString()

    const onEditPress = () => {
      onEdit(id)
    }

    const onDeletePress = () => {
      onDelete(id)
    }

    return (
      <Card className={classes.root}>
        {
          image && (
            <CardMedia
              className={classes.cover}
              image={image}
              title={title}
            />
          )
        }
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div className={classes.titleBox}>
              <div className={classes.options}><BookOptions onEdit={onEditPress} onDelete={onDeletePress} /></div>
              <Typography className={classes.title} component="h5" variant="subtitle1"><strong>{ cleanTitle(title) }</strong></Typography> 
            </div>  
            <div className={classes.author}>
              <Typography variant="subtitle2" display="inline">Author: </Typography>
              <Typography variant="subtitle2" color="textSecondary" display="inline">{ author }</Typography>
            </div>
            <div>
              <Typography variant="subtitle2" display="inline">Published: </Typography>
              <Typography variant="subtitle2" color="textSecondary" display="inline">{ formatedDate }</Typography>
            </div>
          </CardContent>
        </div>
      </Card>
    )
}

export default Book
