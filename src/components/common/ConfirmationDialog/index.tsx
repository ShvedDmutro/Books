import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


interface IConfirmationDialogProps {
    title: string,
    description?: string, 
    isOpen: boolean,
    cancelLabel?: string,
    agreeLabel?: string,
    onClose: () => void,
    onConfirm: () => void,
}

const ConfirmationDialog = ({ title, description, agreeLabel, cancelLabel, isOpen, onClose, onConfirm }: IConfirmationDialogProps) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Dialog
            fullScreen={fullScreen}
            open={isOpen}
            onClose={onClose}
        >
            <DialogTitle>{title}</DialogTitle>
                {
                    description && (
                        <DialogContent>
                            <DialogContentText>
                                {description}
                            </DialogContentText>
                        </DialogContent>
                    )
                }
                <DialogActions>
                    <Button autoFocus onClick={onClose} color="primary">
                        { cancelLabel || 'Cancel'}
                    </Button>
                    <Button onClick={onConfirm} color="primary" autoFocus>
                        { agreeLabel || 'Agree'}
                    </Button>
            </DialogActions>
      </Dialog>
    )
}

export default ConfirmationDialog
