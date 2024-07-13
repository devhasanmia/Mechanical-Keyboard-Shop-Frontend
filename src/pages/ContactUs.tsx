import toast, { Toaster } from 'react-hot-toast';
const notify = (e) => {
  e.preventDefault()
  toast.success('Message Send Successfully')
};

const ContactUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full ">
        <div>
          <h1 className="text-center text-3xl font-extrabold text-gray-900">Contact With Us</h1>
        </div>
        <form className=" space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                id="phone"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                id="message"
                placeholder="Your Message"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              onClick={notify}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
};

export default ContactUs;
