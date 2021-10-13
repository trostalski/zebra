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

export type Mutation = {
  __typename?: 'Mutation';
  addTask: TaskOutput;
  createPatient: PatientOutput;
  deletePatient: PatientOutput;
  deleteTask: TaskOutput;
  login: UserOutput;
  register: UserOutput;
};


export type MutationAddTaskArgs = {
  taskData: TaskInput;
};


export type MutationCreatePatientArgs = {
  Patientdata: PatientInput;
};


export type MutationDeletePatientArgs = {
  taskId: Scalars['Float'];
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

export type Query = {
  __typename?: 'Query';
  listPatients: Array<Patient>;
  listTasks?: Maybe<Array<Task>>;
  listUsers?: Maybe<Array<User>>;
  patientRooms: Array<Scalars['Int']>;
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
  patientId: Scalars['Float'];
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

export type LoginMutationVariables = Exact<{
  loginPassword: Scalars['String'];
  loginUsernameOrEmail: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserOutput', message?: string | null | undefined, user?: { __typename?: 'User', id: number, username: string } | null | undefined } };

export type RegisterMutationVariables = Exact<{
  registerUserdata: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserOutput', message?: string | null | undefined, user?: { __typename?: 'User', id: number, username: string } | null | undefined } };

export type ListPatientsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPatientsQuery = { __typename?: 'Query', listPatients: Array<{ __typename?: 'Patient', id: number, firstname: string, lastname: string, room: number, age: number, diagnosis: string }> };

export type PatientRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type PatientRoomsQuery = { __typename?: 'Query', patientRooms: Array<number> };


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
export const ListPatientsDocument = gql`
    query listPatients {
  listPatients {
    id
    firstname
    lastname
    room
    age
    diagnosis
  }
}
    `;

export function useListPatientsQuery(options: Omit<Urql.UseQueryArgs<ListPatientsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<ListPatientsQuery>({ query: ListPatientsDocument, ...options });
};
export const PatientRoomsDocument = gql`
    query patientRooms {
  patientRooms
}
    `;

export function usePatientRoomsQuery(options: Omit<Urql.UseQueryArgs<PatientRoomsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PatientRoomsQuery>({ query: PatientRoomsDocument, ...options });
};