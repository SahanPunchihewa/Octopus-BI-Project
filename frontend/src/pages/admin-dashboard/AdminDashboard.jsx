import React, { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";

const AdminDashboard = () => {

    const { users } = useContext(UserContext);

    console.log(users);

    return (
        <>

            <h1 className="mt-5 text-4xl text-center font-bold">User Management</h1>

            <label
                className="mx-auto mt-8 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                htmlFor="search-bar"
            >
                <input
                    id="search-bar"
                    placeholder="your keyword here"
                    className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"

                />
                <button className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
                    <div className="relative">
                        {/* Loading animation change opacity to display */}
                        <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                            <svg
                                className="opacity-0 animate-spin w-full h-full"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                        </div>
                        <div className="flex items-center transition-all opacity-1 valid:">
                            <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">Search</span>
                        </div>
                    </div>
                </button>
            </label>

            <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 mt-8">
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="bg-gray-100">


                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold ">ID</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold ">Name</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold ">Email</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold ">Personal Contact</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold ">Home Contact</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Action</th>
                        </tr>
                    </thead>


                    <tbody className="bg-white" >
                        <tr>
                            <td className="py-4 px-6 border-b border-gray-200"></td>
                            <td className="py-4 px-6 border-b border-gray-200 truncate"></td>
                            <td className="py-4 px-6 border-b border-gray-200"></td>
                            <td className="py-4 px-6 border-b border-gray-200"></td>
                            <td className="py-4 px-6 border-b border-gray-200"></td>


                            <td>
                                <button >
                                    <a x-data="{ tooltip: 'Delete' }" href="#">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6 ml-10"
                                            x-tooltip="tooltip"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                            />
                                        </svg>
                                    </a>
                                </button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </>
    )

}

export default AdminDashboard;