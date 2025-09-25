// Service for dashboard/registration-requests API
import axios from "axios";

export interface RegistrationRequest {
  id: number;
  user_name: string;
  email: string;
  phone_number: string;
  company?: string;
  additional_notes?: string;
  plan_name: string;
  plan_description?: string;
  plan_price?: string;
  submitted_at: string;
  is_served?: boolean;
}

export interface CreateRegistrationRequest {
  user_name: string;
  email: string;
  phone_number: string;
  company?: string;
  additional_notes?: string;
  plan_name: string;
  plan_description?: string;
  plan_price?: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
const BASE_URL = `${API_URL}/dashboard/registration-requests`;

export const RegistrationRequestsService = {
  async getAll(): Promise<RegistrationRequest[]> {
    const res = await axios.get(BASE_URL);
    return res.data;
  },

  async getById(id: number): Promise<RegistrationRequest> {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
  },

  async create(data: CreateRegistrationRequest): Promise<RegistrationRequest> {
    const res = await axios.post(BASE_URL, data);
    return res.data;
  },

  async update(id: number, data: Partial<CreateRegistrationRequest & { is_served?: boolean }>): Promise<RegistrationRequest> {
    const res = await axios.patch(`${BASE_URL}/${id}`, data);
    return res.data;
  },

  async remove(id: number): Promise<{ deleted: boolean }> {
    const res = await axios.delete(`${BASE_URL}/${id}`);
    return res.data;
  },
};
