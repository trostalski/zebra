import { Patient } from "../generated/graphql";

export const orderByRooms = (rooms: [number], patients: Patient[]) => {
  const result = []
  rooms.map((r) => {
    patients.forEach(patient => {
      result.push({r[patient]})
    });
  })  
}