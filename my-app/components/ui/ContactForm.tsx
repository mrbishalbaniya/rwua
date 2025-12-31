import { useState } from 'react';
import { ContactFormProps, ContactFormData } from '@/lib/types';

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long';
    } else if (formData.name.trim().length > 50) {
      newErrors.name = 'Name must be less than 50 characters';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (formData.email.length > 100) {
      newErrors.email = 'Email address is too long';
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject must be at least 3 characters long';
    } else if (formData.subject.trim().length > 100) {
      newErrors.subject = 'Subject must be less than 100 characters';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      await onSubmit(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // If it's a network error, show a more specific message
      if (error instanceof Error) {
        if (error.message.includes('network') || error.message.includes('fetch')) {
          // We could set a more specific error message here if needed
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
      <h2 className="rwua-heading-2 mb-6 text-center">Send us a Message</h2>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-800 text-sm sm:text-base">Thank you for your message! We'll get back to you soon.</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-800 text-sm sm:text-base">Sorry, there was an error sending your message. Please try again.</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-md 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                       transition-colors text-base
                       touch-target-comfortable
                       focus-visible:focus-visible
                       ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your full name"
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-md 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                       transition-colors text-base
                       touch-target-comfortable
                       focus-visible:focus-visible
                       ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your email address"
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            maxLength={100}
            className={`w-full px-4 py-3 border rounded-md 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                       transition-colors text-base
                       touch-target-comfortable
                       focus-visible:focus-visible
                       ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter the subject of your message"
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          />
          <div className="flex justify-between items-center mt-1">
            {errors.subject && (
              <p id="subject-error" className="text-sm text-red-600" role="alert">
                {errors.subject}
              </p>
            )}
            <span className="text-xs text-gray-500 ml-auto">
              {formData.subject.length}/100
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            maxLength={1000}
            className={`w-full px-4 py-3 border rounded-md 
                       focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                       transition-colors resize-vertical text-base
                       min-h-[120px]
                       focus-visible:focus-visible
                       ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter your message here..."
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          <div className="flex justify-between items-center mt-1">
            {errors.message && (
              <p id="message-error" className="text-sm text-red-600" role="alert">
                {errors.message}
              </p>
            )}
            <span className="text-xs text-gray-500 ml-auto">
              {formData.message.length}/1000
            </span>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 
                   text-white font-medium py-3 px-6 rounded-md transition-colors 
                   focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                   touch-target-comfortable text-base
                   focus-visible:focus-visible
                   disabled:cursor-not-allowed"
          aria-describedby="submit-status"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}