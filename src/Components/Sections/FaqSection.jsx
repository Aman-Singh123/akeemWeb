import { useState } from "react";

const faqs = [
    {
        question: "Currency thresholds drifted, region flow seen clear?",
        answer:
            "Barriers moved with ease, shifting tokens across streams. New paths shimmered softly where old limits once stood.",
    },
    {
        question: "Conversion flattened. Stable received?",
        answer: "Barriers moved with ease, shifting tokens across streams. New paths shimmered softly where old limits once stood.",
    },
    {
        question: "Wallet modes tangled fine. Solo toggle missed where?",
        answer: "Barriers moved with ease, shifting tokens across streams. New paths shimmered softly where old limits once stood.",
    },
    {
        question: "Fee narrowed. Shift timed?",
        answer: "Barriers moved with ease, shifting tokens across streams. New paths shimmered softly where old limits once stood.",
    },
    {
        question: "Security expanded. Trust unseen?",
        answer: "Barriers moved with ease, shifting tokens across streams. New paths shimmered softly where old limits once stood.",
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(0); 

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 px-4 sm:px-8 lg:px-16 bg-white">
            <p className="text-[18px] md:text-[32px] mb-10 lg:text-[40px] font-poppins  font-semibold  text-black">
                Fequently Asked Questions
            </p>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
                <div className="flex-1 space-y-4">
                    {faqs.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#6061F714] border border-[#CFCFCF] rounded-lg p-4 cursor-pointer transition"
                            onClick={() => toggle(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-black font-poppins md:text-xl sm:text-[12px]">
                                    {item.question}
                                </h3>
                                <span className="text-3xl text-[#1d1d1d]">
                                    {openIndex === index ? "−" : "+"}
                                </span>
                            </div>
                            {openIndex === index && item.answer && (
                                <p className="mt-3 sm:text-[10px]  md:text-[16px] font-light text-black font-poppins">
                                    {item.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="w-full lg:w-[340px] shrink-0 bg-[#f7f6fd] p-6 rounded-xl text-center shadow-sm flex flex-col  justify-between">
                    <div className="mt-8 flex flex-col items-center text-center">
                        <img src="/Images/Png/msg.png" alt="msgicon" className="mb-4" />
                        <h3 className="font-extrabold  mt-4   text-xl text-black mb-5">
                            Do you have more questions?
                        </h3>
                        <p className="font-poppins text-lg  text-[#00000099] mb-6">
                            End-to-end payments and financial management in a single solution.
                            Meet the right platform to help realize.
                        </p>
                    </div>
                    <button className="mt-4  px-5 py-3 rounded-full font-poppins text-sm font-medium bg-[#6061F7] text-white ">
                        Send a Direct Mail
                    </button>
                </div>
            </div>

        </section>
    );
}
