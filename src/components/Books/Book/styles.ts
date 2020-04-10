import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  content: {
    flex: '1 0 auto',
    width: '100%'
  },
  cover: {
    width: 100,
    minWidth: 100,

    [theme.breakpoints.up('md')]: {
      width: 151,
      minWidth: 151,
    },
  },
  titleBox: {
    position: 'relative',
    paddingRight: 20
  },
  options: {
    position: 'absolute',
    right: -16,
    top: -12,
  },
  author: {
    marginBottom: 10
  },
  title: {
    textTransform: 'capitalize'
  }
}))