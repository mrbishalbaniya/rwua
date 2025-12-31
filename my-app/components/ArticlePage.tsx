'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ArticlePage() {
    return (
        <div className="min-h-screen" style={{
            backgroundColor: '#ffffff'
        }}>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
                {/* Hero Image Section */}
                <div
                    className="bg-cover bg-center text-center overflow-hidden"
                    style={{
                        minHeight: '500px',
                        backgroundImage: "url('https://rwua.com.np/wp-content/uploads/2021/10/1.jpg')"
                    }}
                    title="ग्रामिण नारी उत्थान संघको २९ औं साधारण सभा"
                >
                </div>

                {/* Article Content */}
                <div className="max-w-3xl mx-auto">
                    <div className="mt-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal" style={{
                        background: '#ffffff',
                        border: '1px solid rgba(0, 0, 0, 0.08)',
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)'
                    }}>
                        <div className="relative top-0 -mt-32 p-5 sm:p-10 bg-white" style={{
                            borderRadius: '12px',
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.12)'
                        }}>
                            {/* Article Title */}
                            <h1 className="text-gray-900 font-bold text-3xl mb-2">
                                ग्रामिण नारी उत्थान संघको २९ औं साधारण सभा सम्पन्न
                            </h1>

                            {/* Article Meta */}
                            <p className="text-gray-700 text-xs mt-2">
                                लेखक:
                                <Link
                                    href="#"
                                    className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out ml-1"
                                >
                                    RWUA टिम
                                </Link>
                                {' '}श्रेणी:
                                <Link
                                    href="#"
                                    className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out ml-1"
                                >
                                    संस्थागत गतिविधि
                                </Link>
                                ,
                                <Link
                                    href="#"
                                    className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out ml-1"
                                >
                                    साधारण सभा
                                </Link>
                            </p>

                            {/* Article Content */}
                            <p className="text-base leading-8 my-5">
                                ग्रामीण नारी उत्थान संघ (RWUA) को २९ औं वार्षिक साधारण सभा सफलतापूर्वक सम्पन्न भएको छ।
                                यस साधारण सभामा संस्थाको गत वर्षका उपलब्धिहरू, चुनौतीहरू र भविष्यका योजनाहरूबारे विस्तृत छलफल भएको थियो।
                                सभामा सदस्यहरूले संस्थाको कामकारबाहीप्रति सन्तुष्टि व्यक्त गर्दै आगामी दिनहरूमा थप प्रभावकारी कार्यक्रमहरू सञ्चालन गर्न सुझाव दिएका थिए।
                            </p>

                            <h3 className="text-2xl font-bold my-5">मुख्य उपलब्धिहरू</h3>

                            <p className="text-base leading-8 my-5">
                                गत आर्थिक वर्षमा संस्थाले महिला सशक्तिकरण, बाल संरक्षण, स्वास्थ्य सेवा र शिक्षाका क्षेत्रमा उल्लेखनीय कार्यहरू गरेको छ।
                                विशेष गरी ग्रामीण क्षेत्रका महिलाहरूलाई आर्थिक रूपमा स्वावलम्बी बनाउने दिशामा विभिन्न सीप विकास तालिमहरू सञ्चालन गरिएको छ।
                                यसैगरी बालबालिकाको शिक्षा र स्वास्थ्यमा सुधार ल्याउन विभिन्न कार्यक्रमहरू सञ्चालन गरिएको छ।
                            </p>

                            <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600 border-indigo-600">
                                "हाम्रो उद्देश्य ग्रामीण महिलाहरूको जीवनस्तरमा सुधार ल्याउनु र उनीहरूलाई समाजमा सम्मानजनक स्थान दिलाउनु हो।"
                                - अध्यक्ष, RWUA
                            </blockquote>

                            <h3 className="text-2xl font-bold my-5">भविष्यका योजनाहरू</h3>

                            <p className="text-base leading-8 my-5">
                                आगामी आर्थिक वर्षमा संस्थाले महिला उद्यमिता विकास, डिजिटल साक्षरता कार्यक्रम र स्वास्थ्य शिविरहरूलाई प्राथमिकता दिने भएको छ।
                                यसैगरी स्थानीय सरकारसँगको साझेदारीमा थप प्रभावकारी कार्यक्रमहरू सञ्चालन गर्ने योजना रहेको छ।
                                संस्थाले समुदायिक विकासमा महिलाहरूको भूमिकालाई अझ बलियो बनाउने दिशामा काम गर्ने प्रतिबद्धता जनाएको छ।
                            </p>

                            <h3 className="text-2xl font-bold my-5">सहभागिता र सहयोग</h3>

                            <p className="text-base leading-8 my-5">
                                साधारण सभामा स्थानीय जनप्रतिनिधिहरू, सामुदायिक नेताहरू र विभिन्न संस्थाका प्रतिनिधिहरूको सहभागिता रहेको थियो।
                                सबैले संस्थाको कामप्रति प्रशंसा गर्दै भविष्यमा पनि निरन्तर सहयोग गर्ने प्रतिबद्धता व्यक्त गरेका थिए।
                                यस अवसरमा संस्थाका सदस्यहरूलाई उनीहरूको योगदानका लागि सम्मान गरिएको थियो।
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-6">
                                <Link
                                    href="#"
                                    className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                                >
                                    #साधारणसभा
                                </Link>
                                ,
                                <Link
                                    href="#"
                                    className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                                >
                                    #महिलासशक्तिकरण
                                </Link>
                                ,
                                <Link
                                    href="#"
                                    className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                                >
                                    #ग्रामीणविकास
                                </Link>
                                ,
                                <Link
                                    href="#"
                                    className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                                >
                                    #RWUA
                                </Link>
                                ,
                                <Link
                                    href="#"
                                    className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                                >
                                    #सामुदायिकविकास
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}