import React, { useState } from 'react'
import about from "../../assets/about.png"
import tooth from "../../assets/tooth2.png"
import {
    LuMapPin,
    LuPhone,
    LuMail,
    LuClock,
    LuUser,
    LuChevronDown,
    LuCalendarDays,
    LuExternalLink
} from 'react-icons/lu';
import {
    FaRegComments,
    FaStethoscope,
    FaExclamationTriangle,
    FaEllipsisH,
    FaPaperPlane
} from 'react-icons/fa';
import { GiTooth } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
export default function Contact() {
    let navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(null);

    // 1. Top Info Cards Data
    const infoCards = [
        { icon: <LuClock className="w-6 h-6 text-[#032F76]" />, title: 'ساعات العمل', desc1: 'السبت - الخميس', desc2: '9:00 ص - 9:00 م' },
        { icon: <LuMail className="w-6 h-6 text-[#032F76]" />, title: 'البريد الإلكتروني', desc1: 'info@gmail.com', desc2: '' },
        { icon: <LuPhone className="w-6 h-6 text-[#032F76]" />, title: 'رقم الهاتف', desc1: '0123456789', desc2: '' },
        { icon: <LuMapPin className="w-6 h-6 text-[#032F76]" />, title: 'العنوان', desc1: '123 شارع التحرير', desc2: 'القاهرة، مصر' },
    ];

    // 2. Help Options Data (Right Grid Box)
    const helpOptions = [
        { icon: <LuCalendarDays className="w-6 h-6 text-[#032F76]" />, title: 'حجز موعد', desc: 'أريد حجز موعد في العيادة' },
        { icon: <FaStethoscope className="w-5 h-5 text-[#032F76]" />, title: 'استفسار عن الخدمات', desc: 'أريد معرفة المزيد عن خدماتنا' },
        { icon: <FaExclamationTriangle className="w-5 h-5 text-[#032F76]" />, title: 'مشكلة أو شكوى', desc: 'لدي مشكلة وأريد المساعدة' },
        { icon: <FaEllipsisH className="w-5 h-5 text-[#032F76]" />, title: 'أخرى', desc: 'مواضيع أخرى' },
    ];

    // 3. FAQ Data
    const faqs = [
        { q: 'كيف يمكنني حجز موعد؟', a: 'يمكنك حجز موعد من خلال الضغط على زر "احجز موعد الآن" بالأسفل أو الاتصال بنا مباشرة عبر الهاتف.' },
        { q: 'هل تقبلون التأمين الصحي؟', a: 'نعم، نحن نتعامل مع مجموعة واسعة من شركات التأمين الطبي. يرجى التواصل معنا للتأكد من شركتك.' },
        { q: 'ما هي طرق الدفع المتاحة؟', a: 'نقبل الدفع نقداً، وعبر البطاقات الائتمانية المختلفة (فيزا / ماستركارد).' },
        { q: 'ما هي سياسة الإلغاء؟', a: 'يرجى إعلامنا قبل 24 ساعة على الأقل إذا كنت ترغب في إلغاء أو إعادة جدولة موعدك.' },
    ];
    return (
        <div>
            <section className='bg-[#F4F7FF] pt-20 overflow-hidden flex flex-col md:flex-row gap-10 items-center'>
                <div className="r-setion w-[300px] h-[300px] rounded-full overflow-hidden relative -bottom-6 -right-0.5">
                    <img src={about} alt="About Us" className='bg-cover w-full h-full' />
                </div>
                <div className="l-setion w-full md:w-[400px] m-auto text-center p-6">
                    <h2 className='text-4xl font-bold text-[#0054C9] mb-5'>تواصل معانا</h2>
                    <p className='text-[#585555] text-lg mb-5'>نحن هنا للأجابة علي استفساراتك ومساعدتك في الحصول علي افضل رعاية لأسنانك</p>
                </div>
            </section>
            <div className="bg-white min-h-screen py-10 px-4 md:px-12" dir="rtl">
                <div className="max-w-6xl mx-auto space-y-8">

                    {/* ================= 1. TOP INFO CARDS ================= */}
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {infoCards.map((card, index) => (
                            <div key={index} className="bg-white border border-gray-100 rounded-2xl p-6 text-center shadow-sm flex flex-col items-center justify-center space-y-3">
                                <div className="p-3 bg-blue-50 rounded-full">{card.icon}</div>
                                <h3 className="font-bold text-[#032F76] text-lg">{card.title}</h3>
                                <div className="text-gray-600 text-sm space-y-1">
                                    <p>{card.desc1}</p>
                                    {card.desc2 && <p>{card.desc2}</p>}
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* ================= 2. MIDDLE SECTION ================= */}
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Column: Help Block Topics */}
                        <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 lg:col-span-7">
                            <div className="text-center lg:text-right mb-6">
                                <h2 className="text-2xl font-bold text-[#032F76]">كيف يمكننا مساعدتك؟</h2>
                                <p className="text-gray-600 text-sm mt-1">اختر الموضوع المناسب وسنقوم بالرد عليك في أقرب وقت ممكن</p>
                            </div>

                            <div className="space-y-3">
                                {helpOptions.map((opt, index) => (
                                    <div key={index} className="bg-white border border-gray-100 p-4 rounded-xl flex items-center justify-between shadow-sm cursor-pointer hover:border-[#032F76] transition duration-200 group">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition duration-200 flex items-center justify-center w-12 h-12">
                                                {opt.icon}
                                            </div>
                                            <div className="text-right">
                                                <h4 className="font-bold text-[#032F76] text-base">{opt.title}</h4>
                                                <p className="text-gray-500 text-xs mt-0.5">{opt.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Right Column: Contact Form */}
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm lg:col-span-5 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-[#032F76] mb-6 text-right">أرسل لنا رسالة</h2>
                                <form className="space-y-4">
                                    <div className="relative">
                                        <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                                            <LuUser className="w-5 h-5" />
                                        </span>
                                        <input type="text" placeholder="أدخل الاسم بالكامل" className="w-full pr-10 pl-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#032F76] text-sm text-right" />
                                    </div>

                                    <div className="relative">
                                        <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                                            <LuMail className="w-5 h-5" />
                                        </span>
                                        <input type="email" placeholder="البريد الإلكتروني" className="w-full pr-10 pl-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#032F76] text-sm text-right" />
                                    </div>

                                    <div className="relative">
                                        <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
                                            <LuPhone className="w-5 h-5" />
                                        </span>
                                        <input type="tel" placeholder="رقم الهاتف (اختياري)" className="w-full pr-10 pl-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#032F76] text-sm text-right" />
                                    </div>

                                    <div className="relative">
                                        <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#032F76] text-sm text-gray-500 appearance-none text-right bg-white">
                                            <option>اختر موضوع الرسالة</option>
                                            <option>استفسار عام</option>
                                            <option>شكوى</option>
                                            <option>اقتراح</option>
                                        </select>
                                        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                                            <LuChevronDown className="w-5 h-5" />
                                        </span>
                                    </div>

                                    <div>
                                        <textarea rows="4" placeholder="اكتب رسالتك هنا..." className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#032F76] text-sm text-right resize-none"></textarea>
                                    </div>
                                </form>
                            </div>

                            <button className="w-full bg-[#032F76] hover:bg-[#022359] text-white font-bold py-3 px-6 rounded-xl transition duration-200 flex items-center justify-center gap-2 mt-4">
                                <FaPaperPlane className="w-3.5 h-3.5 transform rotate-180" />
                                <span>أرسل الرسالة</span>
                            </button>
                        </div>



                    </section>

                    {/* ================= 3. LOWER SECTION ================= */}
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Right Grid Box: FAQ Accordion */}
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm lg:col-span-5 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center gap-2 mb-6 text-[#032F76]">
                                    <FaRegComments className="w-6 h-6" />
                                    <h2 className="text-xl font-bold">الأسئلة الشائعة</h2>
                                </div>

                                <div className="space-y-3">
                                    {faqs.map((faq, index) => (
                                        <div key={index} className="border border-gray-100 rounded-xl overflow-hidden">
                                            <button
                                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-100 transition duration-200 text-right"
                                            >
                                                <span className="text-sm font-semibold text-gray-700">{faq.q}</span>
                                                <LuChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${openFaq === index ? 'transform rotate-180' : ''}`} />
                                            </button>
                                            {openFaq === index && (
                                                <div className="p-4 bg-white border-t border-gray-50 text-xs text-gray-600 leading-relaxed text-right">
                                                    {faq.a}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button onClick={() => navigate('/popular-qus')} className="cursor-pointer text-sm font-bold text-[#032F76] hover:underline mt-6 block text-center">
                                عرض جميع الأسئلة
                            </button>
                        </div>

                        {/* Left Grid Box: Interactive Map Box */}
                        <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm lg:col-span-7 flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-[#032F76] mb-4 text-right">موقعنا</h2>
                                <div className="w-full h-56 rounded-xl overflow-hidden border border-gray-200 relative">
                                    {/* Fallback clean placeholder map imagery matching visual alignment */}
                                    <div className="absolute inset-0 bg-cover bg-center filter brightness-95" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')` }}></div>
                                    <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4 pt-2">
                                <p className="text-sm text-gray-600 text-right">123 شارع التحرير، القاهرة، مصر</p>
                                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#032F76] hover:underline whitespace-nowrap">
                                    <LuExternalLink className="w-4 h-4" />
                                    <span>الفتح في خرائط جوجل</span>
                                </a>
                            </div>
                        </div>

                    </section>

                    {/* ================= 4. BOTTOM DENTAL BANNER ================= */}
                    <section className="relative bg-[#013594] text-white rounded-2xl p-4 shadow-md overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
                       



                        <div className="flex flex-col md:flex-row items-center gap-6 z-10 w-full md:w-auto justify-around">
                            {/* Tooth Icon Graphic representation from GiTooth */}
                            <div className="w-[50%] md:w-[30%]">
                                <img src={tooth} alt="Tooth" className='w-full' />
                            </div>

                           <div className="l-section  flex flex-col items-center md:items-end gap-4">
                             <div className="text-center space-y-2 z-10">
                                <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide">جاهز لإبتسامة أفضل؟</h2>
                                <p className="text-blue-100 text-sm md:text-base">احجز موعدك الآن وابدأ رحلتك نحو ابتسامة مثالية</p>
                            </div>
                            <button className="bg-white hover:bg-blue-50 text-[#032F76] font-bold py-3 px-6 rounded-xl transition duration-200 shadow-lg flex items-center gap-2 text-sm whitespace-nowrap m-auto">
                                <LuCalendarDays className="w-4 h-4" />
                                <span>احجز موعدك الآن</span>
                            </button>
                           </div>
                        </div>
                    </section>

                </div>
            </div>

        </div>
    )
}
