import { ReactNode } from "react";

export interface PatientRows {
  id: string;
  name: string;
  initials: string;
  color: string;
  status: string;
  waitTime: string;
  department: string;
  priority: string;
  age: number;
  dob: string;
  reason: string;
  admitted: string;
  physician: string;
  notes: string;
}

export interface RowType {
  [key: string]: string;
}

export type Priority = "High" | "Medium" | "Low";

export enum Status {
  Admitted = "Admitted",
  Waiting = "Waiting",
  Critical = "Critical",
  Discharged = "Discharged",
}

export type ToggleSwitchProps = {
  value: boolean;
  onChange: (value: boolean) => void;
  leftContent?: ReactNode;
  rightContent?: ReactNode;
  width?: number;
  height?: number;
  bgOn?: string;
  bgOff?: string;
  thumbOn?: string;
  thumbOff?: string;
};
