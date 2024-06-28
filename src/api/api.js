import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/"; // 실제 API 엔드포인트로 변경하세요

// export const postImage = async (data) => {
//   try {
//     const response = await axios.post(`${API_URL}pic/thums`, data);
//     return response.data;
//   } catch (error) {
//     console.error("There was an error submitting the form!", error);
//     throw error;
//   }
// };
export const postImage = async (data) => {
  try {
    const response = await axios.post(`${API_URL}pic/`, data);
    return response.data;
  } catch (error) {
    console.error("There was an error submitting the form!", error);
    throw error;
  }
};
export const getRank = async () => {
  try {
    const response = await axios.get(`${API_URL}pic/rank`);
    return response.data;
  } catch (error) {
    console.error("There was an error submitting the form!", error);
    throw error;
  }
};
