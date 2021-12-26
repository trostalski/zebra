import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AnkleBrachialIndex = {
  __typename?: 'AnkleBrachialIndex';
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  leftAbi: Scalars['Float'];
  leftArm: Scalars['Float'];
  leftLeg: Scalars['Float'];
  patientTask: PatientTask;
  rightAbi: Scalars['Float'];
  rightArm: Scalars['Float'];
  rightLeg: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type AnkleBrachialIndexInput = {
  leftAbi: Scalars['Float'];
  leftArm: Scalars['Float'];
  leftLeg: Scalars['Float'];
  patientTaskId: Scalars['Int'];
  rightAbi: Scalars['Float'];
  rightArm: Scalars['Float'];
  rightLeg: Scalars['Float'];
};

export type DrawBlood = {
  __typename?: 'DrawBlood';
  FlaskType: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  patientTask: PatientTask;
  updatedAt: Scalars['DateTime'];
};

export type DrawBloodInput = {
  FlaskType: Scalars['String'];
  patientTaskId: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnkleBrachialIndex: AnkleBrachialIndex;
  createDrawBlood: DrawBlood;
  createPatient: Patient;
  createPatientTask: PatientTask;
  createTask: Task;
  createVenousCatheter: VenousCatheter;
  createVitalSigns: VitalSigns;
  deleteAnkleBrachialIndex: Scalars['Boolean'];
  deleteDrawBlood: Scalars['Boolean'];
  deletePatient: Scalars['String'];
  deletePatientTask: Scalars['String'];
  deleteTask: Scalars['String'];
  deleteVenousCatheter: Scalars['Boolean'];
  deleteVitalSigns: Scalars['Boolean'];
  login: UserOutput;
  logout: Scalars['Boolean'];
  register: UserOutput;
};


export type MutationCreateAnkleBrachialIndexArgs = {
  AbiInput: AnkleBrachialIndexInput;
};


export type MutationCreateDrawBloodArgs = {
  input: DrawBloodInput;
};


export type MutationCreatePatientArgs = {
  Patientdata: PatientInput;
};


export type MutationCreatePatientTaskArgs = {
  input: PatientTaskInput;
  patientId: Scalars['Float'];
  taskId: Scalars['Float'];
};


export type MutationCreateTaskArgs = {
  taskData: TaskInput;
};


export type MutationCreateVenousCatheterArgs = {
  input: VenousCatheterInput;
};


export type MutationCreateVitalSignsArgs = {
  input: VitalSignsInput;
};


export type MutationDeleteAnkleBrachialIndexArgs = {
  input: Scalars['Float'];
};


export type MutationDeleteDrawBloodArgs = {
  input: Scalars['Float'];
};


export type MutationDeletePatientArgs = {
  taskId: Scalars['Float'];
};


export type MutationDeletePatientTaskArgs = {
  PatientTaskId: Scalars['Float'];
};


export type MutationDeleteTaskArgs = {
  taskId: Scalars['Float'];
};


export type MutationDeleteVenousCatheterArgs = {
  input: Scalars['Float'];
};


export type MutationDeleteVitalSignsArgs = {
  input: Scalars['Float'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  Userdata: RegisterInput;
};

export type Patient = {
  __typename?: 'Patient';
  age: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  diagnosis: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['Float'];
  lastname: Scalars['String'];
  patientTasks: Array<PatientTask>;
  room: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type PatientInput = {
  age: Scalars['String'];
  diagnosis: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  room: Scalars['Int'];
};

export type PatientTask = {
  __typename?: 'PatientTask';
  completed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  creatorUser: User;
  forPatient: Patient;
  id: Scalars['Float'];
  parentTask: Task;
  result?: Maybe<Scalars['String']>;
  timepoint: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PatientTaskInput = {
  result?: Maybe<Scalars['String']>;
  timepoint: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  DrawBloodParentTask: Task;
  VenousCatheterParentTask: Task;
  VitalSignsParentTask: Task;
  ankleBrachialIndexParentTask: Task;
  getPatientById: Patient;
  listAnkleBrachialIndex: Array<VenousCatheter>;
  listDrawBlood: Array<DrawBlood>;
  listPatientTasks?: Maybe<Array<PatientTask>>;
  listPatients: Array<Patient>;
  listTasks?: Maybe<Array<Task>>;
  listUsers?: Maybe<Array<User>>;
  listVitalSigns: Array<VitalSigns>;
  me?: Maybe<User>;
  patientAnforderungen?: Maybe<Array<PatientTask>>;
  patientRooms: Array<Scalars['Int']>;
};


export type QueryGetPatientByIdArgs = {
  input: Scalars['Float'];
};


export type QueryPatientAnforderungenArgs = {
  input: Scalars['Float'];
};

export type RegisterInput = {
  department: Scalars['String'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
  position: Scalars['String'];
};

export type Task = {
  __typename?: 'Task';
  createdAt: Scalars['DateTime'];
  explanation: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TaskInput = {
  explanation: Scalars['String'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  department: Scalars['String'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['Float'];
  lastname: Scalars['String'];
  position: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserOutput = {
  __typename?: 'UserOutput';
  message?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type VenousCatheter = {
  __typename?: 'VenousCatheter';
  catheterType: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  location: Scalars['String'];
  patientTask: PatientTask;
  updatedAt: Scalars['DateTime'];
};

export type VenousCatheterInput = {
  catheterType: Scalars['String'];
  location: Scalars['String'];
  patientTaskId: Scalars['Float'];
};

export type VitalSigns = {
  __typename?: 'VitalSigns';
  bloodPressureRequired: Scalars['Boolean'];
  bloodPressureResult: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  patientTask: PatientTask;
  pulseRequired: Scalars['Boolean'];
  pulseResult: Scalars['Float'];
  temperatureRequired: Scalars['Boolean'];
  temperatureResult: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type VitalSignsInput = {
  bloodPressureRequired?: Maybe<Scalars['Boolean']>;
  bloodPressureResult: Scalars['Float'];
  patientTaskId: Scalars['Float'];
  pulseRequired?: Maybe<Scalars['Boolean']>;
  pulseResult: Scalars['Float'];
  temperatureRequired?: Maybe<Scalars['Boolean']>;
  temperatureResult: Scalars['Float'];
};

export type CreateAnforderungMutationVariables = Exact<{
  taskId: Scalars['Float'];
  patientId: Scalars['Float'];
  input: PatientTaskInput;
}>;


export type CreateAnforderungMutation = { __typename?: 'Mutation', createPatientTask: { __typename?: 'PatientTask', id: number, timepoint: string, completed: boolean, parentTask: { __typename?: 'Task', id: number, name: string }, creatorUser: { __typename?: 'User', id: number, lastname: string } } };

export type GetPatientByIdQueryVariables = Exact<{
  input: Scalars['Float'];
}>;


export type GetPatientByIdQuery = { __typename?: 'Query', getPatientById: { __typename?: 'Patient', id: number, room: number, firstname: string, lastname: string, age: number, diagnosis: string } };

export type ListPatientsStationQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPatientsStationQuery = { __typename?: 'Query', listPatients: Array<{ __typename?: 'Patient', id: number, firstname: string, lastname: string, room: number, age: number }> };

export type ListTaskNamesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListTaskNamesQuery = { __typename?: 'Query', listTasks?: Array<{ __typename?: 'Task', id: number, name: string, createdAt: any, updatedAt: any }> | null | undefined };

export type PatientAnforderungenQueryVariables = Exact<{
  input: Scalars['Float'];
}>;


export type PatientAnforderungenQuery = { __typename?: 'Query', patientAnforderungen?: Array<{ __typename?: 'PatientTask', id: number, timepoint: string, parentTask: { __typename?: 'Task', name: string }, creatorUser: { __typename?: 'User', lastname: string } }> | null | undefined };

export type PatientRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type PatientRoomsQuery = { __typename?: 'Query', patientRooms: Array<number> };


export const CreateAnforderungDocument = gql`
    mutation createAnforderung($taskId: Float!, $patientId: Float!, $input: PatientTaskInput!) {
  createPatientTask(taskId: $taskId, patientId: $patientId, input: $input) {
    id
    parentTask {
      id
      name
    }
    creatorUser {
      id
      lastname
    }
    timepoint
    completed
  }
}
    `;

export function useCreateAnforderungMutation() {
  return Urql.useMutation<CreateAnforderungMutation, CreateAnforderungMutationVariables>(CreateAnforderungDocument);
};
export const GetPatientByIdDocument = gql`
    query getPatientById($input: Float!) {
  getPatientById(input: $input) {
    id
    room
    firstname
    lastname
    age
    diagnosis
  }
}
    `;

export function useGetPatientByIdQuery(options: Omit<Urql.UseQueryArgs<GetPatientByIdQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetPatientByIdQuery>({ query: GetPatientByIdDocument, ...options });
};
export const ListPatientsStationDocument = gql`
    query listPatientsStation {
  listPatients {
    id
    firstname
    lastname
    room
    age
  }
}
    `;

export function useListPatientsStationQuery(options: Omit<Urql.UseQueryArgs<ListPatientsStationQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ListPatientsStationQuery>({ query: ListPatientsStationDocument, ...options });
};
export const ListTaskNamesDocument = gql`
    query listTaskNames {
  listTasks {
    id
    name
    createdAt
    updatedAt
  }
}
    `;

export function useListTaskNamesQuery(options: Omit<Urql.UseQueryArgs<ListTaskNamesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ListTaskNamesQuery>({ query: ListTaskNamesDocument, ...options });
};
export const PatientAnforderungenDocument = gql`
    query patientAnforderungen($input: Float!) {
  patientAnforderungen(input: $input) {
    id
    timepoint
    parentTask {
      name
    }
    creatorUser {
      lastname
    }
  }
}
    `;

export function usePatientAnforderungenQuery(options: Omit<Urql.UseQueryArgs<PatientAnforderungenQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PatientAnforderungenQuery>({ query: PatientAnforderungenDocument, ...options });
};
export const PatientRoomsDocument = gql`
    query patientRooms {
  patientRooms
}
    `;

export function usePatientRoomsQuery(options: Omit<Urql.UseQueryArgs<PatientRoomsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PatientRoomsQuery>({ query: PatientRoomsDocument, ...options });
};