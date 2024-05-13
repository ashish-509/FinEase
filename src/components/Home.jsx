import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import background from "../images/image1.png";
import profile1 from "../images/profile1.jpeg";
import profile2 from "../images/profile2.jpeg";
import profile3 from "../images/profile3.jpeg";
import moneyManagementImage from "../images/money-management.jpeg";
import passiveIncomeImage from "../images/passive-income.png";
import stockInvestingImage from "../images/stock-investment.jpg";

const Home = () => {
  // Dummy data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      message:
        "FinEase helped me achieve my financial goals faster than I ever imagined. It's a must-have tool for anyone serious about managing their money.",
      profile: profile1,
    },
    {
      id: 2,
      name: "Jane Smith",
      message:
        "I've been using FinEase for months now, and I've seen a significant improvement in my saving habits. It's user-friendly and incredibly effective.",
      profile: profile2,
    },
    {
      id: 3,
      name: "Alex Johnson",
      message:
        "Thanks to FinEase, I was able to pay off my debts and start saving for my dream vacation. I highly recommend it to everyone!",
      profile: profile3,
    },
  ];

  // Custom arrow component for previous button
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 focus:outline-none"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-8 h-8 text-gray-500 hover:text-gray-700"
        >
          <path
            fillRule="evenodd"
            d="M6.707 10l4.147-4.146a.5.5 0 11.707.707L8.121 10l3.44 3.439a.5.5 0 01-.708.708L6.707 11.5a.5.5 0 010-.708z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );
  };

  // Custom arrow component for next button
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 focus:outline-none"
        onClick={onClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-8 h-8 text-gray-500 hover:text-gray-700"
        >
          <path
            fillRule="evenodd"
            d="M13.293 10l-4.147 4.146a.5.5 0 01-.707-.707L11.879 10l-3.44-3.439a.5.5 0 01.708-.708L13.293 9.5a.5.5 0 010 .708z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    );
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="relative overflow-hidden">
      <img
        src={background}
        alt="background image of personal finance"
        className="w-full h-auto"
      />

      <h1 className="text-center font-bold text-4xl p-16 m-12">
        Passive Money Making Ideas
      </h1>
      <div className=" flex items-center justify-center pb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Idea 1: Proper Finance Management */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src={moneyManagementImage}
                alt="Money Management"
                className="w-30 h-auto mx-auto mb-4 pb-9"
              />
              <h2 className="text-lg font-semibold mb-2">
                Proper Finance Management
              </h2>
              <p className="text-gray-600 mb-4">
                Managing your finances effectively will surely help you achieve
                your financial goals and build wealth.
              </p>
              <div className="flex justify-center">
                <span
                  role="img"
                  aria-label="Money Bag Emoji"
                  className="text-xl"
                >
                  &#x1F4B0;
                </span>
                <span
                  role="img"
                  aria-label="Chart Increasing Emoji"
                  className="text-xl ml-2"
                >
                  &#x1F4C8;
                </span>
              </div>
            </div>

            {/* Idea 2: Passive Income Streams */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src={passiveIncomeImage}
                alt="Passive Income"
                className="w-30 h-auto mx-auto mb-4 pb-9"
              />
              <h2 className="text-lg font-semibold mb-2">
                Passive Income Streams
              </h2>
              <p className="text-gray-600 mb-4">
                Explore various passive income sources such as real estate
                investments, dividend stocks, and online businesses.
              </p>
              <div className="flex justify-center">
                <span role="img" aria-label="House Emoji" className="text-xl">
                  &#x1F3E0;
                </span>
                <span
                  role="img"
                  aria-label="Money with Wings Emoji"
                  className="text-xl ml-2"
                >
                  &#x1F4B8;
                </span>
              </div>
            </div>

            {/* Idea 3: Stock Market Investing */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <img
                src={stockInvestingImage}
                alt="Stock Market Investing"
                className="w-auto h-auto mx-auto mb-4 pb-9"
              />
              <h2 className="text-lg font-semibold mb-2">
                Stock Market Investing
              </h2>
              <p className="text-gray-600 mb-4">
                Learn about the basics of stock market investing,
                diversification, and long-term wealth building.
              </p>
              <div className="flex justify-center">
                <span role="img" aria-label="Chart Emoji" className="text-xl">
                  &#x1F4B9;
                </span>
                <span
                  role="img"
                  aria-label="Briefcase Emoji"
                  className="text-xl ml-2"
                >
                  &#x1F4BC;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-16">
        <h1 className="text-center font-bold text-4xl mb-12">Testimonials</h1>
        <Slider {...sliderSettings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="relative">
              <div className="testimonial-profile">
                <img
                  src={testimonial.profile}
                  alt="profile"
                  className="w-40 h-40 md:w-60 md:h-60 object-cover rounded-full mx-auto"
                />
              </div>
              <div className="testimonial-content bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg font-semibold mb-2 text-center">
                  {testimonial.name}
                </p>
                <p className="text-gray-600 text-center">
                  {testimonial.message}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <footer className="bg-gray-800 text-white p-9 text-center">
        <p>&copy; 2024 FinEase - All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
