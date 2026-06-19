import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const registrationSchema = z.object({
  name: z.string().min(2, 'Full Name is required (min 2 characters)'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

export default function RegistrationForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      const response = await axios.post('http://localhost:5000/api/enquiry', data);
      if (response.data.success) {
        toast.success('Successfully enrolled!');
        setIsSuccess(true);
        reset();
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Something went wrong. Please try again.');
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <section id="register" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-100/50 dark:bg-primary-900/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-100/50 dark:bg-secondary-900/10 rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="relative group/card">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/30 via-secondary-500/30 to-primary-500/30 rounded-[2.8rem] blur-xl opacity-0 group-hover/card:opacity-100 transition duration-1000 animate-shimmer bg-[length:200%_100%] z-0"></div>
          
          <div className="glass-card rounded-[2.5rem] overflow-hidden relative z-10 border border-white/50 dark:border-white/10 shadow-2xl">
            
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-14 bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-900 dark:to-slate-900 text-white flex flex-col justify-center relative overflow-hidden">
                {/* Decorative circles in left panel */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-400/20 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>

                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Secure Your Spot Today
                  </h2>
                  <p className="text-primary-100 mb-10 leading-relaxed text-lg">
                    Join thousands of students who have discovered their passion for technology. Seats are limited for the upcoming summer batch!
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex items-center gap-5 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors shadow-lg">
                        <span className="font-bold text-lg">01</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Fill the form</h4>
                        <p className="text-primary-200">Enter your details</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 group">
                      <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:bg-white/20 transition-colors shadow-lg">
                        <span className="font-bold text-lg">02</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Get Confirmation</h4>
                        <p className="text-primary-200">We will contact you</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 md:p-14 relative bg-white/40 dark:bg-[#080812]/60 backdrop-blur-xl">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center h-full text-center py-10"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                        className="w-24 h-24 bg-green-100 dark:bg-green-500/20 text-green-500 rounded-3xl flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(34,197,94,0.3)] border border-green-200 dark:border-green-500/30 rotate-3"
                      >
                        <CheckCircle2 size={48} />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
                        You're In!
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
                        Thank you for enrolling. We have received your details and will get back to you shortly.
                      </p>
                      <button
                        onClick={() => setIsSuccess(false)}
                        className="px-8 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all shadow-sm active:scale-95"
                      >
                        Submit Another
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="flex flex-col h-full justify-center space-y-6"
                    >
                      <div className="relative group">
                        <input
                          {...register('name')}
                          type="text"
                          id="name"
                          placeholder=" "
                          disabled={isSubmitting}
                          className={`block px-5 pb-3 pt-6 w-full text-base bg-white/50 dark:bg-slate-900/50 backdrop-blur-md rounded-2xl border appearance-none text-slate-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-primary-500/20 transition-all duration-300 shadow-sm peer ${
                            errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-700 focus:border-primary-500'
                          }`}
                        />
                        <label
                          htmlFor="name"
                          className="absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-focus:text-primary-600 peer-focus:dark:text-primary-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 font-medium pointer-events-none"
                        >
                          Full Name
                        </label>
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-2 flex items-center gap-1 animate-pulse"><span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block"></span> {errors.name.message}</p>
                        )}
                      </div>

                      <div className="relative group">
                        <input
                          {...register('email')}
                          type="email"
                          id="email"
                          placeholder=" "
                          disabled={isSubmitting}
                          className={`block px-5 pb-3 pt-6 w-full text-base bg-white/50 dark:bg-slate-900/50 backdrop-blur-md rounded-2xl border appearance-none text-slate-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-primary-500/20 transition-all duration-300 shadow-sm peer ${
                            errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-700 focus:border-primary-500'
                          }`}
                        />
                        <label
                          htmlFor="email"
                          className="absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-focus:text-primary-600 peer-focus:dark:text-primary-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 font-medium pointer-events-none"
                        >
                          Email Address
                        </label>
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-2 flex items-center gap-1 animate-pulse"><span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block"></span> {errors.email.message}</p>
                        )}
                      </div>

                      <div className="relative group">
                        <input
                          {...register('phone')}
                          type="tel"
                          id="phone"
                          placeholder=" "
                          disabled={isSubmitting}
                          className={`block px-5 pb-3 pt-6 w-full text-base bg-white/50 dark:bg-slate-900/50 backdrop-blur-md rounded-2xl border appearance-none text-slate-900 dark:text-white focus:outline-none focus:ring-4 focus:ring-primary-500/20 transition-all duration-300 shadow-sm peer ${
                            errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 dark:border-slate-700 focus:border-primary-500'
                          }`}
                        />
                        <label
                          htmlFor="phone"
                          className="absolute text-sm text-slate-500 dark:text-slate-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-5 peer-focus:text-primary-600 peer-focus:dark:text-primary-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 font-medium pointer-events-none"
                        >
                          Phone Number
                        </label>
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-2 flex items-center gap-1 animate-pulse"><span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block"></span> {errors.phone.message}</p>
                        )}
                      </div>

                      <div className="relative group mt-4">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-shimmer bg-[length:200%_100%]"></div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="relative w-full py-4 bg-slate-900 dark:bg-slate-950 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-transform duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="animate-spin" size={22} /> Processing...
                            </>
                          ) : (
                            <>
                              Complete Registration <Send size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
