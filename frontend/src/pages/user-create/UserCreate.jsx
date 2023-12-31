import React, { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";

const UserCreate = () => {

    const {UserRegister} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newUser = {
           name: e.target.name.value,
          email: e.target.email.value,
          personalContact : e.target.personalContact.value,
          homeContact: e.target.homeContact.value,
          password: e.target.password.value,
        };
    
        UserRegister(newUser);
      };

    return (
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-10 md:mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                            Create User
                        </h2>
                    </div>

                    <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
                        <div className="sm:col-span-2">
                            <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">Name*</label>
                            <input
                                id="name"
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                                Email*
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="subject" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                                Personal Contact*
                            </label>
                            <input
                                id="personalContact"
                                type="number"
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="subject" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                                Home Contact*
                            </label>
                            <input
                                id="homeContact"
                                type="number"
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="subject" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                                Password*
                            </label>
                            <input
                                id="password"
                                type="password"
                                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                            />
                        </div>

                        <div className="flex items-center justify-between sm:col-span-2">
                            <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                                Create
                            </button>
                        </div>
                    </form>
                    {/* form - end */}
                </div>
            </div>
        </>
    )

}
export default UserCreate;