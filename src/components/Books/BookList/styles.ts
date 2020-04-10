import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  item: {
    paddingBottom: 25,
    width: '100%',

    [theme.breakpoints.up('md')]: {
      width: '50%',
      paddingBottom: 30,
      paddingLeft: 15,
      paddingRight: 15,
    },
    [theme.breakpoints.up('lg')]: {
      width: '33.3%',
      paddingBottom: 20,
      paddingLeft: 10,
      paddingRight: 10,
    },
  }
}))