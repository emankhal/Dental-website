import React, { useState } from 'react'
import img1 from "../../assets/quisSection2.jpg"
import img2 from "../../assets/quisSection.png"
import smailClinc from "../../assets/aboutImg.png"
import { CiCalendar } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
export default function Popularqus() {
    let navigate = useNavigate()
    const [openIndex, setOpenIndex] = useState(5);
    const faqData = [
        {
            question: "هل الكشف مؤلم؟",
            answer: "لا، نحرص على استخدام أحدث التقنيات وأفضل طرق البنج الموضعي لتوفير الراحة التامة وضمان راحتك أثناء الكشف والعلاج."
        },
        {
            question: "كم تستغرق جلسة تنظيف الأسنان؟",
            answer: "تستغرق الجلسة عادةً بين 30 إلى 45 دقيقة، وذلك حسب حالة الجير والتصبغات على الأسنان."
        },
        {
            question: "هل يمكن تقسيط تكلفة العلاج؟",
            answer: "نعم، نوفر أنظمة تقسيط مريحة ومتنوعة لتناسب ميزانيتك بالتعاون مع العديد من الجهات والشركات."
        },
        {
            question: "هل زراعة الأسنان آمنة؟",
            answer: "بالتأكيد، زراعة الأسنان تعتبر من أنجح العمليات وأكثرها أماناً في طب الأسنان بنسبة نجاح تتعدى 95%."
        },
        {
            question: "متى يجب زيارة طبيب الأسنان؟",
            answer: "يُنصح بزيارة طبيب الأسنان بشكل دوري كل 6 أشهر للفحص العام وتنظيف الأسنان للوقاية من أي مشاكل مستقبلية."
        },
        {
            question: "هل تقويم الاسنان مؤلم؟",
            answer: "قد تشعر ببعض الضغط البسيط في الأيام الأولى بعد تركيب أو شد التقويم، وهو أمر طبيعي تماماً ويزول سريعاً."
        },
        {
            question: "كم تستغرق مدة تقويم الأسنان؟",
            answer: "تختلف المدة من حالة لأخرى، ولكن في المتوسط تتراوح مدة العلاج بالتقويم بين 12 إلى 24 شهراً."
        },
        {
            question: "هل تبييض الاسنان يضعف المينا؟",
            answer: "لا، التبييض الاحترافي تحت إشراف الطبيب يستخدم مواد آمنة تماماً لا تؤثر على طبقة المينا السطحية."
        }
    ];
    return (
        <>
            <div className="w-full min-h-screen bg-white font-sans text-right py-18" dir="rtl">

                {/* 1. HERO & SEARCH SECTION */}
                <section className="bg-[#ECF5FD] px-6 py-12 md:py-16 overflow-hidden">
                    <div className=" max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around gap-10">
                        {/* Left Column: Image with organic blue shape */}
                        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                            <div className="relative w-[80%]  bg-[#0099de] rounded-[118%_54%_181%_64%] overflow-hidden flex items-center justify-center shadow-md">
                                <img
                                    src={img1}
                                    alt="Tooth and Question Mark"
                                    className=" object-contain"
                                />
                            </div>
                        </div>

                        {/* Right Column: Text & Search Input */}
                        <div className="w-full md:w-1/2 flex flex-col items-center space-y-5">
                            <div className="space-y-1">
                                <h1 className="text-3xl md:text-4xl font-extrabold text-[#0066cc]">
                                    الأسئلة الشائعة
                                </h1>
                                <p className="text-gray-500 font-medium text-sm md:text-base my-4">
                                    كل ما تريد معرفته قبل زيارتنا
                                </p>
                            </div>

                            {/* Search Input Box */}
                            <div className="flex items-center h-11 w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm focus-within:ring-2 focus-within:ring-blue-400 transition-all px-4">

                                <input
                                    className="outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent h-full w-full"
                                    type="text"
                                    placeholder="ابحث عن سؤالك هنا..."
                                />
                                <span className="text-gray-400 ml-2">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </span>
                            </div>
                        </div>


                    </div>
                </section>

                {/* 2. ACCORDION (FAQ LIST) SECTION */}
                <section className="px-6 py-12 bg-white">
                    <div className="max-w-7xl mx-auto">

                        {/* Section Header Title */}
                        <div className="text-center mb-10 relative">
                            <h2 className="relative text-xl md:text-2xl font-bold text-[#0066cc] inline-block pb-2  border-blue-500">
                                أكثر الأسئلة شيوعاً
                            </h2>
                            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-16 h-[2px] bg-[#0099de] rounded-full"></div>
                        </div>

                        {/* Accordion List */}
                        <div className="space-y-4">
                            {faqData.map((item, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div
                                        key={index}
                                        className={`border rounded-2xl transition-all duration-300 overflow-hidden ${isOpen
                                                ? 'border-[#0099de] ring-2 ring-[#0099de]/20 bg-white shadow-md'
                                                : 'border-gray-100 bg-white hover:border-gray-200'
                                            }`}
                                    >
                                        {/* Accordion Header Trigger */}
                                        <button
                                            type="button"
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="w-full px-6 py-4 flex items-center justify-between gap-4 text-right text-[#0066cc] font-bold text-sm md:text-base focus:outline-none"
                                        >
                                            <div className="flex items-center gap-3">
                                                {/* Clock/Question indicator icon */}
                                                <span className="text-[#0054C9]">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <circle cx="12" cy="12" r="10"></circle>
                                                        <polyline points="12 6 12 12 16 14"></polyline>
                                                    </svg>
                                                </span>
                                                <span>{item.question}</span>
                                            </div>

                                            {/* Status Plus/Minus Circle Icon */}
                                            <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#0099de] text-white' : 'bg-gray-100 text-gray-500'
                                                }`}>
                                                {isOpen ? (
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                                ) : (
                                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                                )}
                                            </div>
                                        </button>

                                        {/* Accordion Content Panel */}
                                        <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 border-t border-gray-100 opacity-100' : 'max-h-0 opacity-0'
                                            }`}>
                                            <div className="px-6 py-4 text-xs md:text-sm text-gray-500 leading-relaxed font-medium bg-gray-50/50">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* 3. MEDICAL ADVICE BANNER */}
                <section className="px-6 py-4 bg-white">
                    <div className="max-w-7xl mx-auto bg-[#ECF5FD] border border-blue-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-around gap-6 shadow-sm">
                        {/* Blue Shield / Tooth Shield Graphic representation */}
                        <div className="w-[15%]  flex items-center justify-center ">
                            <img src={img2} alt="Medical Advice" />
                        </div>
                        <div className=" text-center w-[60%]">
                            <h3 className="text-lg font-extrabold text-[#0066cc]">نصيحة طبية</h3>
                            <p className="text-xs md:text-sm text-gray-600 font-medium leading-relaxed">
                                الحفاظ على صحة أسنانك يبدأ بالعناية اليومية وبزيارات منتظمة لطبيب الأسنان لكل 6 شهور على الأقل.
                            </p>
                        </div>

                    </div>
                </section>

                {/* 4. FOOTER INTERACTIVE CARD */}
                 <section dir="rtl" className="max-w-7xl rounded-2xl mx-auto relative overflow-hidden mt-20 md:mt-12">
                        {/* حاوية الصورة */}
                        <div className="img w-full">
                          <img
                            src={smailClinc}
                            alt="About Us"
                            className="w-full h-[180px]  object-cover"
                          />

                            {/* بطاقة المعلومات المتراكبة */}
                            <div className="absolute text-center top-1/2 left-0 transform  -translate-y-1/2 bg-white/90 bg-opacity-90  rounded-full p-6 w-[90%] max-w-md shadow-lg">
                              <h3 className="text-lg md:text-xl font-bold text-[#0066cc] mb-2">
                               لم تجد إجابة سؤالك؟
                              </h3>
                              <p className="text-sm text-gray-700 font-medium leading-relaxed">
تواصل معانا الان وسنرد علي جميع استفساراتك                              </p>

                            <div className="btn w-[35%] m-auto mt-6">
                                <button onClick={() => navigate('/contact')} className="bg-[#032F76] text-white mt-4 w-full h-11 rounded-2xl font-medium hover:bg-[#0059b2] active:scale-95 transition-all flex items-center justify-center gap-2 p-2">
                                <CiCalendar className='text-white text-xl' />
                                    تواصل معنا
                                </button>

                            </div>
                            </div>  
                        </div>
                
                       
                      </section>

            </div>

        </>
    )
}
