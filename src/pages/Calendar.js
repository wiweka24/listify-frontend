import dayjs from "dayjs";
import React, { useState, useEffect } from "react"
import { generateDate, months } from "../components/calendar"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"
import { axiosInstance, URI, dict} from "../components/component-config.js"
import cn from "../components/component-config.js";
import Modal from "../components/modal"

export default function Calendar() {
	const days = ["S", "M", "T", "W", "T", "F", "S"]
	const currentDate = dayjs()
	const [today, setToday] = useState(currentDate)
	const [selectDate, setSelectDate] = useState(currentDate)
    const [activity, setActivity] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [actToShow, setActToShow] = useState({act:{
        _id: "",
        actStatus: ""
      }})
    const URL = URI + "/activity"
    
    const handleClick = (act) => {
        setActToShow(act)
        setShowModal(true)
      }

    useEffect(() => {  
        (async () => {
        try {
            const res = await axiosInstance.get(URL)
            setActivity(res.data.data.activity)
        } catch(err) {
            console.log(err)
        }
        })()
    }, [showModal])

	return (
        <div className="flex w-full h-full md:-mt-[80px]">
		<div className="md:grid md:grid-cols-2 sm:grid-cols-1 md:divide-x gap-10 justify-center mx-auto w-[90%] h-screen items-center">
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
								setToday(currentDate)
								setSelectDate(currentDate);
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
				<div className="grid grid-cols-7">
					{days.map((day, index) => {
						return (
							<h1
								key={index}
								className="mt-4 p-2 text-center h-14 grid place-content-center text-sm text-gray-500 select-none"
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

			<div className="h-96 w-full sm:px-5 mt-12 md:mt-0 md:pl-14">
				<h1 className="text-lg font-semibold">
					Activities for {selectDate.toDate().toDateString()}
				</h1>
				<div className="md:overflow-y-auto h-96 ">
					<ol className="mt-4 space-y-1 text- leading-6 text-gray-500">
						{activity.length > 0 ? (
							activity.map((act) => (
								<li key={act._id}>
									<button
										className="w-[93%] hover:bg-blue-400 group hover:ring-blue-500 md:p-0 bg-white" 
										onClick={() => handleClick({act})}>

										<article className="w-auto flex space-x-6 my-1">
											<div className={"w-[0.5%] px-0.5 rounded-full " + dict[act.actStatus]}></div>
											<div className="w-[99.5%]">
											<div className='flex items-center'>
												<h1 class="mr-3 group-hover:text-white font-semibold text-slate-900">
												{act.actName}
												</h1>
												<label class="group-hover:text-blue-200 text-sm text-slate-500">
												{act.actCategory}
												</label>
											</div>  
											<div class="w-[93%] text-left group-hover:text-blue-50 my-1 text-sm text-slate-700">
												<p className="truncate">
												{act.actDescription}
												</p>
											</div>
											</div>
										</article>  
									</button>

									<Modal 
									isVisible={showModal} 
									onClose={() => setShowModal(false)}
									actToShow={actToShow}>
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
		</div>
	);
}

