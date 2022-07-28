import React, { useState} from 'react'
import { axiosInstance } from '../config';

function Note({mynote}) {
  const [updatemode, setUpdateMode] = useState(false)

  function refresh(){
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  const handleDelete = async() => {
    console.log(mynote)
    try {
      await axiosInstance.delete( `/${mynote._id}`).then(refresh());
      console.log("Successfully deleted")
    } catch (error) {
      console.log(error)
    }
   }

   const [title, setTitle] =useState(mynote.title)
   const [description, setDescription] = useState(mynote.description)
   const handleUpdate = () => {
     setUpdateMode(true);
   }

   const handleSubmit = async() => {
     try {
       await axiosInstance.put(`/${mynote._id}`, {
         title, description
       }); 
       window.location.reload();
     } catch (error) {
       
     }
   }

   const handleCancel = () => {
    setUpdateMode(false);
  }

  return  <div key={mynote._id} className="p-6 bg-gray-100 rounded-lg">
    {updatemode ? (
      <div>
        <div className="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">
          <div className="w-full px-2 py-2 mb-6 mt-6 overflow-hidden bg-white rounded-lg lg:max-w-4xl">
            <div className="mb-4">
              <h1 className="font-serif text-3xl text-4xl decoration-gray-400">
                Edit Note
              </h1>
            </div>

            <div className="w-full px-2 py-4 bg-white rounded shadow-md ring-1 ring-gray-900/10">
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
                    value={title}
                   onChange={(e)=> {
                     setTitle(e.target.value);
                   }}
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
                    value={description}
                    onChange={(e)=> {
                      setDescription(e.target.value);
                    }}
                    className="block w-full py-3 px-3 mt-1 rounded-md shadow-sm placeholder:text-gray-400 placeholder:text-right focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    rows="5"
                    placeholder="400"
                  ></textarea>
                </div>

                <div className="flex items-center justify-start mb-3 mt-5 gap-x-2">
                  <button
                    type="button"
                    onClick={()=>handleSubmit()}
                    className="px-2 py-2 text-sm font-semibold rounded-md shadow-md text-sky-100 bg-green-800 hover:bg-sky-700 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-6 py-2 text-sm font-semibold text-gray-100 bg-gray-400 rounded-md shadow-md hover:bg-red-800 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
    ) : (
      <div key={mynote._id} className="p-6 bg-gray-100 rounded-lg">

  <h3 className="text-lgx2 font-bold mb-2"> {mynote.title}</h3>

  <p className="text-sm leading-6 text-gray-600">
   {mynote.description}
  </p>

  <div className="flex items-baseline justify-end">
    <button onClick={handleUpdate} className="px-2 py-1 mt-4 mx-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
      Edit
    </button>
    <button 
    onClick={handleDelete} 
     className="px-2 py-1 mt-4 text-blue bg-white-600 rounded-lg hover:bg-gray-300">
      Delete
    </button>
  </div>
</div>
    )}
    </div>
  }


export default Note