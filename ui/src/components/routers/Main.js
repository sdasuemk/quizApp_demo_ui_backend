import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../login/Login';
import AdminDashboard from '../dashboards/AdminDashboard';
import SetQuiz from '../quiz/SetQuiz';
import StudentAssignment from '../quiz/StuudentAssignment';
import { getQuiz, getResults } from '../api';

const Main = () => {
  const [questions, setQuestions] = useState([]);
  const [resultInfo, setResultInfo] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);
  const setRefresh = (callback) => {
    setIsRefresh(callback);
  };

  const getAssignments = async () => {
    try {
      const response = await getQuiz();
      setQuestions(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getResultsInfo = async () => {
    try {
      const response = await getResults();
      setResultInfo(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAssignments();
  }, [isRefresh]);
  useEffect(() => {
    getResultsInfo();
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route
            exact
            path="/adminDashboard"
            element={<AdminDashboard resultInfo={resultInfo} />}
          ></Route>
          <Route
            exact
            path="/setQuiz"
            element={
              <SetQuiz getquestions={questions} setRefresh={setRefresh} />
            }
          ></Route>
          <Route
            exact
            path="/assignment"
            element={<StudentAssignment questions={questions} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Main;
