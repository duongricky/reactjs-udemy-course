import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        Are you sure you want to do this?
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Ngoc"
          timeAgo="Today at 4:45PM"
          content="This is so nice"
          avatar={ faker.image.avatar() }
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Thuong"
          timeAgo="Today at 4:45PM"
          content="This is so nice"
          avatar={ faker.image.avatar() }
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Phi"
          timeAgo="Today at 4:45PM"
          content="This is so nice"
          avatar={ faker.image.avatar() }
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))