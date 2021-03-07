import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Home } from "./Home/Home.js";
import { SignUp } from "./SignUp/SignUp.js";
import { Chat } from "./Chat/Chat.js";
import { ChooseAfocusArea } from "./ChooseAfocusArea/ChooseAfocusArea.js";
import { RecommendedLearningPath } from "./RecommendedLearningPath/RecommendedLearningPath.js";
import { LearnHTML } from "./LearnHTML/LearnHTML";
import { PostCourse } from "./PostCourse/PostCourse";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/ChooseAfocusArea">
            <ChooseAfocusArea />
          </Route>
          <Route exact path="/recommendedLearningPath">
            <RecommendedLearningPath />
          </Route>
          <Route exact path="/learnHTML">
            <LearnHTML />
          </Route>
          <Route exact path="/chatWithUs">
            <Chat />
          </Route>
          <Route exact path="/postCourse">
            <PostCourse />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
