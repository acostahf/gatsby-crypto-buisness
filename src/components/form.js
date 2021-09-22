import React from "react"

const Form = () => {
  return (
    <div className="flex flex-col justify-center items-center  w-full p-20">
      <h1 className="text-white font-bold text-3xl pb-10">Contact Us!</h1>
      <form className="flex flex-col space-y-5 bg-white bg-opacity-25 backdrop-filter backdrop-blur-sm p-16 rounded-lg ">
        <label className="flex flex-col">
          Name
          <input type="text" name="name" id="name" className="rounded w-60" />
        </label>
        <label className="flex flex-col">
          Email
          <input
            type="email"
            name="email"
            id="email"
            className="rounded w-60 bg-none"
          />
        </label>
        <label className="flex flex-col">
          Message
          <input
            type="text"
            name="message"
            id="message"
            className="rounded w-60"
          />
        </label>
      </form>
    </div>
  )
}

export default Form
