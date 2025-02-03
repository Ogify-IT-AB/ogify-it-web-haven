const Footer = () => {
  return (
    <footer className="bg-ogify-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">OGIFY IT</h3>
            <p className="text-gray-300">
              Transforming businesses through innovative IT solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">Email: info@ogify.se</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Address</h3>
            <p className="text-gray-300">
              Ogify IT AB
              <br />
              Org number: 559265-5467
              <br />
              Norregatan 4b
              <br />
              211 27
              <br />
              Malmö
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} OGIFY IT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;