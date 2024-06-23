import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <div>
        <form className="flex flex-col mx-auto my-2 w-4/12 p-6">
          <h1>Submit Query</h1>
          <input
            type="text"
            name="name"
            placeholder="Jon doe"
            className="m-2 p-2 border-2 border-solid border-gray-500"
          />
          <input
            type="text"
            name="name"
            placeholder="msg"
            className="m-2 p-2 border-2 border-solid border-gray-500"
          />
          <button
            type="submit"
            className="m-2 p-2 border-2 border-solid border-gray-500 bg-slate-950 text-white"
          >
            Submit
          </button>
        </form>
      </div>
      ;
      <Footer />
    </>
  );
}
