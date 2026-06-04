import React from 'react'
import { BsTelephoneInbound, BsEnvelope, BsGeoAlt } from 'react-icons/bs'
import { CiFacebook } from 'react-icons/ci'
import { FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { LiaToothSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialMedia = [
        {
            id: 'facebook',
            name: 'Facebook',
            href: 'https://facebook.com',
            icon: <CiFacebook className="text-xl" />,
            hoverClass: 'hover:bg-[#1877F2]'
        },
        {
            id: 'instagram',
            name: 'Instagram',
            href: 'https://instagram.com',
            icon: <FaInstagram className="text-lg" />,
            hoverClass: 'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]'
        },
        {
            id: 'twitter',
            name: 'Twitter',
            href: 'https://twitter.com',
            icon: <FaTwitter className="text-base" />,
            hoverClass: 'hover:bg-black'
        },
        {
            id: 'whatsapp',
            name: 'WhatsApp',
            href: 'https://wa.me/201234567890',
            icon: <FaWhatsapp className="text-lg" />,
            hoverClass: 'hover:bg-[#25D366]'
        }
    ];

    return (
        <footer className='bg-[#041F4B] text-white pt-12 pb-6 px-4 md:px-8 mt-auto md:col-span-3' dir="rtl">
            <div className='max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-4'>

                {/* Column 1: Brand Profile */}
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <LiaToothSolid className="text-4xl text-sky-400" />
                        <div>
                            <div className="font-bold text-xl tracking-wide">سمايل كلينك</div>
                            <span className="text-xs text-slate-300">للعناية بالأسنان</span>
                        </div>
                    </div>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                        نقدم أفضل خدمات طب وتجميل الأسنان بأحدث التقنيات العالمية لضمان ابتسامة صحية ومشرقة لك ولعائلتك.
                    </p>
                    <div className="socials flex items-center gap-3 mt-2">
                        {socialMedia.map((platform) => (
                            <a
                                key={platform.id}
                                href={platform.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={platform.name}
                                className={`
                                    flex size-10 items-center justify-center rounded-full 
                                    bg-white/5 text-slate-300 hover:text-white 
                                    transition-all duration-200 shadow-sm
                                    ${platform.hoverClass}
                                `}
                            >
                                {platform.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Column 2: Services */}
                <div className="services">
                    <h3 className="font-bold text-lg tracking-wide mb-4 ps-2">
                        خدماتنا
                    </h3>
                    <ul className="flex flex-col gap-2 text-sm text-slate-300">
                        <li className="hover:text-white hover:ps-1.5 transition-all duration-200">
                            <Link to="/services" className="block py-1">تنظيف الأسنان</Link>
                        </li>
                        <li className="hover:text-white hover:ps-1.5 transition-all duration-200">
                            <Link to="/services" className="block py-1">تبييض الأسنان</Link>
                        </li>
                        <li className="hover:text-white hover:ps-1.5 transition-all duration-200">
                            <Link to="/services" className="block py-1">تقويم الأسنان</Link>
                        </li>
                        <li className="hover:text-white hover:ps-1.5 transition-all duration-200">
                            <Link to="/services" className="block py-1">زراعة الأسنان</Link>
                        </li>
                        <li className="hover:text-white hover:ps-1.5 transition-all duration-200">
                            <Link to="/services" className="block py-1">حشو الأسنان</Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Quick Links (Balances the 4-Column Layout) */}
                <div className="quick-links">
                    <h3 className="font-bold text-lg tracking-wide mb-4 ps-2">
                        روابط سريعة
                    </h3>
                    <ul className="flex flex-col gap-2 text-sm text-slate-300">
                        <li className="hover:text-white hover:ps-1.5 transition-all duration-200">
                            <Link to="/" className="block py-1">الرئيسية</Link>
                        </li>
                        <li className="hover:text-white hover:ps-1.5 transition-all duration-200">
                            <Link to="/about" className="block py-1">من نحن</Link>
                        </li>
                        <li className="hover:text-white hover:ps-1.5 transition-all duration-200">
                            <Link to="/doctors" className="block py-1">أطباؤنا</Link>
                        </li>
                        <li className="hover:text-white hover:ps-1.5 transition-all duration-200">
                            <Link to="/appointments" className="block py-1">احجز موعدًا</Link>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Contact Info */}
                <div className='flex flex-col gap-3'>
                    <h3 className='font-bold text-lg tracking-wide mb-1 ps-2'>تواصل معنا</h3>

                    <a href="tel:+201234567890" className="tele flex items-center gap-2 group text-slate-300 hover:text-white transition-colors duration-200">
                        <div className="icon p-3 bg-white/5 rounded-full w-max text-slate-300 group-hover:bg-sky-400/20 group-hover:text-sky-400 transition-all duration-200">
                            <BsTelephoneInbound size={16} />
                        </div>
                        <span className="text-sm" dir="ltr">+20 123 456 7890</span>
                    </a>

                    <a href="mailto:info@smileclinic.com" className="email flex items-center gap-2 group text-slate-300 hover:text-white transition-colors duration-200">
                        <div className="icon p-3 bg-white/5 rounded-full w-max text-slate-300 group-hover:bg-sky-400/20 group-hover:text-sky-400 transition-all duration-200">
                            <BsEnvelope size={16} />
                        </div>
                        <span className="text-sm">info@smileclinic.com</span>
                    </a>

                    <div className="location flex items-center gap-2 text-slate-300 text-sm">
                        <div className="icon p-3 bg-white/5 rounded-full w-max text-slate-300">
                            <BsGeoAlt size={16} />
                        </div>
                        <span>القاهرة، مصر</span>
                    </div>
                </div>

            </div>


            <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#F1F1F1] text-center text-xs text-slate-400  gap-4">
                <p className="text-white text-[11px]">Designed by
                    SMART TECHNOLOGY COMPANY</p>
            </div>
        </footer>
    )
}