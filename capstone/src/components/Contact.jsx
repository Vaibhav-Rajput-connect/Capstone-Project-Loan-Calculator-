import React from 'react'
import { toast } from 'react-toastify';

const Contact = () => {
        const [result, setResult] = React.useState("");
      
        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Sending....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "ceeec180-5dbd-4556-9985-d8592c7bb5cb");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("");
            toast.success('Form Submitted Successfully')
            event.target.reset();
          } else {
            console.log("Error", data);
            toast.error(data.message)
            setResult('');
          }
        }
      
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact Us'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact<span className='font-light underline underline-offset-4 under decoration-1 '>With Us</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Get in touch with us to discuss your dream home, project inquiries, or collaboration opportunities.</p>
        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8'>
            <div className='flex flex-wrap'>
            <div className='w-full md:w-1/2 text-left '>
                Your Name
                <input className='w-full border border-gray-300 rouded py-3 px-4 mt-2' type='text' name='Name' placeholder='Your Name ' required/>
            </div>
            <div className='w-full md:w-1/2 text-left md:pl-4'>
                Email
                <input className='w-full border border-gray-300 rouded py-3 px-4 mt-2' type='Email' name='Email' placeholder='Your Email ' required/>
            </div>
            </div>
            <div className='my-6 text-left'>
                Message
                <textarea className='w-full border border-gray-300 rouded py-3 px-4 mt-2 h-48 resize-none' name='Message' placeholder='Message' required></textarea>
            </div>
            <button className='bg-blue-500 text-white py-2 px-12 mb-10 rounded'>{result ? result : 'Send Message'}</button>
        </form>
    </div>
  )
}

export default Contact