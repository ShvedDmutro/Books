import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  form: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 360
    }
  },
  addBook: {
    marginBottom: 20,
    padding: '15px 0px',
    textAlign: 'right',

    [theme.breakpoints.up('md')]: {
      padding: 15,
    }
  },

  addButton: {
    width: 300,
    maxWidth: '100%',
  }
}))