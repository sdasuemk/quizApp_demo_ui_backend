import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

export const postQuiz = (data) => {
  return api.post('/quiz/create-quiz', data);
};

export const getQuiz = () => {
  return api.get('/quiz/get-quiz');
};

export const login = (data) => {
  return api.post('/user/login', data);
};

export const updateResult = (data) => {
  const storedToken = localStorage.getItem('token');
  return api.post('/result/update-results', data, {
    headers: {
      Authorization: `Bearer ${storedToken}`,
    },
  });
};

export const getResults = () => {
  return api.get('/result/results');
};
