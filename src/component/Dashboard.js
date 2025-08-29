import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  BarChart3,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  PieChart,
  LineChart,
  FileText,
} from "lucide-react";
import HeaderTab from "./HeaderTab";
import Logo from "./image/Logos.png";
import Image from "./image/stock market.webp";

const AKVHomepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: LineChart,
      title: "Technical Analysis",
      description:
        "Advanced volume analytics indicators and orderflow based strategies for optimal entries and exits",
      features: [
        "Volume Profile framework",
        "Orderflow analysis and metrics",
        "Relative Strength profiling",
        "Statistical methods using average true range techniques",
        "Avwap based strategies",
      ],
    },
    {
      icon: BarChart3,
      title: "Fundamental Analysis",
      description:
        "Deep dive into company financials, business models, and competitive positioning to identify undervalued opportunities.",
      features: [
        "Financial Statement Analysis",
        "Ratio Analysis (P/E, P/B, ROE, etc.)",
        "Industry Comparison",
        "Management Quality Assessment",
        "DCF Valuation Models",
      ],
    },
    {
      icon: PieChart,
      title: "Decode market trends",
      description:
        "Identify emerging market trends and sector rotations to stay ahead of the curve.",
      features: [
        "Sector Rotation Analysis",
        "Market Breadth Indicators",
        "Institutional Flow Tracking",
        "Sentiment Analysis",
        "Seasonal Trends",
      ],
    },
    // {
    //   icon: Target,
    //   title: 'Market Connect',
    //   description: 'Direct access to market insights and networking opportunities with industry experts.',
    //   features: [
    //     'Exclusive Webinars',
    //     'Analyst Meetups',
    //     'Corporate Access Events',
    //     'Earnings Call Highlights',
    //     'Management Interviews'
    //   ]
    // }
  ];

  const AnimatedLogo = () => (
    <div className="flex flex-col">
      <div className="flex items-flex-start space-x-3">
        <div className="relative w-150 h-100">
          <img
            src={Logo} // Replace with your actual logo path
            alt="Arpit Goyal Logo"
            className="h-13 w-auto" // Adjust height as needed
          />
        </div>
      </div>
      <span className=" text-center text-xs sm:text-sm text-white md:mt-0.5">
        by Arpit Goyal
      </span>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <HeaderTab />

      {/* Hero Section */}
      <section
        id="home"
        className="pt-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <FileText className="w-4 h-4 mr-1" />
                    SEBI Registered Research Analyst - INH000013129
                  </div>
                </div>
                <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  Access research, analysis and unlock knowledge.
                </h1>
                  <h1 className=" text-2xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
                    {" "}
                    All guided by advanced data driven methods
                  </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Professional-grade equity research for both traders and
                  investors, grounded in robust data analysis and methodologies.
                  Join our community to get actionable insights created by
                  leveraging advanced analytics and systematic approaches.
                </p>
              </div>

              {/* <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-teal-600 text-white px-8 py-4 rounded-full hover:bg-teal-700 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                  <span>Explore Research</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div> */}
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden">
                <img
                  src={Logo}
                  alt="Data-driven research"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
              {/* <div className="mt-6 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <AlertCircle className="w-4 h-4" />
                  <span>Past performance is not indicative of future results. Investments are subject to market risk.</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-1 mb-4">
            <h2 className="text-4xl font-bold text-gray-900">
              Our Research Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive equity research services designed using robust
              framework backed by strong data insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-100 p-3 rounded-xl group-hover:bg-teal-200 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            {feature ===
                            "Statistical methods using average true range techniques" ? (
                              <CheckCircle className="w-8 h-8 text-teal-600" />
                            ) : (
                              <CheckCircle className="w-4 h-4 text-teal-600" />
                            )}
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Reports Section */}
      {/* <section id="research" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Latest Research Reports</h2>
            <p className="text-xl text-gray-600">
              Evidence-based investment theses with complete transparency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchReports.map((report, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {report.type}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      report.rating === 'BUY' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {report.rating}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-200">
                      {report.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{report.subtitle}</p>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{report.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Target className="w-4 h-4" />
                      <span>{report.target}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium text-gray-700">Covered Companies:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {report.companies.map((company, i) => (
                        <div key={i} className="bg-gray-50 p-2 rounded">
                          <div className="font-medium text-sm">{company.name}</div>
                          <div className="flex justify-between text-xs">
                            <span>₹{company.current}</span>
                            <span className={`font-medium ${
                              company.upside.startsWith('+') ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {company.upside}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-sm font-medium text-gray-700">Performance vs Benchmark:</p>
                    <div className="grid grid-cols-2 gap-2 text-xs mt-1">
                      <div className="bg-gray-50 p-2 rounded">
                        <div>1 Year</div>
                        <div className="font-medium">{report.performance.oneYear}</div>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <div>3 Year</div>
                        <div className="font-medium">{report.performance.threeYear}</div>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <div>5 Year</div>
                        <div className="font-medium">{report.performance.fiveYear}</div>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <div>Benchmark</div>
                        <div className="font-medium">{report.performance.benchmark}</div>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-4 bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download Sample</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-full hover:bg-teal-50 transition-all duration-200 flex items-center justify-center space-x-2 mx-auto">
              <span>View All Research</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section id="team" className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center space-y-1 mb-4">
            <h2 className="text-4xl font-bold text-gray-900">
              Meet Our Research Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              45+ years of combined market experience across bull and bear
              cycles
            </p>
          </div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mb-4 text-3xl">
                    <User className="w-10 h-10 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <div className="text-teal-600 font-medium">{member.role}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {member.experience} experience
                  </div>

                  <div className="mt-4 text-sm text-gray-700">
                    <div className="font-medium">Specialization:</div>
                    <div>{member.specialization}</div>
                  </div>

                  <div className="mt-3 text-xs text-gray-500">
                    <div className="font-medium">Education:</div>
                    <div>{member.education}</div>
                  </div>

                  <div className="mt-4 text-sm text-gray-600">
                    "{member.bio}"
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          <div className="my-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Research Methodology
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-4">
              We use technical indicators, fundamental analysis and quantitative
              data analysis to identify potential opportunities on a short term
              and long term basis.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-xl">
                <div className="text-teal-600 font-bold text-lg mb-2">
                  1. Technical Screening
                </div>
                <p className="text-sm text-gray-600">
                  Quantitative filters for momentum, volume, and statistical
                  patterns
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <div className="text-teal-600 font-bold text-lg mb-2">
                  2. Fundamental Analysis
                </div>
                <p className="text-sm text-gray-600">
                  Deep dive into financials, management, industry trends, and
                  valuations
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <div className="text-teal-600 font-bold text-lg mb-2">
                  3. Data Validation
                </div>
                <p className="text-sm text-gray-600">
                  Insights backed by real time data analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                {
                  icon: Eye,
                  title: "Deep Market Insights",
                  description:
                    "Our research goes beyond surface-level analysis to uncover hidden opportunities and risks in the market.",
                },
                {
                  icon: Shield,
                  title: "Risk Management Focus",
                  description:
                    "Every recommendation comes with detailed risk assessment and capital protection strategies.",
                },
                {
                  icon: Zap,
                  title: "Real-time Updates",
                  description:
                    "Stay informed with instant alerts on your investments and market-moving events.",
                },
                {
                  icon: Users,
                  title: "Expert Team",
                  description:
                    "Led by SEBI Registered Research Analyst with decades of experience in Indian equity markets.",
                },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6">Get Started Today</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Ready to transform your stock market journey? Contact us for
                  subscribing to our services
                </p>
              </div>

              <div className="space-y-6">
                <a href="tel:+919179231876" className="block">
                  <div className="flex items-center space-x-4">
                    <div className="bg-teal-600 p-3 rounded-lg">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div className="text-gray-300">+91 9179231876</div>
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:agbpl2354@gmail.com"
                  className="block"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-teal-600 p-3 rounded-lg">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div className="text-gray-300">
                      agbpl2354@gmail.com
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="https://maps.google.com/?q=202, Akanksha Complex, MP nagar Zone-I BHOPAL MADHYA PRADESH - 462011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-teal-600 p-3 rounded-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold">Visit Us</div>
                      <div className="text-gray-300">
                        202, Akanksha Complex, MP nagar Zone-I BHOPAL MADHYA PRADESH - 462011
                      </div>
                    </div>
                  </div>
                </a>

                <a
                  href="https://wa.me/91919179231876"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-teal-600 p-3 rounded-lg">
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">WhatsApp Us</div>
                      <div className="text-gray-300">+91 9179231876</div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="bg-gradient-to-r from-teal-600 to-blue-600 p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-4">Working Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Left Column - Logo and Social */}
            <div className="space-y-4">
              <AnimatedLogo />
              <p className="text-gray-400 leading-relaxed">
                Empowering investors with data-driven research and strategic
                insights for sustainable wealth creation in the Indian equity
                markets.
              </p>
              <div className="flex space-x-4">
                {/* Telegram */}
                <a
                  href="https://t.me/akvequityresearch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors duration-200"
                  aria-label="Telegram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                  </svg>
                </a>

                {/* X (Twitter) */}
                <a
                  href="https://x.com/akveq_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors duration-200"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Technical Analysis
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Fundamental Analysis
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Market Trends
                  </a>
                </li>
              </ul>
            </div>

            {/* Research Column */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Research</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Sector Reports
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Stock Recommendations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Market Outlook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    IPO Analysis
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Information</h4>
              <div className="text-gray-400 space-y-2">
                <div>
                  <div className="font-medium">Registered Office:</div>
                  <p>
                     202, Akanksha Complex,
                    <br />
                    MP nagar Zone-I,
                    <br />
                    BHOPAL, MADHYA PRADESH-500035
                  </p>
                </div>
                <div>
                  <div className="font-medium">Telephone:</div>
                  <p>+91 9179231876</p>
                </div>
                <div>
                  <div className="font-medium">Email:</div>
                  <p className="break-all">agbpl2354@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Section */}
          <div className="mt-12 border-t border-gray-700 pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="text-gray-400 text-sm space-y-4">
                <div>
                  <h5 className="font-semibold text-white mb-2">Disclaimer:</h5>
                  <p>
                    Registration granted by SEBI and certification from NISM in
                    no way guarantee performance of the research analyst or
                    provides any assurance of returns to investors.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">
                    Standard Disclaimer:
                  </h5>
                  <p>
                    Investments in securities market are subject to market
                    risks. Read all the related documents carefully before
                    investing.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-2">
                    SEBI Office Address:
                  </h5>
                  <p>
                    SEBI Bhavan, Plot No. C4-A, 'G' Block,
                    <br />
                    Bandra-Kurla Complex, Bandra (E),
                    <br />
                    Mumbai - 400 051
                  </p>
                </div>
              </div>

              <div className="text-gray-400 text-sm space-y-4">
                <div>
                  <h5 className="font-semibold text-white mb-2">
                    Registration Details:
                  </h5>
                  <p>
                    <span className="font-medium">Registered name:</span>{" "}
                    Arpit Goyal
                    <br />
                    <span className="font-medium">
                      Type of registration:
                    </span>{" "}
                    Individual
                    <br />
                    <span className="font-medium">Registration No:</span>{" "}
                    INH000013129
                    <br />
                    <span className="font-medium">Validity:</span> Oct 06, 2023
                    – Oct 05, 2028
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400">
                © 2025 AKV Equity Research. All rights reserved.
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>SEBI Registered Research Analyst - INH000013129</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 ${
          isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <TrendingUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default AKVHomepage;
