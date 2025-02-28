
import logo from "../assets/supreme_group_logo.png";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <img src={logo} alt="Supreme Group" className="h-10" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-sm">
              APPLICATIONS
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer">
                Apparel
              </li>
              <li className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer">
                Automotive
              </li>
              <li className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer">
                Filtration
              </li>
              <li className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer">
                Customized Solutions
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-sm">
              COMPANY
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer">
                Innovation
              </li>
              <li className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer">
                Global Competency
              </li>
              <li className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer">
                About Us
              </li>
              <li className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-sm">MORE</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer">
                Careers
              </li>
              <li className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer">
                Privacy Policy
              </li>
              <li className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer">
                Terms and Conditions
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-sm">
              FOLLOW US
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer">
                Twitter
              </li>
              <li className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer">
                LinkedIn
              </li>
              <li className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer">
                Instagram
              </li>
              <li className="text-gray-600 text-sm hover:text-blue-600 cursor-pointer">
                Medium
              </li>
            </ul>
          </div>
        </div>

    
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>©2023. All Rights Reserved.</p>
          <p>Supreme House, 110, 16th Road Chembur, Mumbai - 400071</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
