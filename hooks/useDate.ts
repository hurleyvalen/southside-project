"use client"

const dayOfWeek=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today= new Date();
const useDate = () => {

  return (dayOfWeek[today.getDay()]);
}

export default useDate