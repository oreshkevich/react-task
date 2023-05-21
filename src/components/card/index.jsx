import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Button from 'react-bootstrap/Button';
import {fetchPosts} from '../../store/postReducer';

const CardPost = () => {
  const posts = useSelector((state) => state.postReducer.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <Row xs={1} sm={2} md={3} lg={4} className='g-4'>
      {posts.map((post, idx) => (
        <Col key={post.id}>
          <Card>
            <Card.Img
              onClick={() => dispatch(fetchPosts())}
              variant='top'
              max-height='200px'
              src='https://w7.pngwing.com/pngs/385/542/png-transparent-avatar-male-man-mature-old-person-user-user-pictures-icon.png'
            />
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
              <Button variant='secondary'>Secondary</Button>{' '}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardPost;
