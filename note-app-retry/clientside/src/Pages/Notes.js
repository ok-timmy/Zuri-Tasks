import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Note from "./Note";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

function Notes() {
  const { login } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [mynotes, setMynotes] = useState([]);
  useEffect(() => {
    async function fetchPost() {
      try {
        const thisUser = localStorage.getItem("user");
        const thisVeryUser = JSON.parse(thisUser);
        console.log(thisVeryUser);
        if (thisVeryUser === null) {
          window.location.replace("/login");
        }
        const notes = await axios.get(
          `http://localhost:5000/api/my-notes/:${thisVeryUser.email}`
        );
        console.log(notes.data);

        login(thisVeryUser);
        setMynotes(notes.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPost();
  }, []);

  if(loading) {
    return <div>Loading....</div>
  } else {
  return (
    <div>
      {mynotes.length !== 0 ? (
        <div className="container mx-auto px-20">
          <div className="">
            <Link to="/newnote">
              <button className=" px-4 py-2 text-white bg-blue-600 hover:bg-blue-800 mt-6 rounded-lg">
                Create Note
              </button>
            </Link>
          </div>
          <div className="">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 pt-5 pb-10 lg:pt-10 lg:pb-20">
              {mynotes.map((mynote) => {
                return <Note key={mynote._id} mynote={mynote} />;
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-20 h-96 items-center place-content-center content-center">
          <div>
            <h2 className="text-3xl">
              Write Down Your Amazing Idea in a{" "}
              <span className="text-blue-500"> Note </span>
            </h2>
            <Link to="/newnote">
              <button className="text-lg px-6 py-3 text-white bg-blue-600 hover:bg-blue-900 rounded-lg">
                Create Note
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}}

export default Notes;
