import React from 'react';
import '../../../Design/Posts/PostDetail/PostDetail.scss';
import { Link } from 'react-router-dom';

class PostAuthor extends React.Component {
  render() {
    return (
      <div className='post-detail-author-box clearfix'>
        <div className='post-detail-author-box-left'>
          <img alt={'PENGUIN'} src={require('../images/penguin.png')} className='post-author-penguin'/>
        </div>
        <div className='post-detail-author-box-right'>
          <div className='post-detail-author-box-right-description'>
            <h3>K-Sato</h3>
            <p>
              I am a junior web-develope based somewhere on earth. Write Ruby as my primary lannguage and also use Javascript every now and then.
              RoR and React are my go-to Frameworks. Sometimes I play with Go language.
            </p>
            <Link to= {`/about`}>
              <button className="post-author-button">View Profile</button>
            </Link>
          </div>
        </div>

      </div>
    )
  }
}

export default PostAuthor;
