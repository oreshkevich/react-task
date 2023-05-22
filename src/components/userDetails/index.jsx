import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../../store/userReducer';
import {useParams, useNavigate} from 'react-router-dom';
import {fetchPosts} from '../../store/postReducer';
import Comments from '../comments';
import {fetchComments} from '../../store/commentReducer';
import Spinner from '../spinner';

const UserDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.userReducer.users);
  const posts = useSelector((state) => state.postReducer.posts);
  const comments = useSelector((state) => state.commentReducer.comments);

  const [onShow, setOnShow] = useState(false);
  const [onPostId, setOnPostId] = useState();
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    history('/');
  };

  const handleClickHide = () => {
    setOnShow(!onShow);
  };

  const getComments = (userId, postId) => {
    dispatch(fetchComments(userId));
    handleClickHide();
    setOnPostId(postId);
  };

  const UserItem = users.find(({id}) => {
    return id === +params.id;
  });

  const UserPosts = posts.filter(({userId}) => {
    return userId === +params.id;
  });

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      {users.length > 0 ? (
        <Row xs={1} sm={1} md={1} lg={1} className='g-4'>
          <Col key={UserItem.id}>
            <Card>
              <Card.Body>
                <Card.Title>name: {UserItem.name}</Card.Title>
                <Card.Title>username: {UserItem.username}</Card.Title>
                <Card.Text>email: {UserItem.email}</Card.Text>
                <Card.Text>city: {UserItem.address.city}</Card.Text>
                {UserPosts.map((post, idx) => (
                  <Col key={post.id}>
                    <Card>
                      <div>
                        <Card.Img
                          variant='start'
                          height='100px'
                          width='100px'
                          src='https://w7.pngwing.com/pngs/385/542/png-transparent-avatar-male-man-mature-old-person-user-user-pictures-icon.png'
                        />
                      </div>
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
                <Button
                  className='mt-3'
                  variant='danger'
                  onClick={handleSubmit}
                >
                  Go Back
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default UserDetails;
