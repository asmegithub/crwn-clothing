/** @format */

import React from "react";
import { Route, Link } from "react-router-dom";
const HomePage = (props) => {
  console.log(props);
  return (
    <div>
      {/* these to routes are the same !(link and button)! */}
      <Link to="/topics">Topics-link</Link>
      <button onClick={() => props.history.push("/topics")}>Topics</button>
      <h1>Home Page</h1>
    </div>
  );
};
const TopicList = (props) => {
  console.log(props);
  return (
    <div>
      <h1> Topic List</h1>
      <Link to={`${props.match.url}/12`}>Topics-link-12</Link>
      <Link to={`${props.match.url}/13`}>Topics-link-13</Link>
      <Link to={`${props.match.url}/14`}>Topics-link-14</Link>
    </div>
  );
};
const TopicDetail = (props) => {
  console.log(props);
  return <div>Topic Details: {props.match.params.topicId}</div>;
};

function App2() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/topics" component={TopicList} />
      <Route exact path="/topics/:topicId" component={TopicDetail} />
    </div>
  );
}
export default App2;
