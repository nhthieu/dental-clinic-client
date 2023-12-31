declare module 'slash2';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'omit.js';
declare module 'numeral';
declare module '@antv/data-set';
declare module 'mockjs';
declare module 'react-fittext';
declare module 'bizcharts-plugin-slider';

declare const REACT_APP_ENV: 'test' | 'dev' | 'pre' | false;
declare const HOST_NAME: string;

type TLoginRequest = {
  username: string;
  password: string;
};

type TMenuItem = Required<MenuProps>['items'][number];

type TTemplateResponse<T> = {
  statusCode: number;
  data: T;
};

type TPersonnel = {
  id: number;
  nationalID: string;
  name: string;
  dob: string | null;
  gender: string | null;
  phone: string;
  type: string;
};

type TPatient = {
  id: number;
  nationalID: string;
  name: string;
  dob: string | null;
  gender: string | null;
  phone: string;
  drugContraindication: string;
  oralHealthStatus: string;
  allergyStatus: string;
  PaymentRecord: TPaymentRecord[];
  Session: TSession[];
};

type TAppointmentRequest = {
  id: number;
  appointmentTime: string;
  requestTime: string;
  note: string | null;
  patientName: string;
  patientPhone: string;
  categoryName: string;
};

type TListResponse<T> = {
  list: T;
  total: number;
};

type TLoginResponse = {
  token: string;
  username: string;
  type: string;
};

type TRoom = {
  id: number;
  code: string;
  name: string;
};

type TMakeAppointmentRequest = {
  patientName: string;
  patientPhone: string;
  appointmentTime: string;
  requestTime: string;
  categoryName: string;
  note: string | null;
};

type TExaminationPost = {
  time: string;
  patientID: number;
  dentistID: number;
  assistantID?: number;
  roomID: number;
  note?: string;
};

type TSession = {
  id: number;
  status?: string;
  type: string;
  time: string;
  patientID: number;
  dentistID: number;
  assistantID?: number;
  roomID: number;
  note?: string;
  Patient: TPatient;
  Dentist: TPersonnel;
  Assistant?: TPersonnel;
  Room: TRoom;
};

type TReExamination = {
  id: number;
  relatedExaminationID: number;
  Session: TSession;
};

type TProcedure = {
  id: number;
  code: string;
  name: string;
  description: string;
  fee: number;
  categoryID: number;
};

type TTooth = {
  id: number;
  name: string;
  type: string;
};

type TCategory = {
  id: number;
  code: string;
  name: string;
  description: string | null;
  Procedure: TProcedure[];
};

type TDrug = {
  id: number;
  code: string;
  name: string;
  description: string;
  price: number;
};

type TPrescription = {
  drugID: number;
  treatmentSessionID: number;
  note: string;
  Drug: TDrug;
};

type TToothSession = {
  toothID: number;
  treatmentSessionID: number;
  order: number;
  Tooth: TTooth;
};

type TPaymentRecord = {
  id: number;
  date: string;
  total: number;
  paid: number;
  change: number;
  method: string;
  patientID: number;
  treatmentSessionID: number;
};

type TTreatmentSession = {
  id: number;
  healthNote: string;
  description: string;
  categoryID: number;
  paymentRecordID: number;
};
