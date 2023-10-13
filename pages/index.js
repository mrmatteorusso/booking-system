import Head from "next/head";
import BookingForm from "@/components/BookingForm";
import { useState } from "react";

export default function Home() {
  // setData(formData);
  async function addFormDataHandler(formData1) {
    console.log("this is formdata1", formData1);
    // if (Object.keys(formData).length === 0) {
    //   // Handle the case when formData is empty
    //   console.log("empty formData");
    //   return;
    // }
    // setData(formData);
    // console.log("this is formdata", JSON.stringify(formData));
    // const response = await fetch("/api/new-booking", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const data = await response.json();
    // return data;
    const response = await fetch("/api/new-booking", {
      method: "POST",
      body: JSON.stringify(formData1),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("this is response", data);
  }

  return (
    <div className="booking-form">
      <Head>
        <title>Booking Form</title>
      </Head>
      <h1>Booking Form</h1>
      {/* make it required at some point */}
      <BookingForm addFormData={addFormDataHandler} />
    </div>
  );
}
