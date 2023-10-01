import React, { useEffect, useState, useRef } from 'react'
import CarCards from '../components/CarCards'
import axiosInstance from '../axiosServer'

const ExploreCar = () => {
    const [carList, setCarList] = useState([])
    const pageState = useRef({ page: 0, limit: 3 })
    async function fetchData() {
        const { data } = await (await axiosInstance.get(`/car/get-all-car?page=${pageState.current.page}&limit=${pageState.current.limit}`)).data
        console.log(data);
        setCarList(data);
    }
    function goToNext() {
        if (carList.length === 0) {
            return
        }
        pageState.current.page += 1;
        fetchData()
    }
    function goToPrev() {
        if (pageState.current.page === 0) {
            return;
        }
        pageState.current.page -= 1;
        fetchData()
    }
    useEffect(() => {
        fetchData()
    }, [])
    if (carList.length === 0) {
        return (
            <>
                <div className='text-grayText text-lg tracking-[-0.5%] '>No More Cars to Show</div>
                <div className='flex justify-end gap-11 bottom-0'>
                    <button className="border-mainColor border-2 px-5 py-4 text-mainColor font-medium hover:text-white hover:bg-mainColor" onClick={goToPrev}>Prev</button>
                    <button className="bg-mainColor border-mainColor border-2 text-white px-5 py-4  hover:text-mainColor hover:bg-white" onClick={goToNext} >Next</button>
                </div>
            </>

        )
    }

    return (
        <div>
            <div className="mb-[1.125rem]">
                <p className="font-vietnam mb-5 text-nordColor1 font-semibold text-3xl">
                    Explore Cars
                </p>
                <p className="font-normal opacity-70">
                    All types of car for your everyday <b>adventure</b>.
                </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-12 mb-10 w-full">
                {carList.map((items) => (
                    <CarCards singleCar={items} key={items.id} />
                ))}
            </div>
            <div className='flex justify-end gap-11'>
                <button className="border-mainColor border-2 px-5 py-4 text-mainColor font-medium hover:text-white hover:bg-mainColor" onClick={goToPrev}>Prev</button>
                <button className="bg-mainColor border-mainColor border-2 text-white px-5 py-4  hover:text-mainColor hover:bg-white" onClick={goToNext}>Next</button>
            </div>
        </div>
    )
}

export default ExploreCar