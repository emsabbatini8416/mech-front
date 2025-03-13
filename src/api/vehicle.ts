import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_API_URL}/vehicle`;

export const getVehicles = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addVehicle = async (vehicle: { brand: string; model: string; year: number }) => {
  const response = await axios.post(API_URL, vehicle);
  return response.data;
};

export const getVehicleById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const updateVehicle = async (id: string, vehicle: { brand: string; model: string; year: number }) => {
  const response = await axios.patch(`${API_URL}/${id}`, vehicle);
  return response.data;
};

export const addProblem = async (id: string, problem: { description: string }) => {
  const response = await axios.post(`${API_URL}/${id}/problems`, problem);
  return response.data;
};
