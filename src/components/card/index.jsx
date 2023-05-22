import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Button from 'react-bootstrap/Button';
import {fetchPosts} from '../../store/postReducer';
import {fetchComments} from '../../store/commentReducer';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import './style.css';
import Comments from '../comments';
import Spinner from '../spinner';

const CardPost = () => {
  const [onShow, setOnShow] = useState(false);
  const [onPostId, setOnPostId] = useState();

  const handleClickHide = () => {
    setOnShow(!onShow);
  };

  const posts = useSelector((state) => state.postReducer.posts);
  const comments = useSelector((state) => state.commentReducer.comments);

  const dispatch = useDispatch();

  const getComments = (userId, postId) => {
    dispatch(fetchComments(userId));
    handleClickHide();
    setOnPostId(postId);
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <>
      {posts.length > 0 ? (
        <Row xs={1} sm={1} md={1} lg={1} className='g-4'>
          {posts.map((post, idx) => (
            <Col key={post.id}>
              <Card>
                <Link to={`/user/${post.userId}`}>
                  <div className='photo' data-title={`User ${post.userId}`}>
                    <Card.Img
                      variant='top'
                      height='100px'
                      width='100px'
                      src='https://w7.pngwing.com/pngs/385/542/png-transparent-avatar-male-man-mature-old-person-user-user-pictures-icon.png'
                    />
                  </div>
                </Link>
                <Card.Body>
                  <Card.Title>{post.title}</Card.Title>
                  <Card.Text>{post.body}</Card.Text>
                  <Button
                    variant='secondary'
                    onClick={() => getComments(post.userId, post.id)}
                  >
                    Comments
                  </Button>
                  {post.id === onPostId && onShow ? (
                    <Comments comments={comments} />
                  ) : null}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CardPost;
