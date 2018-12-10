import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          Are you sure you want to see a hog?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Sam"
          timeAgo="Today at 2:00am"
          text="Lemme see your hog"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Boi"
          timeAgo="Yesterday at 8:00pm"
          text="Lemme see that hog"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Helga"
          timeAgo="Yesterday at 5:00pm"
          text="I want to see your hog."
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
