import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import Editcon from '@material-ui/icons/Edit'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'

interface IBookOptionsProps {
  onEdit: () => void,
  onDelete: () => void,
}

const BookOptions = ({ onEdit, onDelete }: IBookOptionsProps) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

    const onOptionsPress = (event: any) => {
      setAnchorEl(event.currentTarget)
    }

    const onClose = () => {
      setAnchorEl(null)
    }

    const onDeletePress = () => {
      onDelete()
      onClose()
    }

    const onEditPress = () => {
      onEdit()
      onClose()
    }

    return (
      <>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={onOptionsPress}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={onClose}
        >
            <MenuItem onClick={onEditPress}>
              <ListItemIcon>
                <Editcon fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit">Edit</Typography>
            </MenuItem>
            <MenuItem onClick={onDeletePress}>
              <ListItemIcon>
                <DeleteIcon fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit">Delete</Typography>
            </MenuItem>
        </Menu>
      </>
    )
}

export default BookOptions
