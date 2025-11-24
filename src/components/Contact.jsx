import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Connect email logic here (EmailJS or backend)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: <Mail size={20} />, label: "Email", value: "sdarandara123@gmail.com", href: "mailto:sdarandara123@gmail.com" },
    { icon: <Phone size={20} />, label: "Phone", value: "+94 77 99 20805", href: "tel:+94779920805" },
    { icon: <MapPin size={20} />, label: "Location", value: "Colombo, Sri Lanka", href: null }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/sehan-arandara-1313b5218/",
      color: "hover:bg-blue-600"
    },
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/SehanArandara",
      color: "hover:bg-slate-700"
    }
  ];

  return (
    <section name="contact" className="w-full min-h-screen bg-slate-950 text-white py-24 flex items-center justify-center relative overflow-hidden">

      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sans mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              Let's Connect
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to discuss AI? I'm always open to new opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:border-indigo-500/30 transition-all"
                >
                  <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white hover:text-indigo-400 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connect on Social Media</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center gap-3 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl ${social.color} transition-all`}
                  >
                    {social.icon}
                    <span className="font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl">
              <p className="text-slate-300 text-sm leading-relaxed">
                <span className="text-indigo-400 font-semibold">Quick Response:</span> I typically respond within 24 hours. For urgent inquiries, feel free to reach out via LinkedIn.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              {/* Background Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Your Email
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Subject Input */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                      Subject
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 bg-slate-950 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-bold text-white shadow-lg shadow-indigo-500/25 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out skew-x-12 origin-left" />
                    <span className="relative flex items-center justify-center gap-2">
                      Send Message <Send size={20} />
                    </span>
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;