import {UploadFile} from "antd";

export interface ProcuringFormData {
  _id: string;
  title: string;
  user_id: string;
  material_id: string;
  coil_count: number;
  coil_metr: number;
  material_unit_id: string;
  unit_value: string;
  price: number;
  currency_id: string;
  currency_value: number;
  spent_count: number;
  receipts_photo: UploadFile[];
  notes: string;
  date: string; // Assuming date is stored as a string
  approved_by: string;
  check_date: string; // Assuming date is stored as a string
  created_at: string;
}
