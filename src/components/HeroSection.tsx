import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Loader2, 
  Sparkles, 
  AlertCircle, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { HERO_IMAGE } from '../constants/images.ts';

export const HeroSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');
  const [imageError, setImageError] = useState(false);

  const validateEmail = (val: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(val.trim());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    if (!cleanEmail) {
      setError('Please enter your email address');
      return;
    }

    if (!validateEmail(cleanEmail)) {
      setError('Please enter a valid email address (e.g., name@example.com)');
      return;
    }

    setError(null);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setSubmittedEmail(cleanEmail);
      setEmail('');
    }, 650);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setError(null);
    setEmail('');
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-18 lg:pb-28">
      {/* Background subtle organic gradients with floating animation */}
      <div 
        className="pointer-events-none absolute -top-28 left-1/2 -translate-x-1/2 w-[1300px] h-[650px] bg-gradient-to-b from-[#E4EDE0]/50 via-[#F5D95B]/20 to-transparent rounded-[100%] blur-3xl -z-10 animate-float-slow" 
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT SIDE: Copy & Single Opt-In Form */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Eyebrow badge: organic styling */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5D95B]/40 border border-[#F5D95B]/80 text-[#124E50] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#124E50] animate-pulse" aria-hidden="true" />
                <p className="text-xs sm:text-sm font-bold tracking-widest uppercase">
                  GUT HEALTH, MADE SIMPLE
                </p>
              </div>
            </motion.div>

            {/* Main Headline: Large, prominent serif font */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.65rem] text-[#124E50] font-medium tracking-tight leading-[1.07] text-balance mb-6"
            >
              A Happier Gut Starts With the Little Things.
            </motion.h1>

            {/* Supporting Text: High contrast clarity */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-lg sm:text-xl lg:text-[1.3rem] text-[#263634]/90 font-normal leading-relaxed max-w-xl mb-8 sm:mb-10"
            >
              Discover simple gut-health insights and feel-good everyday inspiration, delivered straight to your inbox.
            </motion.p>

            {/* EMAIL SIGN-UP FORM / CONFIRMATION STATE */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-xl"
            >
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* The form contains ONLY TWO ELEMENTS:
                        1. A single email address input field with placeholder "Enter your email address"
                        2. A prominent, minimal sign-up button labeled "Sign Up" without shine
                    */}
                    <form 
                      onSubmit={handleSubmit} 
                      noValidate
                      className="flex flex-col sm:flex-row gap-3 items-stretch w-full p-1.5 sm:p-2 bg-white/70 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-[#124E50]/15 shadow-sm hover:border-[#124E50]/30 transition-all duration-300"
                    >
                      <div className="relative flex-1">
                        <label htmlFor="email-input" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email-input"
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (error) setError(null);
                          }}
                          placeholder="Enter your email address"
                          disabled={isLoading}
                          aria-invalid={!!error}
                          aria-describedby={error ? 'email-error' : undefined}
                          autoComplete="email"
                          autoCapitalize="none"
                          autoCorrect="off"
                          spellCheck={false}
                          className={`w-full h-14 sm:h-16 px-5 sm:px-6 bg-white text-[#263634] placeholder:text-[#263634]/45 text-base sm:text-lg font-medium rounded-xl sm:rounded-2xl border-2 transition-all duration-200 outline-none
                            ${error 
                              ? 'border-red-500 ring-2 ring-red-400/20' 
                              : 'border-[#263634]/15 hover:border-[#4F9990] focus:border-[#124E50] focus:ring-4 focus:ring-[#124E50]/15'
                            }
                            disabled:bg-neutral-100 disabled:cursor-not-allowed
                          `}
                        />
                      </div>

                      {/* Minimal, Crisp & Prominent Sign Up Button - Solid deep teal, no shine, minimal */}
                      <button
                        type="submit"
                        disabled={isLoading}
                        aria-label="Sign Up for newsletter"
                        className="group relative h-14 sm:h-16 px-8 sm:px-10 bg-[#124E50] hover:bg-[#0c393a] active:scale-[0.98] text-white font-bold text-lg sm:text-xl rounded-xl sm:rounded-2xl transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#124E50] disabled:opacity-75 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin text-[#F5D95B]" aria-hidden="true" />
                            <span>Signing Up...</span>
                          </>
                        ) : (
                          <>
                            <span>Sign Up</span>
                            <ArrowRight 
                              className="w-5 h-5 text-[#F5D95B] group-hover:translate-x-1 transition-transform duration-200" 
                              aria-hidden="true" 
                            />
                          </>
                        )}
                      </button>
                    </form>

                    {/* Validation Error Message */}
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        id="email-error"
                        role="alert"
                        className="flex items-center gap-2 mt-3 text-sm sm:text-base font-medium text-red-700 bg-red-50 p-2.5 rounded-xl border border-red-200"
                      >
                        <AlertCircle className="w-5 h-5 shrink-0 text-red-600" aria-hidden="true" />
                        <span>{error}</span>
                      </motion.div>
                    )}

                    {/* Required Under-Form Text */}
                    <div className="flex items-center gap-2 mt-3.5 pl-1.5 text-sm sm:text-base text-[#263634]/80 font-medium">
                      <ShieldCheck className="w-4 h-4 text-[#4F9990] shrink-0" aria-hidden="true" />
                      <span>No spam. Just good things for your inbox.</span>
                    </div>
                  </motion.div>
                ) : (
                  /* Friendly Success Confirmation State */
                  <motion.div
                    key="success-container"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="p-6 sm:p-7 bg-[#E4EDE0] border-2 border-[#4F9990]/40 rounded-3xl shadow-md"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="flex items-start gap-4">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', damping: 12, stiffness: 200, delay: 0.1 }}
                        className="w-12 h-12 rounded-2xl bg-[#124E50] text-[#F5D95B] flex items-center justify-center shrink-0 shadow-sm"
                      >
                        <Check className="w-6 h-6 stroke-[3]" aria-hidden="true" />
                      </motion.div>
                      <div className="flex-1">
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#124E50] leading-snug">
                          Welcome to the Flora &amp; Bloom family!
                        </h2>
                        <p className="text-base sm:text-lg text-[#263634]/90 mt-2 leading-relaxed">
                          We just sent your welcome note to <strong className="text-[#124E50] font-semibold">{submittedEmail}</strong>. Look out for gentle insights and feel-good everyday gut rituals.
                        </p>
                        <div className="mt-5 pt-3.5 border-t border-[#124E50]/15 flex items-center justify-between text-xs sm:text-sm text-[#263634]/70">
                          <span className="font-medium">Verification successful</span>
                          <button
                            type="button"
                            onClick={handleReset}
                            className="font-bold text-[#124E50] hover:text-[#4F9990] underline underline-offset-4 transition-colors cursor-pointer"
                          >
                            Enter another email
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

          </div>

          {/* RIGHT SIDE: Single Image Visual Composition */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Organic Decorative Shape in Sponge Yellow (#F5D95B) with gentle floating */}
              <div 
                className="animate-float-slow absolute -top-8 -right-6 sm:-top-10 sm:-right-8 w-44 h-44 sm:w-60 sm:h-60 bg-[#F5D95B]/45 rounded-[60%_40%_70%_30%/50%_60%_40%_50%] -z-10 blur-xs transition-transform" 
                aria-hidden="true" 
              />

              {/* Organic Decorative Shape in Soft Sage (#E4EDE0) */}
              <div 
                className="animate-float-reverse absolute -bottom-10 -left-8 sm:-bottom-12 sm:-left-10 w-56 h-56 sm:w-72 sm:h-72 bg-[#E4EDE0]/85 rounded-[40%_60%_35%_65%/60%_35%_65%_40%] -z-10 transition-transform" 
                aria-hidden="true" 
              />

              {/* Floating top badge */}
              <div 
                className="animate-float-slow hidden sm:flex absolute -top-4 left-6 z-20 bg-white/95 backdrop-blur-md py-2 px-4 rounded-full shadow-md border border-[#E4EDE0] items-center gap-2 text-xs font-bold text-[#124E50]"
                aria-hidden="true"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#4F9990] animate-pulse" />
                <span>{HERO_IMAGE.badge}</span>
              </div>

              {/* Floating accent botanical badge in Sponge Yellow */}
              <motion.div 
                whileHover={{ scale: 1.06 }}
                className="animate-pulse-subtle absolute -bottom-5 right-4 sm:-bottom-6 sm:right-8 z-20 bg-[#F5D95B] text-[#124E50] py-2.5 px-4 rounded-2xl shadow-lg border-2 border-white flex items-center gap-2 cursor-default"
                aria-hidden="true"
              >
                <Sparkles className="w-4 h-4 text-[#124E50] fill-[#124E50]/20" />
                <span className="text-xs sm:text-sm font-bold tracking-wide">
                  Living Diversity
                </span>
              </motion.div>

              {/* Only One Image: Main Photo Frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.015 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#E4EDE0]/50 aspect-[4/3] w-full group transition-all duration-500"
              >
                {!imageError ? (
                  <img
                    src={HERO_IMAGE.src}
                    alt={HERO_IMAGE.alt}
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                    loading="eager"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#E4EDE0] to-[#FFF9ED] text-center">
                    <div className="w-16 h-16 rounded-full bg-[#124E50]/10 flex items-center justify-center text-[#124E50] mb-3">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <p className="font-serif text-xl font-bold text-[#124E50]">{HERO_IMAGE.badge}</p>
                    <p className="text-sm text-[#263634]/70 mt-1 max-w-xs">{HERO_IMAGE.alt}</p>
                  </div>
                )}

                {/* Subtle bottom gradient tint with caption */}
                <div 
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-5" 
                  aria-hidden="true"
                >
                  <p className="text-white text-xs sm:text-sm font-medium drop-shadow-sm line-clamp-1">
                    {HERO_IMAGE.caption}
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
