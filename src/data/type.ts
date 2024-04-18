export interface APIResponse<T> {
  isSuccess: boolean;
  code: string;
  message: string;
  data: T;
}

export interface Login {
  id: string;
  password: string;
}

export interface Inquire {
  title: string;
  content: string;
  email: string;
  name: string;
  date: string;
}

export interface Mission {
  date: string;
  content: string;
  message: string;
  constructor: string;
  openStatus: string;
}
