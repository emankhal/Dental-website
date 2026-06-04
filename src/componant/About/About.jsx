import React from 'react'
import about from "../../assets/about.png"
import aboutImg from "../../assets/aboutImg.png"
import clinc1 from "../../assets/clinc (1).jpg"
import clinc2 from "../../assets/clinc (2).jpg"
import clinc3 from "../../assets/clinc (3).jpg"
import clinc4 from "../../assets/clinc (4).jpg"
import servce1 from "../../assets/service1 (1).png"
import { FaRegCalendarAlt, FaUserMd, FaRegSmileBeam, FaUsers, FaStethoscope, FaAward } from 'react-icons/fa';
import { FaChevronRight, FaChevronLeft, FaRegHeart, FaGem, FaShieldHalved, FaRegCalendarCheck } from 'react-icons/fa6';
import { FiUsers } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import doctor1 from "../../assets/doctor1.png"
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom'

const doctors = [
  { id: 1, name: 'د. إسلام جمال', role: 'أخصائي تجميل أسنان', image: aboutImg, },
  { id: 2, name: 'د. مصطفى علي', role: 'أخصائي علاج جذور', image: doctor1, }, // الطبيب المختار حالياً بالصورة
  { id: 3, name: 'د. أحمد محمد', role: 'أخصائي زراعة أسنان', image: doctor1, },
  { id: 5, name: 'د. سارة أحمد', role: 'أخصائية تقويم أسنان', image: doctor1, },
  { id: 6, name: 'د. سارة أحمد', role: 'أخصائية تقويم أسنان', image: doctor1, },
  { id: 7, name: 'د. سارة أحمد', role: 'أخصائية تقويم أسنان', image: doctor1, },
];

// بيانات "لماذا تختارنا"
const features = [
  { icon: <FaRegHeart />, title: 'راحة و طمأنينة', desc: 'نجعل زيارتك تجربة مريحة وخالية من التوتر.' },
  { icon: <FaGem />, title: 'جودة مضمونة', desc: 'نستخدم أفضل المواد وأحدث التقنيات.' },
  { icon: <FaUsers />, title: 'رعاية شخصية', desc: 'نضع احتياجاتك في المقام الأول.' },
  { icon: <FaShieldHalved />, title: 'أعلى معايير الأمان', desc: 'بيئة معقمة وأدوات طبية معتمدة.' },
];

