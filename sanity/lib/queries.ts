import { defineQuery } from "next-sanity";

export const APPOINTMENTS_QUERY = defineQuery(`*[_type=="appointment" && defined(_id)] | order(_month desc){
  _id, title, day, time, month, description
}`);
export const MENU_QUERY = defineQuery(`*[_type=="menu" && defined(_id)]{
  _id, category, subCategory, menuList
}`);
export const SCHEDULE_QUERY = defineQuery(`*[_type=="schedule" && defined(_id)]{
  _id, order, weekDay, status, hours
}`);