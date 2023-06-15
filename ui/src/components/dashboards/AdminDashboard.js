import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = ({ resultInfo }) => {
  const navigate = useNavigate();

  const goToQuizSetup = () => {
    navigate(`/setQuiz`);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Correct</th>
              <th>Wrong</th>
            </tr>
          </thead>
          <tbody>
            {resultInfo.map((item, index) => (
              <tr key={index}>
                <td>{item.username}</td>
                <td>{item.correct}</td>
                <td>{item.wrong}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button type="button" onClick={goToQuizSetup}>
          Set Question Paper
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
