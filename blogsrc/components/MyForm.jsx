import React, { useEffect, useState } from "react";

const MyForm = () => {

  // create an array of at least 5 states and capital in Nigeria
  // Write a program that collects user input between 1 - 4
  // 1 - Display all state and capital in the array
  // 2 - Add new state and capital to the array
  // 3 - Edit a particular state and it capital
  // 4 - Delet a particular state and it capital

  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [formData, setFormData] = useState([])


  const bindName = (e) => {
    const nameField = e.target.value
    setName(nameField)
  }
  
  const bindSubject = (e) => {
    const subjField = e.target.value
    setSubject(subjField)
  }
  const bindMessage = (e) => {
    const mesField = e.target.value
    setMessage(mesField)
  }

  const handleSubmit = () => {
    const data = {
      name:name,
      subj:subject,
      mes: message
    }

    const allData = [...formData, data]
    localStorage.setItem("course", JSON.stringify(allData))
    // console.log(formData);
    setName('')
    setSubject('')
    setMessage('')

  }

  //  localStorage.setItem('myData', JSON.stringify(updatedData));
  useEffect(()=>{
    const getData = JSON.parse(localStorage.getItem('course'));

    if (getData=== null){
      console.log(getData, 'Local storage is null');
    } else {
      setFormData(getData)
    }
   }, [])




  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Contact Us
        </h2>
      </div>

      <div className="space-y-8">
        {/* <div action="" method='' className="mt-8 space-y-6"> */}
        <div className="mt-8 space-y-6">
          <div className="rounded-sm shadow-sm -space-y-px">

            
            <div className="my-5">
              <label htmlFor="name" className="sr-only">
                Username
              </label>
              <input
                id="name"
                name="name"
                type="text"
                
                className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
                value={name}
                onChange={bindName}
                // onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="my-5">
              <label htmlFor="email" className="sr-only">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                
                className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Subject"
                value={subject}
                // onChange={(e) => setSubject(e.target.value)}
                onChange={bindSubject}
              />
            </div>

            <div className="my-5">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                
                rows="4"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Message"
                value={message}
                // onChange={(e) => setMessage(e.target.value)}
                onChange={bindMessage}
              />
            </div>

            <div>
                <input 
                  type='submit'
                  value='Submit'
                  onClick={handleSubmit}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                />
              
                
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyForm;