// صور العيادة لشبكة المعرض
const galleryImages = [
  clinc1,
  clinc2,
  clinc3,
  clinc4,
];
export default function About() {

  let navigate=useNavigate()
  return (
    <div>
      {/*section one*/}
      <section dir="rtl" className="w-full relative overflow-hidden mt-20 md:mt-12">
        <div className="img w-full">
          <img
            src={about}
            alt="About Us"
            className="w-full h-auto min-h-[450px] md:min-h-0 object-cover"
          />
        </div>
        <div className="content  absolute top-1/2 left-0  transform -translate-y-1/2 text-right w-[90%] sm:w-[70%] md:w-1/2 p-12 bg-white/40 rounded-[100px]  shadow-xl">
          <span className="block font-bold mb-2 text-[#00439F] text-sm md:text-base">
            من نحن
          </span>
          <h2 className="text-xl md:text-3xl font-bold mb-4 text-[#00439F] leading-snug">
            قصتنا بدأت بابتسامة ومازالت مستمرة
          </h2>
          <p className="text-sm md:text-lg mb-6 md:mb-8 text-[#4A4A4A] leading-relaxed">
            نحن عيادة أسنان ملتزمة بتقديم رعاية عالية الجودة لمرضانا. فريقنا من الأطباء المتخصصين يستخدم أحدث التقنيات لضمان صحة وجمال ابتسامتك.
          </p>

          <button onClick={() => navigate('/team')} className="group cursor-pointer flex items-center justify-between bg-[#032F76] text-white p-2 pl-6 pr-2 hover:bg-opacity-95 active:scale-95 transition-all duration-200 rounded-full font-semibold shadow-md gap-4">

            <span className="bg-white text-[#032F76] w-9 h-9 flex items-center justify-center rounded-full shadow-inner transform group-hover:-translate-x-1 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </span>
            <span className="text-sm md:text-base">تعرف على فريقنا</span>
          </button>
        </div>
      </section>

      {/*section two*/}
      <section dir="rtl" className="w-full bg-white py-16 px-4 md:px-12 lg:px-24 font-sans selection:bg-[#00439F]/10">

        <div className="w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20 mb-20">

          <div className="w-full md:w-[55%] flex flex-col items-start order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#00439F] mb-4">
              قصتنا
            </h2>
            <p className="text-[#585555] text-base md:text-lg leading-relaxed mb-8 text-justify font-medium">
              تأسست عيادتنا على فكرة بسيطة: أن كل شخص يستحق ابتسامة صحية وواثقة منذ البداية ونحن نحرص على تقديم رعاية شخصية بأعلى معايير الجودة مع استخدام أحدث التقنيات الطبية لضمان أفضل النتائج لمرضانا.
            </p>

            <div className="w-full bg-white rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 p-6 flex justify-around items-center gap-4 text-center">
              <div className="flex flex-col items-center">
                <div className="text-[#00439F] text-2xl mb-2 p-2.5 bg-blue-50 rounded-full">
                  <FaRegCalendarAlt />
                </div>
                <span className="text-xl md:text-2xl font-black text-[#00439F]">+7</span>
                <span className="text-xs md:text-sm font-semibold text-[#585555] mt-1">سنوات خبرة</span>
              </div>

              <div className="h-12 w-[1px] bg-gray-200"></div>

              <div className="flex flex-col items-center">
                <div className="text-[#00439F] text-2xl mb-2 p-2.5 bg-blue-50 rounded-full">
                  <FaUserMd />
                </div>
                <span className="text-xl md:text-2xl font-black text-[#00439F]">+10</span>
                <span className="text-xs md:text-sm font-semibold text-[#585555] mt-1">أطباء متخصصون</span>
              </div>


              <div className="h-12 w-[1px] bg-gray-200"></div>


              <div className="flex flex-col items-center">
                <div className="text-[#00439F] text-2xl mb-2 p-2.5 bg-blue-50 rounded-full">

                  <FiUsers />
                </div>
                <span className="text-xl md:text-2xl font-black text-[#00439F]">+5000</span>
                <span className="text-xs md:text-sm font-semibold text-[#585555] mt-1">مريض سعيد</span>
              </div>

            </div>
          </div>
          <div className=" relative w-full md:w-[45%] flex justify-center order-1 md:order-2">
            <div className="z-10 w-full max-w-[420px] aspect-square overflow-hidden rounded-tr-[150px] rounded-tl-[200px] rounded-br-[200px] rounded-bl-[150px] shadow-lg z-0">
              <img
                src={aboutImg}
                alt="Smile Click Reception"
                className="w-full h-full object-cover"
              />
            </div>
            <div className='w-full max-w-[420px]  absolute h-full w-full top-0 flex justify-center order-1 md:order-2 rounded-tr-[200px] rounded-tl-[150px] rounded-br-[150px] rounded-bl-[200px] bg-[#EDF5FE] z-0 '></div>
          </div>
        </div>


        <div className="w-full flex flex-col items-center mt-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#00439F] mb-16">
            رحلتنا
          </h2>

          <div className="relative w-full max-w-5xl px-4">

            <div className="hidden md:block absolute top-[26px] left-0 right-0 h-[3px] bg-[#00439F]"></div>


            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative z-10">

              <div className="flex flex-col items-center text-center relative group">
                <div className="w-14 h-14 bg-[#032F76] text-white text-xl flex items-center justify-center rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <FaRegSmileBeam />
                </div>
                <span className="text-lg font-black text-[#00439F] mt-3">2018</span>
                <h4 className="text-base font-bold text-[#032F76] mt-2 mb-1">بداية العيادة</h4>
                <p className="text-xs md:text-sm text-[#777] max-w-[180px] leading-relaxed">
                  انطلقنا برؤية مختلفة لتقديم رعاية أفضل.
                </p>
              </div>

              <div className="flex flex-col items-center text-center relative group">
                <div className="w-14 h-14 bg-[#032F76] text-white text-xl flex items-center justify-center rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <FaUsers />
                </div>
                <span className="text-lg font-black text-[#00439F] mt-3">2020</span>
                <h4 className="text-base font-bold text-[#032F76] mt-2 mb-1">توسيع الفريق</h4>
                <p className="text-xs md:text-sm text-[#777] max-w-[180px] leading-relaxed">
                  انضم إلينا نخبة من أطباء الأسنان المتخصصين.
                </p>
              </div>

              {/* محطة 2022 - أحدث التقنيات */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="w-14 h-14 bg-[#032F76] text-white text-xl flex items-center justify-center rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <FaStethoscope />
                </div>
                <span className="text-lg font-black text-[#00439F] mt-3">2022</span>
                <h4 className="text-base font-bold text-[#032F76] mt-2 mb-1">أحدث التقنيات</h4>
                <p className="text-xs md:text-sm text-[#777] max-w-[180px] leading-relaxed">
                  استثمرنا في أحدث الأجهزة لتقديم علاج أكثر دقة.
                </p>
              </div>

              {/* محطة 2024 - نستمر في التميز */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="w-14 h-14 bg-[#032F76] text-white text-xl flex items-center justify-center rounded-full border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <FaAward />
                </div>
                <span className="text-lg font-black text-[#00439F] mt-3">2024</span>
                <h4 className="text-base font-bold text-[#032F76] mt-2 mb-1">نستمر في التميز</h4>
                <p className="text-xs md:text-sm text-[#777] max-w-[180px] leading-relaxed">
                  نواصل رحلتنا لنكون الخيار الأول لابتسامتك.
                </p>
              </div>

            </div>
          </div>
        </div>

      </section>




      <section dir="rtl" className="py-16 px-4 md:px-12 max-w-7xl mx-auto text-center relative selection:bg-[#00439F]/10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#00439F] mb-1">فريقنا المتميز</h2>
        <p className="text-sm text-gray-500 mb-12">نخبة من الأطباء المتخصصين</p>

        <div className="relative w-full max-w-5xl mx-auto px-4 md:px-10">

          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-[#032F76] text-white rounded-full flex items-center justify-center  cursor-pointer">
            <FaChevronRight className="text-sm" />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.5}
            centeredSlides={false}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            touchRatio={1.2}
            resistance={true}
            resistanceRatio={0.85}
            watchSlidesProgress={true}
            updateOnWindowResize={true}
            observer={true}
            observeParents={true}
            grabCursor={true}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="mySwiper !pb-14"
          >
            {doctors.map((doc) => (
              <SwiperSlide key={doc.id} className="flex items-end justify-center h-[380px] md:h-[440px]">
                <div className="w-full rounded-3xl overflow-hidden bg-white text-center flex flex-col items-center border border-gray-100 shadow-md pb-6">
                  <div className="w-full bg-gray-100 overflow-hidden aspect-[4/5] max-h-[280px]">
                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="mt-4 px-2">
                    <h3 className="text-sm md:text-base font-bold text-[#00439F]">{doc.name}</h3>
                    <p className="text-xs text-gray-400 mt-1">{doc.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-[#032F76] text-white rounded-full flex items-center justify-center shadow-md hover:bg-opacity-90 active:scale-95 transition-all cursor-pointer">
            <FaChevronLeft className="text-sm" />
          </button>

          <div className="swiper-pagination-custom flex justify-center gap-2 mt-4 absolute bottom-0 left-0 right-0 z-20"></div>


        </div>
      </section>


      {/* ================= 2. قسم لماذا تختارنا؟ ================= */}
      <section className="py-8 px-4 md:px-12 max-w-6xl mx-auto">
        <div className="w-full bg-[#EDF5FE] rounded-3xl p-8 md:p-12 text-center shadow-sm">
          <h2 className="text-xl md:text-2xl font-black text-[#00439F] mb-12">لماذا تختارنا؟</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-2 relative">
                {/* أيقونة زرقاء مفرغة */}
                <div className="text-[#00439F] text-3xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-[#00439F] mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed max-w-[180px]">{item.desc}</p>


              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= 3. قسم من عيادتنا (المعرض) ================= */}
      <section className="py-16 px-4 md:px-12 max-w-6xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-extrabold text-[#00439F] mb-10">من عيادتنا</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <div key={index} className="aspect-[4/5] rounded-2xl overflow-hidden shadow-sm border border-gray-100 group">
              <img
                src={src}
                alt={`Clinic Interior ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>


      {/* ================= 4. بنر ابدأ رحلتك اليوم (CTA) ================= */}
      <section className="py-8 px-4 md:px-12 max-w-6xl mx-auto mb-12">
        <div className="w-full bg-gradient-to-l from-[#003680] to-[#04285C] rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">


          <div className="flex items-center gap-6 z-10 flex-col md:flex-row justify-between w-full">

            <div className="text-right text-white">
              <h2 className="text-xl md:text-3xl font-black mb-2">ابدأ رحلتك مع ابتسامة أفضل اليوم</h2>
              <p className="text-xs md:text-sm text-blue-100/80">احجز موعدك الآن ودعنا نعتني بابتسامتك</p>
              <button onClick={() => navigate('/appointment')} className="z-10 my-4 bg-white text-[#032F76] font-bold px-6 py-3.5 rounded-2xl text-sm md:text-base flex items-center gap-3 shadow-md hover:bg-blue-50 active:scale-95 transition-all">
                <FaRegCalendarCheck className="text-lg" />
                <span>احجز موعدك الآن</span>
              </button>
            </div>
            <div className="w-[30%] relative flex items-center justify-center ">
              <img
                src={servce1}
                alt="Tooth Graphic"
                className="w-full h-full object-contain "
              />
            </div>
          </div>

          {/* زر احجز موعدك المتناسق مع الأيقونة */}


          {/* تأثيرات خلفية ضوئية دائرية خفيفة */}
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-400/10 rounded-full blur-2xl"></div>
          <div className="absolute right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
        </div>
      </section>




    </div>
  )
}
