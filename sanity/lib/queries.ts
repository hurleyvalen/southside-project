import { defineQuery } from "next-sanity";

export const APPOINTMENTS_QUERY = defineQuery(`*[_type=="appointment" && defined(id)] | order(_month desc){
  _id, id, title, day, time, month, description
}`);