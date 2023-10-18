import React from "react";

const Form = () => {
  return <div>
    <section class="bg-white pb-72">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-start text-gray-900 ">Contact Us</h2>
      
      <form action="#" class="space-y-8">
          <div>
              
              <input type="email" id="email" class="shadow-md bg-[#ececec] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="Name" required/>
          </div>
          <div>
              
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-[#ececec] rounded-md border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Email" required/>
          </div>
          <div class="sm:col-span-2">
             
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900  bg-[#ececec] rounded-md shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Message"></textarea>
          </div>
          <button type="submit" class="py-3 px-16 text-sm font-medium text-center text-white rounded-md bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-orange-300 ">SEND</button>
      </form>
  </div>
</section>
  </div>;
};

export default Form;
