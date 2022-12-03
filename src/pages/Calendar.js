import dayjs from "dayjs";
import React, { useState, useEffect } from "react"
import { generateDate, months } from "../components/calendar"
import cn from "../components/cn"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { axiosInstance, URI } from "../components/axiosInstance"
import Modal from "../components/modal"
import { EditIcon, ExecutionIcon, CategoryIcon, DeleteIcon } from '../img'

export default function Calendar() {
	const days = ["S", "M", "T", "W", "T", "F", "S"]
	const currentDate = dayjs()
	const [today, setToday] = useState(currentDate)
	const [selectDate, setSelectDate] = useState(currentDate)
    const [activity, setActivity] = useState([])
    const [showModal, setShowModal] = useState(false)

    const URL = URI + "/activity"
    
    

    useEffect(() => {  
        (async () => {
        try {
            const res = await axiosInstance.get(URL)
            setActivity(res.data.data.activity)
        } catch(err) {
            console.log(err)
        }
        })()
    }, [])

	return (
        <div className="flex w-full h-full md:-mt-[80px]">
		<div className="md:grid md:grid-cols-2 sm:grid-cols-1 md:divide-x gap-10 justify-center mx-auto h-screen items-center">
			<div className="w-full h-96">
				<div className="flex justify-between items-center">
					<h1 className="select-none font-semibold text-lg">
						{months[today.month()]}, {today.year()}
					</h1>
					<div className="flex gap-10 items-center ">
						<GrFormPrevious
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() - 1));
							}}
						/>
						<h1
							className="text-lg cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(currentDate);
							}}
						>
							Today
						</h1>
						<GrFormNext
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() + 1));
							}}
						/>
					</div>
				</div>
				<div className="grid grid-cols-7 ">
					{days.map((day, index) => {
						return (
							<h1
								key={index}
								className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
							>
								{day}
							</h1>
						);
					})}
				</div>

				<div className=" grid grid-cols-7 ">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							return (
								<div
									key={index}
									className="p-2 text-center h-14 grid place-content-center text-sm border-t"
								>
									<h1
										className={cn(
											currentMonth ? "" : "text-gray-400",
											today
												? "bg-black text-white"
												: "",
											selectDate
												.toDate()
												.toDateString() ===
												date.toDate().toDateString()
												? "bg-blue-500 text-white"
												: "",
											"h-10 w-10 rounded-full grid place-content-center hover:bg-blue-400 hover:text-white transition-all cursor-pointer select-none"
										)}
										onClick={() => {
											setSelectDate(date);
										}}
									>
										{date.date()}
									</h1>
								</div>
							);
						}
					)}
				</div>
			</div>

			<div className="h-96 w-96 sm:px-5 mt-12 md:mt-0 md:pl-14">
				<h1 className="text-lg font-semibold">
					Activities for {selectDate.toDate().toDateString()}
				</h1>
                <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
                    {activity.length > 0 ? (
                        activity.map((act) => (
                            <li key={act._id}>
                                <button
                                    className="w-full hover:bg-blue-400 group hover:ring-blue-500 md:p-0 bg-white" 
                                    onClick={() => setShowModal(true) }>
                                    <article className="w-auto flex space-x-6 my-1">
                                        <div className="w-[0.5%] px-0.5 rounded-full bg-red-500"></div>
                                        <div className="w-[99.5%]">
                                        <div className='flex items-center'>
                                            <h1 class="mr-3 group-hover:text-white font-semibold text-slate-900">
                                            {act.actName}
                                            </h1>
                                            <label class="group-hover:text-blue-200 text-sm text-slate-500">
                                            {act.actCategory}
                                            </label>
                                        </div>    
                                        <div class="group-hover:text-blue-50 my-1 flex text-sm font-medium text-slate-700">
                                            {act.actDate}
                                        </div>
                                        <div class="w-auto text-left group-hover:text-blue-50 my-1 text-sm text-slate-700">
                                            <p className="truncate">
                                            {act.actDescription}
                                            </p>
                                        </div>
                                        </div>
                                    </article>  
                                </button>

                                <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                                    <div className="py-6 px-3 text-star mx-auto items-center justify-center">
                                        <div className="flex justify-between font-bold text-2xl text-white w-[98%] py-8 px-6 rounded-xl bg-blue-500">
                                            <div>
                                                {act.actName}
                                            </div>
                                            <div className='relative'>
                                                <button>
                                                    <div className="ml-2 w-8 h-8 active:scale-[0.98]">
                                                        <EditIcon/>
                                                    </div>
                                                </button>
                                                <button>
                                                    <div className="ml-2 w-8 h-8 active:scale-[0.98]">
                                                        <DeleteIcon/>
                                                    </div>
                                                </button> 
                                            </div>
                                        </div>
                                        <p className='text-lg text-black text-left mt-3'>
                                            {act.actDescription}
                                        </p>
                                    </div>

                                    <div className="flex bg-white w-full pb-4 pt-2 border-none"> 
                                        <div className="flex">
                                            <div className="text-blue-500 ml-2 w-12 h-12">
                                                <ExecutionIcon/>
                                            </div>
                                        </div>
                                        <div>
                                        <p className="flex text-left px-6 text-xl font-medium">Execution Date</p>
                                        <p className="px-6 text-sm font-normal">
                                            {act.actDate}
                                        </p>
                                        </div>
                                    </div>

                                    <div className="flex bg-white w-full py-4 border-none"> 
                                        <div className="flex">
                                            <div className="text-blue-500 ml-2 w-12 h-12">
                                                <CategoryIcon/>
                                            </div>
                                        </div>
                                        <div>
                                        <p className="flex text-left px-6 text-xl font-medium">Category</p>
                                        <p className="px-6 text-sm font-normal">
                                            {act.actCategory}
                                        </p>
                                        </div>
                                    </div>

                                    <div className="flex bg-white w-full py-4 border-none"> 
                                        <div>
                                        <p className="flex px-6 text-xl font-medium">Activity's Status</p>
                                        <div className="mt-2 flex px-5">
                                            <button className='mr-2 active:scale-[0.98] py-1.5 px-3 rounded-lg bg-red-500 text-base text-black hover:bg-red-400 duration-500 font-semibold'>
                                            To Do
                                            </button>
                                            <button className='mr-2 active:scale-[0.98] py-1.5 px-3 rounded-lg bg-yellow-500 text-base text-black hover:bg-yellow-400 duration-500 font-semibold'>
                                            On Going
                                            </button>
                                            <button className='mr-2 active:scale-[0.98] py-1.5 px-3 rounded-lg bg-green-500 text-base text-black hover:bg-green-400 duration-500 font-semibold'>
                                            Done
                                            </button>                   
                                        </div>
                                        </div>
                                    </div>
                                </Modal>
                            </li>
                        ))
                    ) : (
                        <p>No activities for today.</p>
                    )}
                </ol>
			</div>         
            
		</div>
		</div>
	);
}

