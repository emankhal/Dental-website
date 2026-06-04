import React, { useState } from 'react'
import about from '../../assets/about.png'
import about2 from '../../assets/aboutImg.png'
import { FaCalendarCheck } from 'react-icons/fa6';
import doc1 from '../../assets/doc (1).jpg'
import doc2 from '../../assets/doc (2).jpg'
import doc3 from '../../assets/doc (3).jpg'
import doc4 from '../../assets/doc (4).jpg'
import doc5 from '../../assets/doc (5).jpg'
import doc6 from '../../assets/doc (6).jpg'
import doc7 from '../../assets/doc (7).jpg'
import doc8 from '../../assets/doc (8).jpg'
import doc9 from '../../assets/doc (9).jpg'
import doc10 from '../../assets/doc (10).jpg'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { IoClose } from 'react-icons/io5';
import { LuCalendarDays, LuStar } from 'react-icons/lu';
import { GiTooth } from 'react-icons/gi';
import { FaTooth } from 'react-icons/fa';
import { RiToothFill } from 'react-icons/ri';
import { PiToothThin } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
export default function Team() {


    const [activeFilter, setActiveFilter] = useState('الكل');
    const [activeDoctor, setActiveDoctor] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const categories = ['الكل', 'زراعة الاسنان', 'تبييض الاسنان', 'تقويم الاسنان', 'اطفال'];
    const services = [
        { title: 'تقويم الأسنان المعدني', icon: <FaTooth className="w-7 h-7 text-[#032F76]" /> },
        { title: 'تقويم شفاف (إنفزلاين)', icon: <RiToothFill className="w-7 h-7 text-[#032F76]" /> },
        { title: 'تقويم الأسنان الخزفي', icon: <PiToothThin className="w-7 h-7 text-[#032F76]" /> },
        { title: 'تقويم الأسنان للأطفال', icon: <GiTooth className="w-7 h-7 text-[#032F76]" /> },
    ];

    // مراجعات افتراضية تظهر داخل المودال
    const reviews = [
        {
            name: 'نورا محمد',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
            rating: 5,
            comment: 'الدكتور متعاون جداً ويشرح كل التفاصيل بوضوح'
        },
        {
            name: 'محمد أحمد',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
            rating: 5,
            comment: 'تجربة رائعة الدكتور محترف جداً والنتائج كانت ممتازة'
        }
    ];
    const doctorsData = [
        { id: 1, name: 'د. إسلام جمال', role: 'أخصائي تجميل أسنان', exp: '12 سنة خبرة', category: 'تبييض الاسنان', image: doc1 },
        { id: 2, name: 'د. مصطفى علي', role: 'أخصائي علاج جذور', exp: '8 سنوات خبرة', category: 'زراعة الاسنان', image: doc2 },
        { id: 3, name: 'د. أحمد محمد', role: 'أخصائي زراعة أسنان', exp: '5 سنوات خبرة', category: 'زراعة الاسنان', image: doc3 },
        { id: 4, name: 'د. سارة أحمد', role: 'أخصائية تقويم أسنان', exp: '14 سنة خبرة', category: 'تقويم الاسنان', image: doc4 },
        { id: 5, name: 'د. إسلام جمال', role: 'أخصائي تجميل أسنان', exp: '12 سنة خبرة', category: 'تبييض الاسنان', image: doc5 },
        { id: 6, name: 'د. مصطفى علي', role: 'أخصائي علاج جذور', exp: '8 سنوات خبرة', category: 'زراعة الاسنان', image: doc6 },
        { id: 7, name: 'د. أحمد محمد', role: 'أخصائي زراعة أسنان', exp: '5 سنوات خبرة', category: 'زراعة الاسنان', image: doc7 },
        { id: 8, name: 'د. سارة أحمد', role: 'أخصائية تقويم أسنان', exp: '14 سنة خبرة', category: 'تقويم الاسنان', image: doc8 },
        { id: 9, name: 'د. إسلام جمال', role: 'أخصائي تجميل أسنان', exp: '12 سنة خبرة', category: 'اطفال', image: doc9 },
        { id: 10, name: 'د. أحمد محمد', role: 'أخصائي زراعة أسنان', exp: '5 سنوات خبرة', category: 'زراعة الاسنان', image: doc10 },
        { id: 11, name: 'د. مصطفى علي', role: 'أخصائي علاج جذور', exp: '8 سنوات خبرة', category: 'زراعة الاسنان', image: doc1 },
        { id: 12, name: 'د. سارة أحمد', role: 'أخصائية تقويم أسنان', exp: '14 سنة خبرة', category: 'تقويم الاسنان', image: doc2 }
    ];
    const filteredDoctors = activeFilter === 'الكل'
        ? doctorsData
        : doctorsData.filter(doc => doc.category === activeFilter);
        let navigate = useNavigate();
    return (
        <div>
            {/*section one*/}
            <section className="w-full h-[100vh] relative overflow-hidden mt-20 md:mt-12">
                <div className="img w-full">
                    <img
                        src={about}
                        alt="About Us"
                        className="w-full  object-cover"
                    />
                </div>
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#032F76CF]/80 ">
                    <div className="content left-1/2 md:left-0   w-fit relative top-1/2 -translate-y-1/2  -translate-x-1/2 text-center   p-6 md:p-12 lg:p-20">
                        <h2 className="text-2xl md:text-4xl font-black text-white mb-4">فريقنا الطبي</h2>
                        <p className="text-sm  m-auto md:text-base text-blue-100/80 mb-6 "> نخبة من افضل اطباء الاسنان المتخصصين لخدمتكم بأعلي معايير الجودة والعناية</p>

                    </div>
                </div>
            </section>


            <div dir="rtl" className="w-full bg-white font-sans py-12 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto selection:bg-[#00439F]/10">
                <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-6 py-2 rounded-full text-xs md:text-sm font-bold border transition-all duration-300 cursor-pointer ${activeFilter === cat
                                ? 'bg-[#032F76] text-white border-[#032F76] shadow-sm'
                                : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="w-full">
                    {/* ================= 1. GRID OF DOCTORS ================= */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 mb-20">
                        {filteredDoctors.map((doc, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col text-center group hover:shadow-[0_15px_40px_rgba(3,47,118,0.06)] hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-full aspect-[4/5] bg-gray-50 overflow-hidden relative">
                                    <img
                                        src={doc.image}
                                        alt={doc.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                                    />
                                </div>

                                <div className="p-5 flex flex-col flex-grow items-center">
                                    <h3 className="text-sm md:text-base font-extrabold text-[#032F76] mb-1">
                                        {doc.name}
                                    </h3>
                                    <p className="text-xs text-gray-400 font-medium mb-1">
                                        {doc.role || doc.specialty}
                                    </p>
                                    <p className="text-[11px] text-gray-400 font-medium mb-4">
                                        {doc.exp || doc.experience}
                                    </p>


                                    <button
                                        onClick={() => setActiveDoctor(doc)}
                                        className="w-full max-w-[140px] bg-[#032F76] text-white text-xs font-bold py-2.5 rounded-xl hover:bg-[#00439F] active:scale-95 transition-all cursor-pointer"
                                    >
                                        عرض التفاصيل
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ================= 2. SINGLE MODAL (OUTSIDE THE LOOP) ================= */}
                    <Dialog open={activeDoctor !== null} onClose={() => setActiveDoctor(null)} className="relative z-50" dir="rtl">
                        {/* Backdrop */}
                        <DialogBackdrop
                            transition
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out data-[closed]:opacity-0"
                        />

                        {/* Outer Container */}
                        <div className="fixed inset-0 z-10 w-screen overflow-hidden flex items-center justify-center p-3 sm:p-6">
                            <DialogPanel
                                transition
                                className="relative w-full max-w-6xl max-h-[92vh] transform overflow-y-auto rounded-[2rem] bg-white p-4 sm:p-6 md:p-8 shadow-2xl transition-all duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0 text-right scrollbar-none "
                            >
                                {/* Close Button */}
                                <button
                                    type="button"
                                    onClick={() => setActiveDoctor(null)}
                                    className="absolute top-4 left-4 z-20 p-2 text-gray-500 hover:text-gray-700 border border-gray-300 rounded-full bg-white hover:bg-gray-50 transition shadow-sm cursor-pointer"
                                    aria-label="إغلاق"
                                >
                                    <IoClose className="w-5 h-5" />
                                </button>

                                {activeDoctor && (
                                    <div className="space-y-4 pt-6 md:pt-2">
                                            {/* ================= هيدر كارت الطبيب (متجاوب تماماً) ================= */}
                                            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start bg-white p-4 rounded-2xl  justify-around">



                                                {/* بيانات الطبيب والنصوص */}
                                                <div className="w-full md:w-[30%] text-center md:text-right space-y-2">
                                                    <div>
                                                        <h1 className="text-base sm:text-3xl font-black text-[#0054C9]">{activeDoctor.name}</h1>
                                                        <p className="text-[#0054C9CF]  text-sm sm:text-sm mt-0.5">{activeDoctor.role || 'أخصائي تقويم أسنان'}</p>
                                                    </div>

                                                    <div className="flex justify-center md:justify-start">
                                                        <span className="bg-blue-50 text-[#032F76] font-extrabold text-[11px] px-3 py-1 rounded-full border border-blue-100">
                                                            {activeDoctor.exp || '12 سنة خبرة'}
                                                        </span>
                                                    </div>

                                                    <div className="flex items-center justify-center md:justify-start gap-1 text-xs sm:text-sm">

                                                        <div className="flex text-amber-400">
                                                            {[...Array(5)].map((_, i) => <LuStar key={i} className="w-3.5 h-3.5 fill-current" />)}
                                                        </div>
                                                        <span className="font-bold text-[#0054C9] ml-1">4.9</span>
                                                        <span className="text-gray-400 text-[11px] mr-1">(123 تقييم)</span>
                                                    </div>

                                                    <p className="text-gray-600 text-[11px] sm:text-xs leading-relaxed max-w-md mx-auto md:mx-0">
                                                        {activeDoctor.bio || 'أخصائي تقويم الأسنان بخبرة تزيد عن سنوات طويلة في مجال تقويم الأسنان للأطفال والبالغين، حاصل على الماجستير في تقويم الأسنان، ويعد من أفضل الأخصائيين في استخدام أحدث التقنيات لعلاج مشاكل الأسنان.'}
                                                    </p>
                                                </div>

                                                <div className="w-32 h-32 md:w-[40%] md:h-auto md:aspect-square rounded-xl overflow-hidden bg-blue-50 border border-gray-100 flex-shrink-0">
                                                    <img
                                                        src={activeDoctor.image}
                                                        alt={activeDoctor.name}
                                                        className="w-full h-full object-cover object-top"
                                                    />
                                                </div>
                                            </div>
                                        <div className='p-6 border-[#0054C9] border-1 rounded-2xl'>


                                            {/* ================= قسم الخدمات (تم حل مشكلة الـ 4 أعمدة في الموبايل هنا) ================= */}
                                            <div className="border border-[#0054C9] rounded-2xl p-4 bg-white shadow-sm mb-4 ">
                                                <h2 className="text-sm sm:text-base font-bold text-[#0054C9] mb-3">الخدمات التي يقدمها</h2>

                                                {/* grid-cols-2 للموبايل حتى لا تختفي العناصر، و md:grid-cols-4 للشاشات الكبيرة */}
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                                                    {services.map((svc, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="border border-[#0054C9] rounded-xl p-3 text-center bg-white hover:bg-white hover:border-[#032F76] hover:shadow-sm transition-all duration-200 group flex flex-col items-center justify-center min-h-[100px]"
                                                        >
                                                            <div className="mb-2 p-1.5 bg-white rounded-lg border border-[#0054C9] group-hover:bg-blue-50 group-hover:border-blue-100 transition duration-200">
                                                                {svc.icon}
                                                            </div>
                                                            <h3 className="text-[11px] font-bold text-[#0054C9] leading-tight px-1">{svc.title}</h3>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* ================= قسم التقييمات ================= */}
                                            <div className="border border-[#0054C9] rounded-2xl p-4 bg-white shadow-sm">
                                                <div className="flex items-center justify-between mb-3">
                                                    <h2 className="text-sm sm:text-base font-bold text-[#0054C9]">تقييمات المرضى</h2>
                                                    <div className="flex items-center gap-1 text-[11px] sm:text-xs">
                                                        <span className="font-black text-gray-800">4.9</span>
                                                        <div className="flex text-amber-400">
                                                            {[...Array(5)].map((_, i) => <LuStar key={i} className="w-3 h-3 fill-current" />)}
                                                        </div>
                                                        <span className="text-gray-400">(123 تقييم)</span>
                                                    </div>
                                                </div>

                                                {/* يعرض كرت واحد عمودي في الموبايل لمنع التداخل */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                                                    {reviews.map((rev, idx) => (
                                                        <div key={idx} className="border border-[#0054C9] bg-gray-50/40 rounded-xl p-2.5 flex gap-2.5 items-start">
                                                            <img
                                                                src={rev.avatar}
                                                                alt={rev.name}
                                                                className="w-8 h-8 rounded-full object-cover border border-[#0054C9] flex-shrink-0"
                                                            />
                                                            <div className="space-y-0.5 w-full">
                                                                <div className="flex justify-between items-center w-full">
                                                                    <h4 className="text-[11px] font-bold text-[#0054C9]">{rev.name}</h4>
                                                                    <div className="flex text-amber-400">
                                                                        {[...Array(rev.rating)].map((_, i) => <LuStar key={i} className="w-2 h-2 fill-current" />)}
                                                                    </div>
                                                                </div>
                                                                <p className="text-gray-500 text-[10px] leading-normal pt-0.5">
                                                                    {rev.comment}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* النقاط التناوبية السفلية */}
                                                <div className="flex justify-center gap-1 mt-3">
                                                    {[...Array(5)].map((_, idx) => (
                                                        <button
                                                            key={idx}
                                                            onClick={() => setCurrentSlide(idx)}
                                                            className={`h-1 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-3 bg-blue-500' : 'w-1 bg-gray-200'}`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* ================= زر الحجز السفلي الفوري ================= */}
                                        <button className="w-full bg-[#032F76] hover:bg-[#022359] text-white font-bold py-3 px-6 rounded-xl transition duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer text-xs sm:text-sm">
                                            <LuCalendarDays className="w-4 h-4" />
                                            <span>احجز موعدك الآن</span>
                                        </button>

                                    </div>
                                )}
                            </DialogPanel>
                        </div>
                    </Dialog>
                </div>

                <div className="w-full rounded-[2.5rem] relative overflow-hidden shadow-md border border-gray-100 flex items-center ">
                    <div className="absolute inset-0 w-full h-full">
                        <img
                            src={about2}
                            alt="Smile Click Reception"
                            className="w-full h-full "
                        />
                    </div>

                    <div className="relative my-8 z-10 text-center  w-[90%] md:max-w-lg md:px-16 flex flex-col items-start mr-auto md:mr-0 ml-auto bg-white/90 py-6 px-2 rounded-[150px] ">
                        <h2 className="text-lg md:text-xl font-black text-[#0054C9] mb-2 m-auto">
                            لم تجد التخصص المناسب؟
                        </h2>
                        <p className="text-xs md:text-sm text-gray-500 font-semibold leading-relaxed mb-6">
                            تواصل معنا وسيقوم فريقنا بمساعدتك في اختيار الطبيب المناسب لحالتك
                        </p>

                        <button onClick={()=>{navigate("/contact")}} className="bg-[#032F76] m-auto text-white font-bold px-5 py-3 rounded-xl text-xs md:text-sm flex items-center gap-2.5 shadow-md hover:bg-[#00439F] active:scale-95 transition-all cursor-pointer">
                            <FaCalendarCheck />
                            <span>تواصل معنا</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
