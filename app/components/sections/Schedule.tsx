"use client";
import useDate from "@/hooks/useDate";
let weekDays = [
  { day: "Monday", status: "Closed", hours: "11 AM - 11 PM" },
  { day: "Tuesday", status: "Open", hours: "11 AM - 11 PM" },
  { day: "Wednesday", status: "Open", hours: "11 AM - 11 PM" },
  { day: "Thursday", status: "Open", hours: "11 AM - 11 PM" },
  { day: "Friday", status: "Open", hours: "11 AM - 11 PM" },
  { day: "Saturday", status: "Open", hours: "11 AM - 11 PM" },
  { day: "Sunday", status: "Open", hours: "11 AM - 11 PM" },
];

interface Props {
  schedule: any;
}

const Schedule = ({ schedule }: Props) => {
  const dayOfWeek = useDate();
  return (
    <section
      id="schedule"
      className=" bg-cover bg-center bg-[url(/schedule_green.jpg)]"
    >
      <div className="flex justify-center mt-2 py-[300px] backdrop-brightness-[0.75] ">
        {/* rectangle */}
        <div
          id="scheduleTime"
          className=" w-[1085px] h-[600px] sm:h-[650px] md:h-[847px] bg-sageGreen/20 rounded-3xl"
        >
          {/* HEADER FOR POURING TIMES */}
          <div className="h-[500px] px-10">
            <h1
              id="scheduleTime"
              className="flex justify-center text-3xl md:text-6xl pt-5 text-cream font-bold"
            >
              Pouring Times
            </h1>
            <ul className="grid grid-cols-1 gap-4 my-10">
              {schedule.map(({ _id, day, status, hours }: any) => (
                <li key={_id} className="flex justify-between px-14 p-4">
                  <h3
                    className={`text-md sm:text-2xl md:text-5xl font-regular text-cream ${
                      day === dayOfWeek && "bg-sageGreen rounded-xl p-2"
                    }`}
                  >
                    {day}
                  </h3>
                  {status === "Closed" ? (
                    <h3 className="text-md sm:text-2xl md:text-5xl font-regular text-cream">
                      {status}
                    </h3>
                  ) : (
                    <h3 className="text-md sm:text-2xl md:text-5xl font-regular text-cream">
                      {hours}
                    </h3>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;

{
  /* <div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl font-semibold mb-4">Our Schedule</h2>
<ul className="grid grid-cols-1 md:grid-cols-5 gap-4">
  {weekDays.map(({ day, status }, idx) => (
    <li key={idx} className="p-4 bg-white rounded shadow">
      <h3 className="font-bold">{day}</h3>
      <p>{status}</p>
    </li>
  ))}
</ul>
</div> */
}
