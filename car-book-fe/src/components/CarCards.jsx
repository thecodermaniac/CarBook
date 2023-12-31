import React from 'react'
import { useNavigate } from 'react-router-dom';
import moment from "moment";

const CarCards = ({ singleCar, userId, singleDate, startDate, endDate }) => {
    console.log(moment(singleDate).utc().format('YYYY-MM-DD'));
    const navigate = useNavigate();
    return (
        <div
            className={`bg-white rounded-[20px] pb-2 font-dm border-2 w-full border-nordColor3/30 shadow-md transition ease-in-out delay-150 hover:scale-105 cursor-pointer`}
            onClick={() => {
                navigate(`/explore-car/${singleCar?._id}`)

            }}
        >
            <img
                src={singleCar?.carImage}
                className={`relative rounded-t-[20px]  h-[15rem] w-full object-contain`}
            />
            <div className=" px-4 py-2 lg:px-4 lg:py-4">
                <div className="flex pb-4 border-b border-nordColor3/30 justify-around">
                    <p className="text-nordColor2 text-lg lg:text-xl font-medium">
                        {singleCar?.carName}
                    </p>
                    <button className='border-mainColor border-2 px-2 rounded-xl text-mainColor text-sm'>{singleCar.carType}</button>

                </div>
                {userId && <div className='flex justify-between mt-3'>
                    <p className='text-sm text-grayText font-medium'>Booked On</p>
                    <p className='text-sm text-grayText font-medium'>{singleDate !== null ? moment(singleDate).utc().format('DD-MM-YYYY') : `${moment(startDate).utc().format('DD-MM-YYYY')} to ${moment(endDate).utc().format('DD-MM-YYYY') }`}</p>
                </div>}
                <div className="flex justify-center mt-3">
                    <p className="text-grayText text-sm tracking-[-0.5%] max-w-[18rem]">
                        {singleCar?.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CarCards