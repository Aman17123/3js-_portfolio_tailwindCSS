import { useRef, useState } from 'react';
import React from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const formRef = useRef();
    const [loading, setloading] = useState(false);
    const [form, setform] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = ({ target: { name, value } }) => {
        setform({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setloading(true);

        try {
            await emailjs.send(
                'service_v566b6h',
                'template_3mrhulm',
                {
                    from_name: form.name,
                    to_name: 'DONK',
                    from_email: form.email,
                    to_email: 'Donkcsw@gamil.com',
                    message: form.message
                }
            );

            setloading(false);

            alert('Message sent successfully');
        } catch (error) {
            setloading(false);
            console.log(error);
            console.log('Something went wrong');
        }
    };

    return (
        <section className="c-space my-20">
          <div className="relative min-h-screen flex items-center justify-center flex-col">
            <img
              src="/assets/terminal.png"
              alt="terminal-bg"
              className="absolute inset-0 min-h-screen w-full h-full bg-cover z-0"
            />
            <div className="contact-container relative z-10 w-full px-4 sm:px-8">
              <h3 className="head-text mt-11">What's up Dawg..</h3>
              <p className="text-lg text-white-600 mt-3">
                I'm a CS2 player looking to queue for FACEIT Level 10 matches. I'm confident in my skills and ready to play at a high level. Hit me up if you're looking for a solid teammate!
              </p>
      
              <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                <label className="space-y-3">
                  <span className="field-label">Full Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="DONK OWNS CS2"
                  />
                </label>
      
                <label className="space-y-3">
                  <span className="field-label">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="DONK@gmial.com"
                  />
                </label>
      
                <label className="space-y-3">
                  <span className="field-label">Your message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="field-input"
                    placeholder="Lets queue up for some FACEIT matches"
                  />
                </label>
      
                <button className="field-btn" type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                  <img
                    src="/assets/arrow-up.png"
                    alt="arrow-up"
                    className="field-btn_arrow"
                  />
                </button>
              </form>
            </div>
          </div>
        </section>
      );
      
};

export default Contact;
