import shadow from "../../assets/bg-shadow.png";
import logoFooter from "../../assets/logo-footer.png";

export default function Footer() {
  return (
    <footer className="container mx-auto px-24 mt-80 pt-56 bg-slate-950 ">
      <div className="border -mt-[37%] mb-8 border-white rounded-2xl bg-[#ffffff26] p-5 text-center w-full">
        <div
          className="bg-white rounded-xl py-20 px-2"
          style={{
            backgroundImage: `url(${shadow})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h4 className="font-bold text-3xl mb-2">
            Subscribe to our Newsletter
          </h4>
          <p className="font-medium text-lg mb-5 text-gray-500">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex gap-3 items-center justify-center">
            <input
              type="text"
              placeholder="Enter your email"
              className="border rounded-xl px-6 py-3"
            />
            <button
              type="submit"
              className="px-6 py-3 font-bold text-black rounded-lg bg-gradient-to-r from-amber-300 to-pink-400"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <img className="mx-auto w-28 h-28" src={logoFooter} alt="logo" />
      <div className="grid grid-cols-3 justify-between items-center gap-28 mt-14 pb-16 text-white">
        <div>
          <h6 className="font-semibold">About Us</h6>
          <p className="mt-3 text-gray-500">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div>
          <h6 className="font-semibold">Quick Links</h6>
          <ul className="list-disc pl-5 mt-3 text-gray-500">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="font-semibold">Subscribe</h6>
          <p className="mt-3 text-gray-500">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-l-lg"
            />
            <button
              className="px-6 py-3 font-bold text-black rounded-r-lg bg-gradient-to-r from-pink-400 to-amber-300"
              type="submit"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
