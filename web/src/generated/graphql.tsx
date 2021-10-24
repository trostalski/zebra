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
  creatorUser: User;
  forPatient: Patient;
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
  leftArm: Scalars['Int'];
  leftLeg: Scalars['Int'];
  patientTaskId: Scalars['Int'];
  rightAbi: Scalars['Float'];
  rightArm: Scalars['Int'];
  rightLeg: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnkleBrachialIndex: AnkleBrachialIndex;
  createPatient: PatientOutput;
  createPatientTask: PatientTask;
  createTask: TaskOutput;
  deleteAnkleBrachialIndex: Scalars['Boolean'];
  deletePatient: PatientOutput;
  deletePatientTask: PatientTaskOutput;
  deleteTask: TaskOutput;
  login: UserOutput;
  logout: Scalars['Boolean'];
  register: UserOutput;
};


export type MutationCreateAnkleBrachialIndexArgs = {
  AbiInput: AnkleBrachialIndexInput;
};


export type MutationCreatePatientArgs = {
  Patientdata: PatientInput;
};


export type MutationCreatePatientTaskArgs = {
  patientId: Scalars['Float'];
  taskId: Scalars['Float'];
};


export type MutationCreateTaskArgs = {
  taskData: TaskInput;
};


export type MutationDeleteAnkleBrachialIndexArgs = {
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


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
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

export type PatientOutput = {
  __typename?: 'PatientOutput';
  message?: Maybe<Scalars['String']>;
  patient?: Maybe<Patient>;
};

export type PatientTask = {
  __typename?: 'PatientTask';
  createdAt: Scalars['DateTime'];
  creatorId: Scalars['Float'];
  creatorUser: User;
  forPatient: Patient;
  id: Scalars['Int'];
  parentTask: Task;
  patientId: Scalars['Int'];
  updatedAt: Scalars['DateTime'];
};

export type PatientTaskOutput = {
  __typename?: 'PatientTaskOutput';
  message?: Maybe<Scalars['String']>;
  task?: Maybe<PatientTask>;
};

export type Query = {
  __typename?: 'Query';
  ankleBrachialIndexParentTask: Task;
  listAnkleBrachialIndex: Array<AnkleBrachialIndex>;
  listPatientTasks?: Maybe<Array<PatientTask>>;
  listPatients: Array<Patient>;
  listTasks?: Maybe<Array<Task>>;
  listUsers?: Maybe<Array<User>>;
  me?: Maybe<User>;
  patientRooms: Array<Scalars['Int']>;
  specificPatientTasks?: Maybe<Array<PatientTask>>;
};


export type QuerySpecificPatientTasksArgs = {
  input: Scalars['Float'];
};

export type RegisterInput = {
  department: Scalars['String'];
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
  position: Scalars['String'];
  username: Scalars['String'];
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

export type TaskOutput = {
  __typename?: 'TaskOutput';
  message?: Maybe<Scalars['String']>;
  task?: Maybe<Task>;
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
  username: Scalars['String'];
};

export type UserOutput = {
  __typename?: 'UserOutput';
  message?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type CreateAnkleBrachialIndexMutationVariables = Exact<{
  abiInput: AnkleBrachialIndexInput;
}>;


export type CreateAnkleBrachialIndexMutation = { __typename?: 'Mutation', createAnkleBrachialIndex: { __typename?: 'AnkleBrachialIndex', id: number } };

export type CreatePatientTaskMutationVariables = Exact<{
  taskId: Scalars['Float'];
  patientId: Scalars['Float'];
}>;


export type CreatePatientTaskMutation = { __typename?: 'Mutation', createPatientTask: { __typename?: 'PatientTask', id: number } };

export type DeletePatientTaskMutationVariables = Exact<{
  patientTaskId: Scalars['Float'];
}>;


export type DeletePatientTaskMutation = { __typename?: 'Mutation', deletePatientTask: { __typename?: 'PatientTaskOutput', message?: string | null | undefined } };

export type LoginMutationVariables = Exact<{
  loginPassword: Scalars['String'];
  loginUsernameOrEmail: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserOutput', message?: string | null | undefined, user?: { __typename?: 'User', id: number, username: string } | null | undefined } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  registerUserdata: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserOutput', message?: string | null | undefined, user?: { __typename?: 'User', id: number, username: string } | null | undefined } };

export type ListPatientTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPatientTasksQuery = { __typename?: 'Query', listPatientTasks?: Array<{ __typename?: 'PatientTask', id: number, createdAt: any, updatedAt: any, creatorId: number, patientId: number, parentTask: { __typename?: 'Task', id: number, name: string, explanation: string, createdAt: any, updatedAt: any }, creatorUser: { __typename?: 'User', username: string, firstname: string, lastname: string, id: number, email: string, department: string, position: string, createdAt: any, updatedAt: any }, forPatient: { __typename?: 'Patient', firstname: string, lastname: string, room: number, age: number, diagnosis: string, id: number, updatedAt: any, createdAt: any } }> | null | undefined };

export type ListPatientsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPatientsQuery = { __typename?: 'Query', listPatients: Array<{ __typename?: 'Patient', id: number, firstname: string, lastname: string, room: number, age: number, diagnosis: string, createdAt: any, updatedAt: any }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, username: string } | null | undefined };

export type PatientRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type PatientRoomsQuery = { __typename?: 'Query', patientRooms: Array<number> };

export type SpecificPatientTasksQueryVariables = Exact<{
  input: Scalars['Float'];
}>;


export type SpecificPatientTasksQuery = { __typename?: 'Query', specificPatientTasks?: Array<{ __typename?: 'PatientTask', id: number, createdAt: any, parentTask: { __typename?: 'Task', name: string } }> | null | undefined };


export const CreateAnkleBrachialIndexDocument = gql`
    mutation CreateAnkleBrachialIndex($abiInput: AnkleBrachialIndexInput!) {
  createAnkleBrachialIndex(AbiInput: $abiInput) {
    id
  }
}
    `;

export function useCreateAnkleBrachialIndexMutation() {
  return Urql.useMutation<CreateAnkleBrachialIndexMutation, CreateAnkleBrachialIndexMutationVariables>(CreateAnkleBrachialIndexDocument);
};
export const CreatePatientTaskDocument = gql`
    mutation CreatePatientTask($taskId: Float!, $patientId: Float!) {
  createPatientTask(taskId: $taskId, patientId: $patientId) {
    id
  }
}
    `;

export function useCreatePatientTaskMutation() {
  return Urql.useMutation<CreatePatientTaskMutation, CreatePatientTaskMutationVariables>(CreatePatientTaskDocument);
};
export const DeletePatientTaskDocument = gql`
    mutation DeletePatientTask($patientTaskId: Float!) {
  deletePatientTask(PatientTaskId: $patientTaskId) {
    message
  }
}
    `;

export function useDeletePatientTaskMutation() {
  return Urql.useMutation<DeletePatientTaskMutation, DeletePatientTaskMutationVariables>(DeletePatientTaskDocument);
};
export const LoginDocument = gql`
    mutation login($loginPassword: String!, $loginUsernameOrEmail: String!) {
  login(password: $loginPassword, usernameOrEmail: $loginUsernameOrEmail) {
    user {
      id
      username
    }
    message
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation register($registerUserdata: RegisterInput!) {
  register(Userdata: $registerUserdata) {
    user {
      id
      username
    }
    message
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const ListPatientTasksDocument = gql`
    query listPatientTasks {
  listPatientTasks {
    id
    createdAt
    updatedAt
    parentTask {
      id
      name
      explanation
      createdAt
      updatedAt
    }
    creatorId
    creatorUser {
      username
      firstname
      lastname
      id
      email
      department
      position
      createdAt
      updatedAt
    }
    patientId
    forPatient {
      firstname
      lastname
      room
      age
      diagnosis
      id
      updatedAt
      createdAt
    }
  }
}
    `;

export function useListPatientTasksQuery(options: Omit<Urql.UseQueryArgs<ListPatientTasksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ListPatientTasksQuery>({ query: ListPatientTasksDocument, ...options });
};
export const ListPatientsDocument = gql`
    query listPatients {
  listPatients {
    id
    firstname
    lastname
    room
    age
    diagnosis
    createdAt
    updatedAt
  }
}
    `;

export function useListPatientsQuery(options: Omit<Urql.UseQueryArgs<ListPatientsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ListPatientsQuery>({ query: ListPatientsDocument, ...options });
};
export const MeDocument = gql`
    query me {
  me {
    id
    username
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const PatientRoomsDocument = gql`
    query patientRooms {
  patientRooms
}
    `;

export function usePatientRoomsQuery(options: Omit<Urql.UseQueryArgs<PatientRoomsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PatientRoomsQuery>({ query: PatientRoomsDocument, ...options });
};
export const SpecificPatientTasksDocument = gql`
    query specificPatientTasks($input: Float!) {
  specificPatientTasks(input: $input) {
    id
    createdAt
    parentTask {
      name
    }
  }
}
    `;

export function useSpecificPatientTasksQuery(options: Omit<Urql.UseQueryArgs<SpecificPatientTasksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<SpecificPatientTasksQuery>({ query: SpecificPatientTasksDocument, ...options });
};