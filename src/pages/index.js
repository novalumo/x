import * as React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import intersectionObserver from '../js/observer'
import '../scss/main.scss'

const isBrowser = typeof window !== 'undefined'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
`

const Hero = styled.h1`
  font-family: 'Train One', cursive;
  font-size: 2.8rem;
`

const Lead = styled.p`
  font-family: 'Train One', cursive;
`

const Copyright = styled.small`
  color: #555;
  margin: 48px 0 0 0;
`

const Ib = styled.span`
  display: inline-block;
`


// markup
const IndexPage = () => {
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
        title="Coming soon..."
        meta={[
          { name: 'description', content: 'Coming soon...' },
          { name: 'robots', content: 'noindex,nofollow' }
        ]}
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
          <Container>
            <Hero className="animate" data-animation="title"><Ib>X Project</Ib> will start soon...</Hero>
            <Lead className="animate" data-animation="title">We are preparing for our new project.</Lead>
            <Copyright className="animate" data-animation="fade">&copy; Novalumo</Copyright>
          </Container>
          </div>
        </div>
      </div>
    </>
  )
}

if (isBrowser) {
  window.onload = () => {
    intersectionObserver()
  }
}

export default IndexPage
