import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import heroImg from '../../assets/heroSection.png'
import bgBox from '../../assets/bg-Box.jpg'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import service1 from '../../assets/service1 (1).png'
import service2 from '../../assets/service1 (2).jpg'
import service3 from '../../assets/service1 (3).jpg'
import service4 from '../../assets/service1 (4).jpg'
import service5 from '../../assets/service1 (5).jpg'
import service6 from '../../assets/service1 (6).png'
import dental1 from '../../assets/dental.jpg'
import feadback1 from "../../assets/feedback (1).jpg"
import feadback2 from "../../assets/feedback (2).jpg"
import feadback3 from "../../assets/feedback (3).jpg"
import { CiCalendarDate, CiClock1, CiHeart, CiPhone, CiPlay1, CiUser } from 'react-icons/ci'
import { TbClockHour4, TbFileSmile, TbHeartHandshake, TbStarsFilled, TbTrophy } from 'react-icons/tb';
import { MdArrowBackIos, MdKeyboardArrowDown, MdOutlineHeadsetMic } from 'react-icons/md';
import { FaLock, FaQuoteRight, FaStar, FaTooth, FaUserMd } from 'react-icons/fa';
import { BiCalendar, BiCalendarCheck } from 'react-icons/bi'
import { HiOutlineUsers } from 'react-icons/hi'
import { LuShieldCheck } from 'react-icons/lu'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Home.css'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/16/solid'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { PiLightbulbFilament } from 'react-icons/pi'
import { LiaToothSolid } from 'react-icons/lia'
import { TfiWrite } from 'react-icons/tfi'
export default function Home() {
  const servicesData = [
    {
      id: "01",
      title: "تبييض الأسنان",
      desc: "تبييض آمن وفعال للحصول على ابتسامة أكثر إشراقاً وثقة.",
      img: service1
    },
    {
      id: "02",
      title: "ترميم الأسنان",
      desc: "ترميم الأسنان التالفة باستخدام أحدث التقنيات والمواد عالية الجودة.",
      img: service2  // Replace with your actual imported asset
    },
    {
      id: "03",
      title: "زراعة الأسنان",
      desc: "استعادة وظيفة الأسنان المفقودة بأحدث تقنيات زراعة الأسنان.",
      img: service3  // Replace with your actual imported asset
    },
    {
      id: "04",
      title: "تقويم الأسنان",
      desc: "تقويم الأسنان للحصول على أسنان مرتبة وابتسامة جميلة.",
      img: service4  // Replace with your actual imported asset
    },
    {
      id: "05",
      title: "تركيبات الأسنان",
      desc: "تركيبات ثابتة ومتحركة تعيد لك ابتسامتك وثقتك.",
      img: service5  // Replace with your actual imported asset
    },
    {
      id: "06",
      title: "حشوات الأسنان",
      desc: "تنظيف، متابعة، ونصائح للحفاظ على صحة فمك وأسنانك.",
      img: service6  // Replace with your actual imported asset
    },
  ];
  const opinionsData = [
    {
      id: 1,
      name: "أحمد الماجد",
      treatment: "زراعة الأسنان",
      text: "تجربة رائعة جداً! كنت متخوفاً من زراعة الأسنان ولكن الطاقم الطبي طمأنني وكانت العملية غير مؤلمة تماماً والنتيجة مذهلة.",
      rating: 5,
      img: feadback1
    },
    {
      id: 2,
      name: "رنا التميمي",
      treatment: "ابتسامة هوليود",
      text: "العيادة قمة في النظافة والاحترافية. الدكتورة سارة متميزة وحريصة على أدق التفاصيل، غيرت شكل ابتسامتي تماماً للافضل.",
      rating: 5,
      img: feadback2
    },
    {
      id: 3,
      name: "خالد العتيبي",
      treatment: "تقويم الأسنان اللغوي",
      text: "أفضل عيادة أسنان تعاملت معها على الإطلاق. دقة في المواعيد، وسرعة في الإجراءات، وبساطة في التعامل والخطوات العلاجية.",
      rating: 5,
      img: feadback3
    },
    {
      id: 4,
      name: "مريم العبدالله",
      treatment: "تبييض الأسنان بالليزر",
      text: "الخدمة سريعة والنتيجة من أول جلسة تبييض! وقت الانتظار كان شبه منعدم والراحة والتعقيم فوق الممتاز.",
      rating: 5,
      img: feadback1
    }
  ];
  const [openVideo, setOpenVideo] = useState(false)
  const [openconsultation, setOpenconsultation] = useState(false)
const navigate = useNavigate();
  return (
    <>
      {/* Hero Section */}
      <section
        dir="rtl"
        className="overflow-hidden pt-8 md:pt-8 bg-[#EDF5FE] mt-16 flex flex-col md:flex-row-reverse items-center justify-between gap-12 px-6 md:px-16"
      >
        {/* Content Container */}
        <div className="w-full md:w-1/2 text-center md:text-right space-y-6 pb-4 md:pb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-tight">
            أفضل رعاية لابتسامتك تبدأ من هنا
          </h1>

          <p className="text-base md:text-lg  leading-relaxed max-w-xl mx-auto md:mx-0">
            نقدم لك ولعائلتك رعاية أسنان متكاملة بتقنيات حديثة مع فريق متخصص لضمان أفضل النتائج.
          </p>

          {/* Buttons Group */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <button onClick={() => setOpenVideo(true)} className="text-[#585555] cursor-pointer hover:text-[#032F76] font-medium px-4 py-2 flex items-center gap-3 group transition-colors">
              <div className="p-1.5 border border-[#032F76]/30 rounded-full group-hover:border-[#032F76] transition-colors">
                <div className="p-2.5 border border-[#032F76] rounded-full bg-white text-[#032F76] flex items-center justify-center shadow-sm">
                  <CiPlay1 className="scale-110" />
                </div>
              </div>
              <span className=''>شاهد الفيديو</span>
            </button>


            <Dialog open={openVideo} onClose={setOpenVideo} className="relative z-10">
              <DialogBackdrop
                transition
                className="fixed inset-0 bg-[#1E1E1EBD]/90 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
              />

              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <DialogPanel
                    transition
                    className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                  >
                    <div className="bg-[#E9EAEF] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-center justify-center gap-4">

                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 ">
                          <DialogTitle as="h3" className="text-lg font-semibold text-[#0054C9]">
                            شاهد الفيديو
                          </DialogTitle>
                          <div className="mt-2">
                            <p className="text-sm text-[#585555]">
                              تعرف علي رحلتنا في تقديم أفضل رعاية لأبتسامتك
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="vedio pt-4 px-6 bg-[#E9EAEF]">

                      <iframe className='w-full aspect-video rounded-2xl' src="https://www.youtube.com/embed/lw7xIB0kPCo" title="Dental Ad Video Template (Editable)" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className="bg-[#E9EAEF] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        onClick={() => setOpenVideo(false)}
                        className="cursor-pointer absolute top-4 left-4 text-2xl px-3 py-2 font-semibold text-[#0054C9]  hover:text-red-500 sm:ml-3 sm:w-auto transition-colors"
                      >
                        <IoIosCloseCircleOutline />
                      </button>

                    </div>
                    <div className="note  bg-[#E9EAEF] py-4">
                      <div className="content  flex items-center justify-center gap-4 px-6 text-[#0054C9] bg-[#D2E7FFE8] text-center w-[85%] mx-auto p-6 px-8 rounded-3xl">
                        <PiLightbulbFilament className="text-3xl" />
                        <p className="text-xs ">
                          نحن نستخدم أحدث التقنيات واعلي معايير التعقيم
                          لضمان تجربة أمنة ومريحة لكل مريض
                        </p>
                      </div>


                    </div>
                  </DialogPanel>
                </div>
              </div>
            </Dialog>


            <button onClick={() => navigate('/Appointment')} className="bg-[#032F76] cursor-pointer hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-xl transition duration-200 shadow-md transform hover:-translate-y-0.5 flex items-center gap-2">
           
               <CiCalendarDate className="text-xl" />
              <span>احجز موعدك الآن</span>
            
            </button>
            



          </div>
        </div>

        {/* Image Container */}
        <div className="w-full md:w-1/2 flex justify-center self-end">

          <div className="max-w-md md:max-w-full transform translate-y-4 md:translate-y-[50px] md:mb-[-70px]">
            <img
              src={heroImg}
              alt="رعاية الأسنان في عيادتنا"
              className="w-full h-auto object-cover rounded-t-2xl md:rounded-2xl"
            />
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section dir="rtl" className="bg-white py-18">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16 max-w-7xl mx-auto">


          <div className="bg-[#FCFDFE] border border-slate-100 rounded-xl px-6 py-16 text-center  shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-4 text-3xl bg-[#EDF5FE] rounded-full inline-flex items-center justify-center mb-4 text-[#032F76]">
              <TbStarsFilled />
            </div>
            <h3 className="text-[#032F76] font-bold text-xl mb-2">تقييم أكثر من 4.9</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              حصلنا علي تقييم ممتاز من العديد من مرضانا بفضل ثقتهم ورضاهم عن خدمتنا
            </p>
          </div>
          <div className="bg-[#FCFDFE] border border-slate-100 rounded-xl px-8 py-16 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
            <div className="p-4 text-3xl bg-[#EDF5FE] rounded-full inline-flex items-center justify-center mb-4 text-[#032F76]">
              <FaUserMd />
            </div>
            <h3 className="text-[#032F76] font-bold text-xl mb-2">دعم طبي متواصل</h3>
            <p className=" text-sm leading-relaxed">
              فريق م أطباء الاسنان ذوي الخبرة والكفاءة العالية لافضل نتيجة
            </p>
          </div>
          <div className="box3 relative overflow-hidden bg-[#FCFDFE] border border-slate-100 rounded-xl px-8 py-10 text-right shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between min-h-[320px]">

            <div className="absolute inset-0 z-0 pointer-events-none  w-full h-full">
              <div className="relative w-full h-full">
                <img
                  src={bgBox}
                  alt=""
                  className="w-full h-full object-cover select-none"
                />
                <div className="absolute inset-0 bg-[#092F77C7]  "></div>
              </div>
            </div>


            <div className="relative z-10">

              <div className="p-4 text-3xl bg-[#EDF5FE] rounded-full inline-flex items-center justify-center mb-4 text-[#032F76]">

                <MdOutlineHeadsetMic />
              </div>


              <h3 className="text-white font-bold text-xl mb-2">استشارة مجانية</h3>
              <p className="text-white text-sm leading-relaxed">
                استشارة أولية مجانية
                لتقييم حالتك وتحديد
                خطة العلاج المناسبة
              </p>
            </div>


            <div className="mt-6 flex relative z-10">
              <button  onClick={() => setOpenconsultation(true)} className="cursor-pointer flex items-center gap-2 text-[#032F76] bg-white border border-[#032F76]/20 rounded-xl px-4 py-2 text-sm font-semibold hover:bg-[#EDF5FE] hover:border-[#032F76] transition-all duration-200 group">
                <span>احجز استشارة مجانية</span>
                <MdArrowBackIos className="text-xs transform group-hover:-translate-x-1 transition-transform" />
              </button>
              <Dialog open={openconsultation} onClose={() => setOpenconsultation(false)} className="relative z-50">
                <DialogBackdrop
                  transition
                  className="fixed inset-0 bg-gray-500/60 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4">
                    <DialogPanel
                      transition
                     
                      className="relative transform overflow-hidden rounded-2xl bg-white text-right shadow-2xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 w-full max-w-sm max-h-[90vh] flex flex-col data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >

                    
                      <button
                        type="button"
                        onClick={() => setOpenconsultation(false)}
                        className="absolute text-lg border border-[#0054C9] rounded-full px-2 py-1 top-4 left-4 text-[#0054C9] hover:text-red-500 hover:border-red-500 transition-colors font-bold z-50 cursor-pointer bg-white"
                      >
                        ✕
                      </button>

                      <div className="overflow-y-auto overflow-x-hidden px-5 py-6 custom-modal-scroll">
                        <div className="flex flex-col items-center justify-center text-center">
                          <div className="text-5xl text-[#3E5CBE] my-4 bg-[#EDF5FE] p-4 rounded-full inline-flex items-center justify-center">
                            <LiaToothSolid />
                          </div>

                          <h3 className="text-base font-bold text-[#0054C9]">
                            احجز استشارتك المجانية الآن
                          </h3>
                          <p className="text-xs text-gray-400 mt-1">
                            أملأ البيانات وسيتواصل معك أحد أطبائنا في أقرب وقت
                          </p>

                          {/* Booking Form System */}
                          <form className="w-full mt-5 space-y-3" dir="rtl">
                            <div className="flex flex-col gap-3">

                              {/* Full Name Input */}
                              <div className="flex items-center text-sm bg-white h-11 border pr-3 rounded-xl border-slate-200 w-full focus-within:border-[#0054C9] focus-within:ring-2 focus-within:ring-blue-100/50 transition-all duration-200 group">
                                <CiUser className="text-xl text-[#585555] group-focus-within:text-[#0054C9] transition-colors shrink-0" />
                                <input
                                  className="px-2.5 w-full h-full outline-none text-[#585555] bg-transparent placeholder-[#585555] text-xs font-medium"
                                  type="text"
                                  placeholder="أدخل الاسم بالكامل"
                                  required
                                />
                              </div>

                              {/* Phone Input */}
                              <div className="flex items-center text-sm bg-white h-11 border pr-3 rounded-xl border-slate-200 w-full focus-within:border-[#0054C9] focus-within:ring-2 focus-within:ring-blue-100/50 transition-all duration-200 group">
                                <CiPhone className="text-xl text-[#585555] group-focus-within:text-[#0054C9] transition-colors shrink-0" />
                                <input
                                  className="px-2.5 w-full h-full outline-none text-[#585555] bg-transparent placeholder-[#585555] text-xs font-medium tracking-wide text-left md:text-right"
                                  type="tel"
                                  placeholder="رقم الهاتف"
                                  required
                                />
                              </div>

                              {/* Service Dropdown Selection */}
                              <div className="flex items-center text-sm bg-white h-11 border pr-3 rounded-xl border-slate-200 w-full focus-within:border-[#0054C9] focus-within:ring-2 focus-within:ring-blue-100/50 transition-all duration-200 group relative">
                                <MdKeyboardArrowDown className="text-2xl text-slate-400 group-focus-within:text-[#0054C9] transition-colors shrink-0 pointer-events-none absolute left-3 top-1/2 -translate-y-1/2" />
                                <select
                                  className="pl-9 pr-2.5 w-full h-full outline-none text-[#585555] bg-transparent placeholder-slate-400 text-xs font-medium appearance-none cursor-pointer"
                                  defaultValue=""
                                  required
                                >
                                  <option value="" disabled hidden>نوع المشكلة او الخدمة</option>
                                  <option value="whitening">تبييض الأسنان</option>
                                  <option value="implants">زراعة الأسنان</option>
                                  <option value="orthodontics">تقويم الأسنان</option>
                                  <option value="cosmetic">ابتسامة هوليود</option>
                                </select>
                              </div>

                              {/* Message Textarea */}
                              <div className="flex items-start text-sm bg-white min-h-[90px] border pt-2.5 pr-3 rounded-xl border-slate-200 w-full focus-within:border-[#0054C9] focus-within:ring-2 focus-within:ring-blue-100/50 transition-all duration-200 group">
                                <TfiWrite className="text-lg text-[#585555] group-focus-within:text-[#0054C9] transition-colors shrink-0 mt-0.5" />
                                <textarea
                                  className="px-2.5 w-full h-full outline-none text-[#585555] bg-transparent placeholder-[#585555] text-xs font-medium resize-none"
                                  placeholder="أكتب رسالتك هنا...."
                                  rows="3"
                                  required
                                />
                              </div>

                            </div>

                            {/* Action Submit Button Stack */}
                            <div className="pt-1">
                              <button
                                type="submit"
                                className="w-full bg-[#032F76] hover:bg-[#0054C9] text-white font-bold h-11 text-xs rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                              >
                                <BiCalendarCheck className="text-xl" />
                                <span>تأكيد حجز الموعد</span>
                              </button>

                              <span className="text-[11px] text-[#585555]/80 flex items-center justify-center gap-1.5 mt-3 select-none">
                                <FaLock className="text-xs" />
                                بياناتك محمية وأمنة لدينا
                              </span>
                            </div>
                          </form>

                        </div>
                      </div>

                    </DialogPanel>
                  </div>
                </div>


              </Dialog>
            </div>

          </div>

        </div>
      </section>
      {/* why choose us  Section */}
      <section dir="rtl" className="relative py-12 px-6 md:px-16 bg-white overflow-hidden text-right">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-1/2 left-[18%] -translate-y-1/2 w-[350px] h-[350px] border-b-2 border-l-2 border-dashed border-blue-100/70 rounded-bl-full"></div>
          <div className="absolute top-0 right-[40%] h-[300px] border-l-2 border-dashed border-blue-100/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center  lg:gap-6">

          <div className="w-full lg:w-1/2 space-y-12">

            <div className="inline-block">
              <h2 className="text-[#032F76] font-extrabold text-3xl md:text-4xl leading-tight">
                لماذا تختارنا؟
              </h2>
              <div className="w-16 h-0.5 bg-blue-500 mt-2 mx-auto lg:mx-0"></div>
            </div>

            <ul className="space-y-8">
              {/* Item 1: Speed */}
              <li className="flex items-start gap-4 group">
                <div className="p-3.5 bg-[#EDF5FE] text-[#032F76] rounded-xl text-3xl group-hover:bg-[#032F76] group-hover:text-white transition-colors duration-300 shrink-0 mt-1">
                  <TbClockHour4 />
                </div>
                <div className="flex-grow">
                  <h4 className="text-slate-800 font-bold text-lg mb-1.5">السرعة</h4>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-lg">نحرص على تقليل وقت الانتظار وتقديم خدمة طبية سريعة ومنظمة.</p>
                </div>
              </li>

              {/* Item 2: Quality */}
              <li className="flex items-start gap-4 group">
                <div className="p-3.5 bg-[#EDF5FE] text-[#032F76] rounded-xl text-3xl group-hover:bg-[#032F76] group-hover:text-white transition-colors duration-300 shrink-0 mt-1">
                  <TbTrophy />
                </div>
                <div className="flex-grow">
                  <h4 className="text-slate-800 font-bold text-lg mb-1.5">الجودة</h4>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-lg">نستخدم أحدث التقنيات والمعدات الطبية العالمية لضمان أفضل نتائج العلاج.</p>
                </div>
              </li>

              {/* Item 3: Simplicity */}
              <li className="flex items-start gap-4 group">
                <div className="p-3.5 bg-[#EDF5FE] text-[#032F76] rounded-xl text-3xl group-hover:bg-[#032F76] group-hover:text-white transition-colors duration-300 shrink-0 mt-1">
                  <TbHeartHandshake />
                </div>
                <div className="flex-grow">
                  <h4 className="text-slate-800 font-bold text-lg mb-1.5">البساطة</h4>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-lg">خطوات حجز سهلة ومواعيد مرنة ومريحة تناسب جدولك اليومي تماماً.</p>
                </div>
              </li>

              {/* Item 4: Comfort */}
              <li className="flex items-start gap-4 group">
                <div className="p-3.5 bg-[#EDF5FE] text-[#032F76] rounded-xl text-3xl group-hover:bg-[#032F76] group-hover:text-white transition-colors duration-300 shrink-0 mt-1">
                  <TbFileSmile />
                </div>
                <div className="flex-grow">
                  <h4 className="text-slate-800 font-bold text-lg mb-1.5">الراحة</h4>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-lg">أجواء هادئة وتصميم مريح يضمن لك تجربة علاجية ممتازة وخالية من أي توتر.</p>
                </div>
              </li>
            </ul>

            {/* Primary Action Button (Centered or Right-aligned as requested) */}
            <div className="flex justify-center lg:justify-start pt-6">
              <button onClick={() => navigate('/Appointment')} className="bg-[#032F76] cursor-pointer hover:bg-blue-800 text-white font-medium px-8 py-3.5 rounded-xl transition-all duration-200 shadow-md transform hover:-translate-y-0.5 flex items-start gap-3">
                <BiCalendar className="text-2xl" />
                <span>احجز موعدك الآن</span>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative w-full max-w-[450px] aspect-[4/3]">
              <div className="absolute top-0 left-0 w-[55%] aspect-square z-10 rounded-full overflow-hidden shadow-xl border-4 border-white ">
                <img
                  src={img1}
                  alt="فحص أسنان"
                  className="w-full h-full object-cover select-none"
                />
              </div>

              {/* Center Overlap Circle - 253px equivalent max-width */}
              <div className="absolute left-[50%] w-[55%] aspect-square z-20 rounded-full overflow-hidden shadow-xl border-4 border-white ">
                <img
                  src={img2}
                  alt="رعاية أسنان متخصصة"
                  className="w-full h-full object-cover select-none"
                />
              </div>

              {/* Bottom Right Circle - 253px equivalent max-width */}
              <div className="absolute bottom-0 right-[25%] top[55%] w-[55%] aspect-square z-10 rounded-full overflow-hidden shadow-xl border-4 border-white ">
                <img
                  src={img3}
                  alt="عمل طبيب الأسنان"
                  className="w-full h-full object-cover select-none"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Services Section */}
      <section dir="rtl" className="py-16 bg-[#EDF5FE]/30 px-6 md:px-16 text-right">
        <div className="max-w-7xl mx-auto">


          <div className="text-center mb-12 space-y-2">
            <h2 className="text-[#0054C9] text-3xl font-extrabold">خدماتنا</h2>
            <div className="flex items-center justify-center gap-2 text-[#0054C9]/40">
              <span className="w-8 h-[2px] bg-[#0054C9]/30"></span>
              <FaTooth className="text-sm" />
              <span className="w-8 h-[2px] bg-[#0054C9]/30"></span>
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesData.map((service, index) => {
              // Checks if it's the second card (index 1) to apply your custom accent color
              const isSecondCard = index === 0 || index === 3 || index === 4;

              return (
                <div
                  key={service.id}
                  className={`relative overflow-hidden border rounded-2xl flex items-stretch min-h-[180px] shadow-sm hover:shadow-md transition-all duration-300 flex-row-reverse ${isSecondCard
                    ? 'bg-[#EDF5FE] border-blue-200'
                    : 'bg-white border-slate-100'
                    }`}
                >


                  <div className="w-[35%] shrink-0 relative overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover rounded-tr-[130px] rounded-br-[20px] "
                    />
                  </div>

                  {/* Content Details Area */}
                  <div className="w-[65%] p-6 flex flex-col justify-around relative z-10">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <h3 className="text-[#0054C9] font-bold text-lg">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>

                    {/* Learn More Link */}
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-xs md:text-sm mt-4 group w-fit transition-colors mb-6">
                      <span>اعرف المزيد</span>
                      <MdArrowBackIos className="text-[10px] transform group-hover:-translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Background Shadow Number */}
                  <div className="absolute bottom-1 right-4 text-4xl font-extrabold text-[#032F76]/5 select-none pointer-events-none z-0">
                    {service.id}
                  </div>

                </div>
              );
            })}
          </div>

          {/* Footer Button */}
          <div className="flex justify-center mt-12">
            <button onClick={()=>{navigate("services")}} className="border border-blue-600 text-blue-600 hover:bg-white font-medium px-8 py-2.5 rounded-full text-sm transition-all duration-200 bg-white/80 shadow-sm">
              عرض جميع الخدمات
            </button>
          </div>

        </div>
      </section>

      {/* Know the Doctor Section */}

      <section dir="rtl" className="py-16 bg-white px-6 md:px-16 text-right">
        <div className="container bg-[#013594] rounded-[20px] grid grid-cols-1 md:grid-cols-2   ">
          <div className="r-section">
            <div className="img md:rounded-tl-[130px] md:rounded-bl-[20px] overflow-hidden shadow-lg md:w-[60%] h-[100%]">
              <img src={dental1} alt="Dental Doctor" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="l-section  text-center text-white flex flex-col justify-center items-center py-8 px-6">
            <h3 className="  text-2xl md:text-4xl leading-tight">
              تعرف على طبيبك
            </h3>
            <p className="  leading-relaxed max-w-lg">
              د.سارة أحمد-أخصائية في طب وجراحة الأسنان بخبرة أكثر من 10 سنوات
              في تقديم أفضل رعاية لمرضانا باستخدام أ حدث التقنيات
            </p>
            <div className="featurs p-6">
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div className="item border-l-2 border-white pl-4 text-center flex flex-col items-center gap-2">
                  <div className="icon text-2xl">
                    <CiHeart />

                  </div>
                  <h4>
                    نهتم بابتسامتك
                    ونعتني بك
                  </h4>
                </div>
                <div className="item border-l-2 border-white pl-4 text-center flex flex-col items-center gap-2">
                  <div className="icon text-2xl">
                    <CiClock1 />


                  </div>
                  <h4>
                    مواعيد مرنة
                    تناسبك
                  </h4>
                </div>
                <div className="item border-l-2 border-white pl-4 text-center flex flex-col items-center gap-2">
                  <div className="icon text-2xl">
                    <HiOutlineUsers />



                  </div>
                  <h4>
                    رعاية شخصية
                    لكل مريض
                  </h4>
                </div>
                <div className="item text-center flex flex-col items-center gap-2">
                  <div className="icon text-2xl">
                    <LuShieldCheck />




                  </div>
                  <h4>
                    أعلي معايير
                    الجودة
                  </h4>
                </div>
              </div>

            </div>


          </div>
        </div>

      </section >
      {/* opinions */}
      <section dir="rtl" className='py-16 px-6 md:px-16'>
        <div className="container">
          <div className=" relative header text-2xl font-bold py-2">
            <h2 className='text-[#0054C9] text-center m-auto '>آراء مرضانا</h2>
            <div className='absolute w-[5%] h-[2px] left-1/2 translate-x-[-50%] -bottom-[6px] bg-[#0054C9] m-auto'></div>

          </div>
          {/* Swiper Slider Mount */}
          <div className="pb-16 px-4 max-w-7xl mx-auto">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}

              className="opinion-swiper !py-12"
            >
              {opinionsData.map((opinion) => (
                <SwiperSlide key={opinion.id} className="h-auto py-2">
                  <div className="bg-[#F2F2F2] border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full relative group">


                    <div className="space-y-4 pt-2">


                      <div className="header flex items-center justify-center gap-4">
                        <h4 className="text-lg font-bold text-[#0054C9]">{opinion.name}</h4>
                        <div className="img shrink-0">
                          <img
                            src={opinion.img}
                            alt={opinion.name}
                            className="w-12 h-12 rounded-full object-cover border border-blue-100 select-none"
                          />
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-slate-600 text-sm leading-relaxed min-h-[80px] text-center">
                        "{opinion.text}"
                      </p>

                      {/* Symmetrical Rating Stars */}
                      <div className="flex items-center gap-1 text-amber-400 justify-center">
                        {[...Array(opinion.rating)].map((_, i) => (
                          <FaStar key={i} className="text-sm" />
                        ))}
                      </div>

                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </section>


    </>
  )
}