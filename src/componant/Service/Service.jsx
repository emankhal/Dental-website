import React from 'react'
import serv1 from '../../assets/servc (1).jpg'
import serv2 from '../../assets/servc (2).jpg'
import serv3 from '../../assets/servc (3).jpg'
import serv4 from '../../assets/servc (4).jpg'
import serv5 from '../../assets/servc (5).jpg'
import serv6 from '../../assets/servc (6).jpg'
import servTooth from "../../assets/servTooth.png"
import { FaPlus, FaCalendarCheck, FaTooth } from 'react-icons/fa6';
import { MdOutlineCleanHands, MdOutlineChildCare, MdOutlineShield } from 'react-icons/md';
import { LuSparkles } from 'react-icons/lu';
import about from '../../assets/aboutImg.png'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const services = [
    { id: 1, title: 'تنظيف الأسنان', desc: 'إزالة الجير للحفاظ على صحة اللثة والأسنان ونفس منعش دائماً.', icon: <MdOutlineCleanHands />, image: serv1 },
    { id: 2, title: 'تقويم الأسنان', desc: 'تعديل اصطفاف الأسنان وتحسين الابتسامة باستخدام أحدث أنواع التقويم الشفاف والمعدني.', icon: <FaTooth />, image: serv2 },
    { id: 3, title: 'زراعة الأسنان', desc: 'تعويض الأسنان المفقودة بأحدث تقنيات الزراعة لضمان نتائج دائمة وطبيعية.', icon: <FaTooth />, image: serv3 },
    { id: 4, title: 'علاج العصب', desc: 'علاج ألم الأسنان الشديد بالحفاظ على السن الطبيعي بأعلى معايير الجودة.', icon: <MdOutlineShield />, image: serv4 },
    { id: 5, title: 'تبييض الأسنان', desc: 'إزالة التصبغات المزعجة لمنح أسنانك ابتسامة أكثر إشراقاً.', icon: <LuSparkles />, image: serv5 },
    { id: 6, title: 'حشوات الأسنان', desc: 'علاج تسوس الأسنان باستخدام أفضل المواد التجميلية المحافظة والقوية.', icon: <FaTooth />, image: serv6 },
    { id: 7, title: 'ابتسامة هوليود', desc: 'تصميم ابتسامة متناسقة من خلال عدسات تجميلية وفينير باحترافية معتمدة.', icon: <LuSparkles />, image: serv1 },
    { id: 8, title: 'طب أسنان الأطفال', desc: 'تجربة ممتعة وآمنة لأطفالك في بيئة لطيفة ومريحة.', icon: <MdOutlineChildCare />, image: serv2 },
    { id: 9, title: 'تركيبات الأسنان', desc: 'تركيبات ثابتة ومتحركة لتعويض الأسنان المفقودة واستعادة الوظائف.', icon: <FaTooth />, image: serv3 }
];

export default function Service() {
    let navigate = useNavigate()
    
    return (
        <div dir="rtl" className="w-full bg-white font-sans selection:bg-[#00439F]/10">

            {/*section one*/}
            <section className="w-full h-[80vh] relative overflow-hidden mt-20 md:mt-12">
                <div className="img w-full">
                    <img
                        src={about}
                        alt="About Us"
                        className="w-full  object-cover"
                    />
                </div>

                <div className="absolute inset-0 bg-[#032F76CF] flex items-center justify-center md:justify-start">
                    <div className="text-center w-fit m-auto p-6 md:p-12 lg:p-20 max-w-xl">
                        <h2 className="text-2xl md:text-4xl font-black text-white mb-4">خدماتنا</h2>
                        <p className="text-sm md:text-base text-blue-100/80 mb-6 leading-relaxed">
                            نقدم مجموعة كاملة من خدمات طب الأسنان بأحدث التقنيات وعلى يد أفضل الأطباء
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 md:px-12 lg:px-24 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-xl md:text-2xl font-black text-[#00439F] relative inline-block after:content-[''] after:block after:w-16 after:h-[2px] after:bg-[#00439F] after:mx-auto after:mt-2">
                        خدماتنا المتميزه
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {services.map((ser) => (
                        <div key={ser.id} className="bg-white rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-100/80 overflow-hidden flex flex-col group hover:shadow-[0_20px_50px_rgba(0,67,159,0.08)] transition-all duration-500 hover:-translate-y-1">

                            <div className="w-full aspect-[16/10] bg-gray-100 relative">
                                <img src={ser.image} alt={ser.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md text-[#00439F] text-xl border border-gray-50 z-10 ">
                                    {ser.icon}
                                </div>
                            </div>

                            <div className="p-6 pt-10 flex flex-col flex-grow items-center text-center">
                                <h3 className="text-base font-extrabold text-[#032F76] mb-3 group-hover:text-[#00439F] transition-colors">
                                    {ser.title}
                                </h3>
                                <p className="text-xs md:text-sm text-[#585555] leading-relaxed font-medium mb-6 max-w-[240px] flex-grow">
                                    {ser.desc}
                                </p>

                                <button className="flex items-center gap-2 text-xs md:text-sm font-bold text-[#00439F] hover:bg-[#00439F] hover:text-white px-4 py-2 rounded-xl transition-all duration-300 active:scale-95">
                                    <FaArrowRight />

                                    <span>اعرف اكثر</span>
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            <section className="pb-20 px-4 md:px-12 max-w-5xl mx-auto">
                <div className="w-full flex bg-[#EDF5FE] rounded-[2.5rem] text-center items-center shadow-sm  flex-col p-6 md:flex-row  ">
                    <div className="w-[70%] flex flex-col items-center order-last md:order-first">
                        <h2 className="text-lg md:text-xl font-black text-[#00439F] mb-3">
                            جاهز لبداية ابتسامة جديدة؟
                        </h2>
                        <p className="text-xs md:text-sm text-gray-500 leading-relaxed mb-6 font-medium">
                            احجز موعدك الآن ودعنا نساعدك في الحصول على ابتسامة صحية وجميلة تغير حياتك
                        </p>

                        <button onClick={() => navigate('/appointment')} className="bg-[#032F76] text-white font-bold px-6 py-3 rounded-xl text-xs md:text-sm flex items-center gap-3 shadow-md hover:bg-[#00439F] active:scale-95 transition-all">
                            <FaCalendarCheck />
                            <span>احجز موعدك الان</span>
                        </button>
                    </div>

                    <div className=" md:w-[30%] w-full order-first md:order-last">
                        <img src={servTooth} alt="Tooth" className="w-full h-full object-contain" />
                    </div>
                </div>
            </section>

        </div>
    )
}
