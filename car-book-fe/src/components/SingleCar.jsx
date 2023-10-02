import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../axiosServer'
import { toast } from 'react-toastify';
import Datepicker from 'react-tailwindcss-datepicker'
import { useUser } from '../contex/UserContext';


const SingleCar = () => {
    const { user } = useUser();
    const [carInfo, setCarInfo] = useState(null)
    const { carId } = useParams('carId')
    function pad2digits(num) {
        return num.toString().padStart(2, 0);
    }
    function getOnlyDate(n) {
        let date = new Date();
        return [
            pad2digits(date.getMonth()),
            pad2digits(date.getDate() + n),
            date.getFullYear(),
        ].join("-"); //format MM-DD-YYYY
    };
    const [bookInfo, setBookInfo] = useState({
        isOneDay: false,
        startDate: getOnlyDate(0),
        endDate: getOnlyDate(1),
        singleDate: getOnlyDate(0),
        carId: carId,
        userId: user?._id
    })
    async function fetchData() {
        const { data } = await (await axiosInstance.get(`/car/singleCar/${carId}`)).data
        console.log(data);
        setCarInfo(data);
    }

    function handleToggle() {
        console.log(bookInfo);
        setBookInfo({ ...bookInfo, isOneDay: !bookInfo.isOneDay })
    }

    function handleValueChange(newValue) {
        console.log(newValue);
        if (bookInfo.isOneDay) {
            setBookInfo({ ...bookInfo, singleDate: newValue.startDate })
            return
        }
        setBookInfo({ ...bookInfo, endDate: newValue.endDate, startDate: newValue.startDate })
    }

    async function submitBook() {
        if (bookInfo.userId === null) {
            toast.error('Please Login or Sign Up')
            return
        }
        axiosInstance.post('/car/book-car', {
            userId: user?._id,
            carId: bookInfo.carId,
            singleDate: bookInfo.isOneDay ? bookInfo.singleDate : null,
            startDate: bookInfo.isOneDay ? null : bookInfo.startDate,
            endDate: bookInfo.isOneDay ? null : bookInfo.endDate
        }).then((response) => {
            toast.success(response.data.message)
        }).catch((error) => {
            toast.error(error.response.data.message)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>
            <div className="mb-[1.125rem]">
                <p className="font-vietnam mb-5 text-nordColor1 font-semibold text-3xl">
                    Book Car
                </p>
                <p className="font-normal opacity-70">
                    Start your <b>journey</b> with us
                </p>
            </div>
            <div className='flex md:flex-row flex-col-reverse gap-5 relative'>

                <div className="flex flex-col flex-1 items-start gap-7">
                    {!bookInfo.isOneDay}
                    <div className="grid grid-cols-2 w-full gap-3">
                        <p className="text-[20px] text-black-100 font-light flex-1">Your Car</p>
                        <p className="text-[20px] text-black-100 flex-1 bg-secondColor rounded-lg py-1 text-center">{carInfo?.carName}</p>
                        <p className="text-[20px] text-black-100 font-light flex-1">Manufacturer</p>
                        <p className="text-[20px] text-black-100 flex-1 bg-secondColor rounded-lg py-1 text-center">{carInfo?.carBrand}</p>
                        <label htmlFor="singleToggle" className='text-[20px] text-black-100 font-light flex-1'>Single Date ?</label>
                        <input type="checkbox" className='h-4' onChange={handleToggle} checked={bookInfo.isOneDay} />
                        <p className="text-[20px] text-black-100 font-light flex-1">Choose Date</p>
                        <Datepicker
                            inputClassName={"bg-[#FAFAFA] w-full px-4 py-2"}
                            displayFormat={"MM/DD/YYYY"}
                            readOnly={true}
                            asSingle={bookInfo.isOneDay}
                            useRange={!bookInfo.isOneDay}
                            popoverDirection="down"
                            primaryColor={"blue"}
                            value={{
                                startDate: bookInfo.startDate,
                                endDate: bookInfo.endDate,
                            }}
                            onChange={handleValueChange}
                        />
                    </div>

                    <button className='py-3 px-5 border-mainColor border-2 text-mainColor font-medium hover:text-white hover:bg-mainColor' onClick={submitBook}>Book Now</button>
                </div>

                <div className='md:flex-1 items-center w-full'>
                    <div className=' xl:w-full w-[90%]'>
                        <img src={carInfo?.carImage} alt='car image' />
                    </div>
                </div>

            </div>
        </>
    )
}

export default SingleCar
