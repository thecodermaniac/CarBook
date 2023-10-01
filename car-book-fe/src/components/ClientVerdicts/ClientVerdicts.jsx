import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import { Autoplay, Pagination,Navigation } from "swiper";
import { Autoplay } from 'swiper/modules';
import { client } from "./ClientInfo";

export default function ClientVerdicts() {
    return (
        // autoplay={{ delay: 2000 }}
        <div className="flex flex-col gap-12 mb-14">
            <div className="flex flex-col w-fit items-center gap-5 mx-auto">
                <p className="text-black text-4xl w-fit">Testimonials</p>
                <p className=" text-xl text-center ">
                    What our Clients have to say about us.
                </p>
            </div>
            <div>
                <Swiper modules={[Autoplay]}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}>
                    {client.map((value) => {
                        return (
                            <SwiperSlide>
                                <div className="bg-[#F9FAFB] flex flex-col sm:flex-row p-6 px-12 rounded-xl border-1  justify-between items-center">
                                    <img src={value.picImage} alt="" className="w-[15%] aspect-square object-cover rounded-full mx-auto" />
                                    <div className="flex flex-col items-start gap-2 sm:w-1/2 w-full">
                                        <p className="pt-4">{value.verdict}</p>
                                        <div className="flex flex-col ">
                                            <p className="text-black text-lg">{value.clientName}</p>
                                            <p className="font-bold">{value.designation}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>
        </div>
    );
}
