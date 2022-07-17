import * as React from 'react';
import Container from '@mui/material/Container';
import AppBar from 'components/molecules/AppBar';

interface Props {
  hero?: React.ReactElement;
  footer?: React.ReactElement;
}

const styles = {
  hero: {
    height: '50vh',
    backgroundImage: 'url("https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")'
  },
  body: {
    minHeight: '40vh',
  },
  footer: {
    minHeight: '10vh',
  }
};

const LandingContainer: React.FunctionComponent<Props> = ({ hero, footer }) => {
  return (
    <>
      <AppBar />
      <Container style={styles.hero}>
        {hero}
      </Container>
      <Container style={styles.body} />
      <Container style={styles.footer} >
        {footer}
      </Container>
    </>
  );
}

export default LandingContainer
