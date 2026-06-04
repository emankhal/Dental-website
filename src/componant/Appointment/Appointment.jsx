import React, { useState } from 'react'
import tooth from '../../assets/tooth.png'
import doctor1 from '../../assets/doctor1.png'
import {
  FaCalendarAlt,
  FaClock,
  FaStethoscope,
  FaRegFileAlt,
  FaUserAlt,
  FaTooth,
  FaStar,
  FaRegCheckCircle,
  FaPlus,
  FaWallet
} from "react-icons/fa";
import { BsArrowRightCircleFill } from "react-icons/bs";
export default function Appointment() {
  // Mock Data
  const dates = [
    { dayName: "السبت", dayNum: "12", month: "أبريل" },
    { dayName: "الأحد", dayNum: "13", month: "أبريل" },
    { dayName: "الاثنين", dayNum: "14", month: "أبريل" },
    { dayName: "الثلاثاء", dayNum: "15", month: "أبريل" },
    { dayName: "الأربعاء", dayNum: "16", month: "أبريل" },
    { dayName: "الخميس", dayNum: "17", month: "أبريل" },
  ];

  const times = [
    "01:00 PM", "11:00 AM", "10:00 AM", "09:00 AM", "02:00 PM",
    "04:00 PM", "03:00 PM", "02:00 PM", "01:00 PM", "05:00 PM"
  ];

  const services = [
    { id: "cleaning", name: "تنظيف الأسنان" },
    { id: "braces", name: "تقويم الأسنان" },
    { id: "filling", name: "حشو الأسنان" },
  ];

  // State Management
  const [selectedDate, setSelectedDate] = useState(dates[2]); // Default: Monday 14
  const [selectedTime, setSelectedTime] = useState("11:00 AM");
  const [selectedService, setSelectedService] = useState(services[0]);
  const [notes, setNotes] = useState("");

  const handleBooking = () => {
    alert(`تم تأكيد الحجز بنجاح مع د/ أحمد محمد يوم ${selectedDate.dayName} الساعة ${selectedTime}`);
  };
  return (
    <div className=" bg-gray-50 rounded-xl shadow-sm border border-gray-100 font-sans" dir="rtl">
      <div className="flex flex-col items-center mt-18  text-center  mb-6 bg-blue-50 py-6 px-4 rounded-xl relative border border-blue-100 md:flex-row">

        <div className=" ">
          <img src={tooth} alt="Tooth" className=" " />
        </div>

        {/* Content */}
        <div className="content ">
          <h2 className="text-[#0056C6] font-bold text-3xl my-4">احجز موعدك</h2>
          <p className="text-[#585555]  mt-1">اختر الوقت والتاريخ المناسب لك</p>
        </div>

      </div>

      {/* Doctor Card */}
      <div className="out-box p-4 border bg-white mx-8  relative  bottom-[45px] py-[16px] border-gray-200 rounded-xl ">
        <div className="bg-white  px-[8px] m-8 rounded-xl flex items-center justify-center md:justify-around flex-col md:flex-row mb-5">
          <div className="flex items-center flex-wrap  gap-8 p-8  ">
            <img
              src={doctor1}
              alt="Doctor"
              className="w-[70%] md:w-[15%] rounded-lg object-cover border"
            />
            <div>
              <h2 className="text-lg font-bold text-blue-700">د/ أحمد محمد</h2>
              <p className="text-xs text-gray-500 my-2">أخصائي تجميل الأسنان</p>
              <div className="flex items-center gap-1 mt-1">
                <span className='text-sm text-[#585555]'>4.9</span>
                <div className="flex text-amber-400 text-xs gap-0.5">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <span className='text-sm text-[#585555]'> (120)</span>
              </div>
            </div>
          </div>
          <div className="text-left w-1/2 ">
            <p className="text-xs text-gray-400">سعر الكشف</p>
            <p className="text-lg font-bold text-blue-600">300 جنية</p>
          </div>
        </div>
      </div>

      {/* 1. Date Selector */}
      <div className="bg-white p-8  mx-8  rounded-xl border border-gray-200 mb-4">
        <div className="flex items-center gap-2 mb-3 text-blue-800 font-bold">
          <FaCalendarAlt className="text-sm" />
          <h3>أختر التاريخ</h3>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {dates.map((date, index) => {
            const isSelected = selectedDate.dayNum === date.dayNum;
            return (
              <button
                key={index}
                onClick={() => setSelectedDate(date)}
                className={`flex flex-col items-center p-2 rounded-lg border transition-all text-xs ${isSelected
                  ? "bg-[#0056C6] text-white border-[#0056C6] shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                  }`}
              >
                <span>{date.dayName}</span>
                <span className="text-base font-bold my-0.5">{date.dayNum}</span>
                <span>{date.month}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Time Selector */}
      <div className="bg-white p-4 mx-8 rounded-xl border border-gray-200 mb-4">
        <div className="flex items-center gap-2 mb-3 text-blue-800 font-bold">
          <FaClock className="text-sm" />
          <h3>أختر الوقت</h3>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2" dir="ltr">
          {times.map((time, index) => {
            const isSelected = selectedTime === time;
            return (
              <button
                key={index}
                onClick={() => setSelectedTime(time)}
                className={`py-2 px-1 rounded-lg border text-xs transition-all ${isSelected
                  ? "bg-[#0056C6] text-white border-[#0056C6]"
                  : "bg-white text-blue-600 border-blue-200 hover:bg-blue-50"
                  }`}
              >
                {time}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Service Selector */}
      <div className="bg-white p-4 mx-8 rounded-xl border border-gray-200 mb-4">
        <div className="flex items-center gap-2 mb-3 text-blue-800 font-bold">
          <FaStethoscope className="text-sm" />
          <h3>نوع الخدمة</h3>
        </div>
        <div className="flex items-center gap-2">
          {/* Optional Carousel Slide Arrow from Image */}
          <BsArrowRightCircleFill className="text-blue-900 text-xl cursor-pointer ml-1 hidden sm:block" />

          <div className="flex gap-2 overflow-x-auto pb-1 w-full">
            {services.map((service) => {
              const isSelected = selectedService.id === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm whitespace-nowrap transition-all ${isSelected
                    ? "bg-blue-50 text-blue-700 border-blue-400 font-medium"
                    : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                    }`}
                >
                  <FaTooth className={isSelected ? "text-blue-600" : "text-gray-400"} />
                  {service.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. Notes Section */}
      <div className="bg-white p-4 mx-8 rounded-xl border border-gray-200 mb-4">
        <div className="flex items-center gap-2 mb-2 text-blue-800 font-bold">
          <FaRegFileAlt className="text-sm" />
          <h3>ملاحظات <span className="text-gray-400 font-normal text-xs">(اختياري)</span></h3>
        </div>
        <input
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="اكتب هنا ملاحظاتك للدكتور..."
          className="w-full p-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white"
        />
      </div>

      {/* 5. Booking Summary */}
      <div className="bg-white p-4 mx-8 rounded-xl border border-gray-200 mb-5">
        <div className="flex items-center gap-2 mb-4 text-blue-800 font-bold">
          <FaRegCheckCircle className="text-sm" />
          <h3>ملخص الحجز</h3>
        </div>

        <div className="grid grid-cols-4 gap-2 text-center text-xs border-b border-gray-100 pb-4 mb-3">
          <div>
            <p className="text-gray-400 mb-1">الدكتور</p>
            <p className="font-bold text-gray-700 flex items-center justify-center gap-1">
              <FaUserAlt className="text-[10px] text-gray-400" /> د/ أحمد محمد
            </p>
          </div>
          <div>
            <p className="text-gray-400 mb-1">التاريخ</p>
            <p className="font-bold text-gray-700">{selectedDate.dayName} {selectedDate.dayNum} {selectedDate.month}</p>
          </div>
          <div>
            <p className="text-gray-400 mb-1">الوقت</p>
            <p className="font-bold text-gray-700" dir="ltr">{selectedTime}</p>
          </div>
          <div>
            <p className="text-gray-400 mb-1">نوع الخدمة</p>
            <p className="font-bold text-gray-700 flex items-center justify-center gap-1">
              <FaTooth className="text-[10px] text-gray-400" /> {selectedService.name}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-[#0056C6] font-bold text-lg">
          <FaWallet className="text-base" />
          <span>300 جنية</span>
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleBooking}
        className="w-[95%] mx-auto my-8 bg-[#0056C6] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-colors shadow-md text-base"
      >
        <FaPlus className="text-sm" />
        تأكيد الحجز
      </button>

    </div>
  )
}

