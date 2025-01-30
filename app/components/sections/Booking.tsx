"use client";

import { useActionState, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { MdChevronLeft, MdChevronRight, MdClose } from "react-icons/md";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { createAppointment } from "@/lib/actions";
import emailjs from "@emailjs/browser";

const serviceId = "service_3ilgy07";
const templateId = "template_119vv5f";
const publicKey = "jSKmbut0xKLnV_e_0";

interface Props {
  booking: any;
}

const Booking = ({ booking }: Props) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentView, setCurrentView] = useState({
    month: currentMonth,
    year: currentYear,
  });
  const [time, setTime] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const isTaken = (day: number) => {
    for (let i = 0; i < booking.length; i++) {
      if (
        booking[i].day == day &&
        booking[i].month == months[currentView.month]
      ) {
        return false;
      }
    }
    return true;
  };
  const handleLeft = () => {
    setCurrentView((prev) => {
      const newMonth = prev.month - 1;
      return newMonth < 0
        ? { month: currentMonth, year: prev.year }
        : { month: newMonth, year: prev.year };
    });
  };

  const handleRight = () => {
    setCurrentView((prev) => {
      const newMonth = prev.month + 1;
      return newMonth > 1
        ? { month: newMonth - 1, year: prev.year }
        : { month: newMonth, year: prev.year };
    });
  };

  const handleDateClick = (day: number) => {
    const selected = new Date(currentView.year, currentView.month, day);
    setErrors({});
    setTitle("");
    setDescription("");
    setName("");
    setPhone("");
    setTime("");
    setSelectedDate(selected);
    toast({
      title: "DISCLAIMER",
      description:
        "Submitting a booking request does not guarantee a confirmed reservation. All bookings are subject to availability and approval by South Side Brews. Once your request is received, our team will review it and send you a confirmation text with payment details if your selected slot is available. Your booking is only finalized once payment is completed and you receive a confirmation from our management. Thank you for your understanding!",
      variant: "destructive",
      className: "text-red-900 font-bold bg-black",
      duration: 20000,
    });
    // console.log("Selected date:", selected.toDateString());
  };

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      emailjs.init(publicKey);
      const formValues = {
        month: months[selectedDate?.getMonth() ?? 0],
        day: selectedDate?.getDate() ?? 0,
        time,
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        name: formData.get("name") as string,
        phone: formData.get("phone") as string,
      };
      console.log("Appointment Details:", formValues);
      await formSchema.parseAsync(formValues);
      const result = await createAppointment(
        prevState,
        formData,
        formValues.month,
        formValues.day,
        formValues.time
      );

      const emailParams = {
        from_name: name,
        email_type: "Booking",
        title,
        month: months[selectedDate?.getMonth() ?? 0],
        day: selectedDate?.getDay() ?? 0,
        time,
        description,
        phone,
      };
      emailjs
        .send(serviceId, templateId, emailParams)
        .then((response) => {
          console.log("Email sent.", response);
        })
        .catch((error) => {
          console.error("Error sending email.", error);
        });

      if (result.status == "SUCCESS") {
        toast({
          title: "Success",
          description:
            "Your booking has been created successfully. Someone will contact you soon.",
        });
      }
      // Handle successful form submission logic here
      // alert("Appointment saved successfully!");
      setErrors({});
      setTitle("");
      setDescription("");
      setName("");
      setPhone("");
      setTime("");
      setSelectedDate(null);
      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;

        setErrors(fieldErrors as unknown as Record<string, string>);
        toast({
          title: "Error",
          description: "Please check your inputs and try again",
          variant: "destructive",
        });

        // Reset form fields on error
        // setTitle("");
        // setDescription("");
        // setName("");
        // setPhone("");
        // setTime("");

        return { ...prevState, error: "Validation failed", status: "ERROR" };
      }

      toast({
        title: "Error",
        description: "An unexpected error has occurred",
        variant: "destructive",
      });

      return {
        ...prevState,
        error: "An unexpected error has occurred.",
        status: "ERROR",
      };
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  const daysInMonth = getDaysInMonth(currentView.month, currentView.year);

  return (
    <section id="booking" className=" bg-green-900 py-10">
      <div className="place-items-center">
        <h2 className="text-2xl lg:text-4xl font-bold text-center text-sageGreen mb-6">
          Make Memories Over a Cup of Coffee
        </h2>
        <p className="text-center text-cream opacity-75 mb-12">
          Plan ahead for a seamless cafe experience.
        </p>
        <div className="flex justify-center w-[90%] max-w-6xl bg-sageGreen p-8 rounded-xl shadow-lg">
          {/* Calendar Section */}
          <div className="md:w-2/3 pr-4">
            {/* Month and Year Navigation */}
            <div className="flex items-center justify-between mb-6">
              <MdChevronLeft
                className="cursor-pointer text-forestGreen hover:opacity-75"
                size={40}
                onClick={handleLeft}
              />
              <div className="text-center">
                <h2 className="text-cream text-2xl font-bold">
                  {months[currentView.month]}
                </h2>
                <h3 className="text-cream text-xl">{currentView.year}</h3>
              </div>
              <MdChevronRight
                className="cursor-pointer text-forestGreen hover:opacity-75"
                size={40}
                onClick={handleRight}
              />
            </div>

            {/* Weekdays */}
            <div className="grid grid-cols-7 gap-2 text-center text-cream font-bold mb-4">
              {weekDays.map((day, idx) => (
                <div key={idx} className="text-lg">
                  {day}
                </div>
              ))}
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: daysInMonth }, (_, idx) => idx + 1).map(
                (day) =>
                  isTaken(day) ? (
                    <button
                      key={day}
                      className={`p-4 rounded-lg ${
                        selectedDate?.getDate() === day &&
                        selectedDate?.getMonth() === currentView.month &&
                        selectedDate?.getFullYear() === currentView.year
                          ? "bg-forestGreen text-cream"
                          : "bg-cream text-forestGreen"
                      } hover:bg-forestGreen hover:text-cream transition`}
                      onClick={() => {
                        handleDateClick(day);
                      }}
                    >
                      {day}
                    </button>
                  ) : (
                    <button key={day} className={`p-4 rounded-lg`}></button>
                  )
              )}
            </div>
          </div>

          {/* Appointment Details Section */}
          <div className="hidden md:block w-1/3 bg-cream p-6 rounded-lg shadow-md">
            <h3 className="text-forestGreen text-xl font-bold mb-4">
              Appointment Details
            </h3>
            {selectedDate ? (
              <>
                <form action={formAction} className="booking-form">
                  <p className="mb-2">
                    <strong>Date:</strong> {selectedDate.toDateString()}
                  </p>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-1">
                      Starting Time:
                    </label>
                    <select
                      className="w-full p-2 border rounded"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                    >
                      <option value="">Select Time</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-1">
                      Title:
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      className="w-full p-2 border rounded"
                      placeholder="Appointment Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                    {errors.title && (
                      <p className="startup-form_error">{errors.title}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-1">
                      Description:
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      className="w-full p-2 border rounded"
                      placeholder="Appointment Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    {errors.description && (
                      <p className="startup-form_error">{errors.description}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-1">
                      Your Details:
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full p-2 border rounded"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && (
                      <p className="startup-form_error">{errors.name}</p>
                    )}
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                      placeholder="e.g., 09123456789"
                      pattern="^\+?[0-9\s\-]+$" // Optional validation pattern
                      required
                    />
                    {errors.phone && (
                      <p className="startup-form_error">{errors.phone}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-forestGreen text-cream py-2 rounded hover:bg-opacity-75"
                    disabled={isPending}
                  >
                    {isPending ? "Submitting..." : "Save Appointment"}
                  </button>
                </form>
              </>
            ) : (
              <>
                <p className="text-gray-500">
                  Please select a date to proceed.
                </p>
                <p className="text-red-500">
                  <br></br>
                  Booking Disclaimer: Submitting a booking request does not
                  guarantee a confirmed reservation. All bookings are subject to
                  availability and approval by South Side Brews. Once your
                  request is received, our team will review it and send you a
                  confirmation text with payment details if your selected slot
                  is available. Your booking is only finalized once payment is
                  completed and you receive a confirmation from our management.
                  Thank you for your understanding!
                </p>
              </>
            )}
          </div>
          {/* mobile view */}
          {/* Appointment Details Section */}
          <div
            className={`  transition-opacity ease-in-out duration-300 ${
              selectedDate
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            } bg-cream p-6 rounded-lg shadow-md absolute md:hidden w-[70%]`}
          >
            <div className="flex justify-center">
              <h3 className=" text-forestGreen text-xl font-bold mb-4">
                Appointment Details
              </h3>
              <div className="f">
                <button
                  onClick={() => setSelectedDate(null)}
                  className="absolute top-2 right-2 text-gray-600 hover:text-red-500 transition-colors duration-300"
                >
                  <MdClose size={24} />
                </button>
              </div>
            </div>

            {selectedDate ? (
              <>
                <form action={formAction} className="booking-form mb-4">
                  <p className="mb-2">
                    <strong>Date:</strong> {selectedDate.toDateString()}
                  </p>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-1">
                      Starting Time:
                    </label>
                    <select
                      className="w-full p-2 border rounded"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      required
                    >
                      <option value="">Select Time</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                      <option value="6:00 PM">6:00 PM</option>
                      <option value="7:00 PM">7:00 PM</option>
                      <option value="8:00 PM">8:00 PM</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-1">
                      Title:
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      className="w-full p-2 border rounded"
                      placeholder="Appointment Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                    {errors.title && (
                      <p className="startup-form_error">{errors.title}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-1">
                      Description:
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      className="w-full p-2 border rounded"
                      placeholder="Appointment Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    {errors.description && (
                      <p className="startup-form_error">{errors.description}</p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-bold mb-1">
                      Your Details:
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full p-2 border rounded"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && (
                      <p className="startup-form_error">{errors.name}</p>
                    )}
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-green-300"
                      placeholder="e.g., 09123456789"
                      pattern="^\+?[0-9\s\-]+$" // Optional validation pattern
                      required
                    />
                    {errors.phone && (
                      <p className="startup-form_error">{errors.phone}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-forestGreen text-cream py-2 rounded hover:bg-opacity-75"
                  >
                    Save Appointment
                  </button>
                </form>
              </>
            ) : (
              <p className="text-gray-500">Please select a date to proceed.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
