import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

interface IAddEditBookDialogProps {
    isOpen: boolean,
    isEdit?: boolean,
    title?: string | null,
    children: any,
    onClose: () => void,
    onSave: () => void,
}

const AddEditBookDialog = ({ isEdit, title, isOpen, onClose, onSave, children }: IAddEditBookDialogProps) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Dialog
            fullScreen={fullScreen}
            open={isOpen}
            onClose={onClose}
        >
            <DialogTitle>{ isEdit ? `Edit - ${title}` : 'Ceate new book' }</DialogTitle>
                <DialogContent>{ children }</DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={onClose} color="primary">Cancel</Button>
                    <Button onClick={onSave} color="primary" autoFocus>Save</Button>
            </DialogActions>
      </Dialog>
    )
}

export default AddEditBookDialog
