import React from "react";

export default function Activity(){
    return(
        <button className="w-full hover:bg-blue-500 group hover:ring-blue-500 hover:shadow-md md:p-0 bg-white ring-1 ring-slate-200 shadow-sm">
            <article className="w-auto flex space-x-6 my-7 mx-8">
                {/* di sini akan ada status */}
                <div className="w-[2%] py-10 px-1 rounded-full bg-red-500"></div>
                <div className="w-[98%]">
                    <div className='flex items-center'>
                        <h1 class="mr-3 group-hover:text-white font-semibold text-lg text-slate-900">Title of Activity</h1>
                        {/* <dt class="sr-only">Title</dt> */}
                        {/* <dd class="mr-3 group-hover:text-white font-semibold text-slate-900"> {activity.actName}</dd> */}
                        <label class="group-hover:text-blue-200 text-sm text-slate-500">Category</label>
                        {/* <dt class="sr-only">Title</dt> */}
                        {/* <dd class="group-hover:text-blue-200 text-sm text-slate-500">{activity.actCategory}</dd> */}
                    </div>        
                    <div class="group-hover:text-blue-50 my-1 flex text-sm font-medium text-slate-700">
                        07/11/2022
                        {/* <dt class="sr-only">Date</dt> */}
                        {/* <dd class="group-hover:text-gray-300 my-1 flex text-sm font-medium text-slate-700">{activity.actDate}</dd> */}
                    </div>
                    <div class="w-auto text-left group-hover:text-blue-50 my-1 text-sm text-slate-700">
                        <p className="truncate">Di sini akan tertulis deskripsi dari activity yang ditampilkan. Deskripsi ini akan terpotong sesuai dengan ukuran tampilan page. Sebagai contoh, deskripsi ini akan ditulis dengan panjang sehingga terlihat perbedannya ketika ukuran page berubah. </p>
                        {/* <dt class="sr-only">Description</dt> */}
                        {/* <dd class="group-hover:text-blue-200 text-sm text-slate-500">{activity.actDescription}</dd> */}
                    </div>
                </div>
            </article>    
        </button>
    )
}
