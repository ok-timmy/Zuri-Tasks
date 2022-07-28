import React, { useState } from "react";
import { axiosInstance } from "../config";

function NewNote() {
  const [details, setDetails] = useState({});
  const [notedetails, setNotedetails] = useState({});

  const thisUser = localStorage.getItem("user");
  const thisVeryUser = JSON.parse(thisUser);
  if (thisVeryUser === null) {
    window.location.replace("/login");
  }
  const author = thisVeryUser.email;
  console.log(author);

  function handleChange(evt) {
    const value = evt.target.value;
    setDetails({
      ...details,
      [evt.target.name]: value,
    });
    setNotedetails({ ...details, author });
  }

  const handleSubmit = async (e) => {
    console.log(details);
    e.preventDefault();
    console.log(notedetails);
    setNotedetails(notedetails);
    console.log(notedetails);

    try {
      console.log(details);
      const user = await axiosInstance.post(
        `/newnote/:${author}`,
        notedetails
      );
      user.data && window.location.replace("/notes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <div className="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">
          <div className="w-full px-16 py-20 mb-6 mt-6 overflow-hidden bg-white rounded-lg lg:max-w-4xl">
            <div className="mb-4">
              <h1 className="font-serif text-3xl text-4xl decoration-gray-400">
                Write Note
              </h1>
            </div>

            <div className="w-full px-6 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10">
              <form>
                {/* <!-- Title --> */}
                <div>
                  <label
                    className="block text-sm font-bold text-gray-700"
                    htmlFor="title"
                  >
                    Title
                  </label>

                  <input
                    className="block w-full py-3 px-3 mt-1  rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-gray-300 focus:ring focus:ring-gray-700 focus:ring-opacity-50"
                    type="text"
                    autoComplete="off"
                    onChange={handleChange}
                    name="title"
                    maxLength={20}
                    placeholder="20"
                  />
                </div>

                {/* <!-- Description --> */}
                <div className="mt-4">
                  <label
                    className="block text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Description
                  </label>
                  <textarea
                    name="description"
                    onChange={handleChange}
                    className="block w-full py-3 px-3 mt-1 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    rows="5"
                    placeholder="400"
                  ></textarea>
                </div>

                <div className="flex items-center justify-start mb-3 mt-5 gap-x-2">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="px-6 py-2 text-sm font-semibold rounded-md shadow-md text-sky-100 bg-sky-500 hover:bg-sky-700 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                  >
                    Create
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 text-sm font-semibold text-gray-100 bg-gray-400 rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewNote;
