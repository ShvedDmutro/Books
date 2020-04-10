import React from 'react'
import { Container, CssBaseline } from '@material-ui/core'
import Header from '../common/Header'
import useStyles from './styles'

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <>
       <CssBaseline />
       <Header />
       <Container className={classes.container}>
          { children }
       </Container>
    </>
  )
}
export default Layout
