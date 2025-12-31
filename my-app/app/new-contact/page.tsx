
'use client';

import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-40 pb-24">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="text-vibrant-gold font-black uppercase tracking-[0.4em] text-[10px]">Reach Out</span>
            <h1 className="text-6xl lg:text-8xl font-serif-impact text-deep-purple leading-tight mt-4">Get in <br/><span className="italic">Touch</span>.</h1>
            
            <div className="mt-16 space-y-12">
              <div>
                <h4 className="text-stone-300 font-black uppercase tracking-widest text-[10px] mb-4">Headquarters</h4>
                <p className="text-2xl font-bold text-deep-purple">Haripur Municipality - 2, Sarlahi</p>
                <p className="text-stone-500 text-lg mt-1">Madhesh Province, Nepal</p>
              </div>
              <div>
                <h4 className="text-stone-300 font-black uppercase tracking-widest text-[10px] mb-4">Email Us</h4>
                <p className="text-2xl font-bold text-deep-purple">info@rwua.org.np</p>
                <p className="text-stone-500 text-lg mt-1">General inquiries & Partnerships</p>
              </div>
              <div>
                <h4 className="text-stone-300 font-black uppercase tracking-widest text-[10px] mb-4">Call Us</h4>
                <p className="text-2xl font-bold text-deep-purple">+977-9854035079</p>
                <p className="text-stone-500 text-lg mt-1">Sun - Fri, 10 AM - 5 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-stone-50 p-12 lg:p-20 rounded-[60px] border border-stone-100 shadow-sm">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-stone-400">Full Name</label>
                  <input type="text" className="w-full bg-white border border-stone-200 rounded-xl px-6 py-4 outline-none focus:border-deep-purple transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-stone-400">Email Address</label>
                  <input type="email" className="w-full bg-white border border-stone-200 rounded-xl px-6 py-4 outline-none focus:border-deep-purple transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-stone-400">Subject</label>
                <input type="text" className="w-full bg-white border border-stone-200 rounded-xl px-6 py-4 outline-none focus:border-deep-purple transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-stone-400">Message</label>
                <textarea rows={5} className="w-full bg-white border border-stone-200 rounded-xl px-6 py-4 outline-none focus:border-deep-purple transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-deep-purple text-vibrant-gold font-black py-5 rounded-2xl uppercase tracking-widest text-xs hover:bg-black transition-all shadow-xl">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
