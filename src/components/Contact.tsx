import React, { useState } from 'react';
import { Send, AlertCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real implementation, you would send an actual email using a service like EmailJS
      // Example code (not actually functioning without proper setup):
      // 
      // import emailjs from 'emailjs-com';
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   {
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     subject: formData.subject,
      //     message: formData.message,
      //   },
      //   'YOUR_USER_ID'
      // );
      
      // For now, just simulate the API call
      console.log('Form submitted with data:', formData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setSubmitStatus('success');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto"></div>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
          <p className="mt-2 text-md max-w-2xl mx-auto text-teal-500">
           
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-700 rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg flex items-start">
                  <AlertCircle className="mr-2 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg flex items-start">
                  <AlertCircle className="mr-2 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-medium">Failed to send message</p>
                    <p>There was an error sending your message. Please try again later.</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                          : 'border-slate-300 dark:border-slate-600 focus:border-teal-500 focus:ring-teal-500'
                      } focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-transparent`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                          : 'border-slate-300 dark:border-slate-600 focus:border-teal-500 focus:ring-teal-500'
                      } focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-transparent`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.subject 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-slate-300 dark:border-slate-600 focus:border-teal-500 focus:ring-teal-500'
                    } focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-transparent`}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-slate-300 dark:border-slate-600 focus:border-teal-500 focus:ring-teal-500'
                    } focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-transparent`}
                    placeholder="Your message here..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-teal-500 text-white rounded-lg font-medium flex items-center justify-center ${
                    isSubmitting 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:bg-teal-600'
                  } transition-colors duration-300`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;