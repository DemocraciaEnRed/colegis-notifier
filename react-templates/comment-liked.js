import React from 'react';
import ReactDom from 'react-dom/server';

const CommentLiked = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.author}</h3>
      <p>{props.comment}</p>
    </div>
  );
}

const App = (props) => {
  const html = ReactDom.renderToStaticMarkup(<CommentLiked {...props}/>);

  return html;
}

export default App;