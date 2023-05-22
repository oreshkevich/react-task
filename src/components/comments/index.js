import Spinner from '../spinner';
import './style.css';

const Comments = (props) => {
  return (
    <>
      {props.comments.length > 0 ? (
        <div className='comments'>
          {props.comments.map((item) => (
            <div key={item.id} className='user'>
              <div className='comments-number'>№ {item.id}</div>
              <ul className='comments-users'>
                <li>
                  email:<span> {item.email}</span>
                </li>
                <li>
                  body: <span>{item.body}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Comments;
