import Card from 'react-bootstrap/Card';
import avatar from '../../assets/img/i.jpg';
import './style.css';
import ListGroup from 'react-bootstrap/ListGroup';

const AboutMe = () => {
  return (
    <Card>
      <Card.Body className='content'>
        <ListGroup className='content-header'>
          <img className='content-img' src={avatar} alt='avatar' />
          <Card.Title className='subtitle'>My name is</Card.Title>
          <Card.Title className='title'>
            Gennady Arashkevich <br />
            <span> I’m Web Developer</span>
          </Card.Title>
        </ListGroup>

        <ListGroup className='text'>
          <Card.Title>Contacts:</Card.Title>
          <Card.Link href='mailto:oreshka85@tut.by' class='info'>
            oreshka85@tut.by
          </Card.Link>
        </ListGroup>
        <ListGroup className='text'>
          <Card.Title>Education:</Card.Title>
          <Card.Title>
            Belarusian State Technological University, Minsk
          </Card.Title>
          <Card.Title>
            International Institute of Economics and Law, Moscow
          </Card.Title>
        </ListGroup>
        <Card.Link
          className='btn'
          href='https://app.rs.school/certificate/sats5d7f'
        >
          REACT 2022 Q1 (JAVASCRIPT)
        </Card.Link>
        <Card.Link
          className='btn'
          href='https://app.rs.school/certificate/h8vdztvr'
        >
          JS/FE PRE-SCHOOL (JAVASCRIPT)
        </Card.Link>
        <Card.Link className='btn' href='https://github.com/oreshkevich'>
          github.com
        </Card.Link>
        <Card.Link
          className='btn'
          href='•	https://oreshkevich.github.io/portfolio/'
        >
          portfolio
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default AboutMe;
