import React, { useState } from 'react';
import { sendContactMessage } from '../services/api';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });
    try {
      await sendContactMessage(formData);
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ loading: false, success: false, error: "Failed to send message. Please try again." });
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5">
            <h2 className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">Contact</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Build Something Together</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Have an enterprise concept, AI integration requirement, or engineering role? Feel free to reach out directly.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl glass-panel border border-cyan-500/20 text-cyan-400">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Email</div>
                  <div className="text-white font-medium">alex.vance@dev.ai</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl glass-panel border border-violet-500/20 text-violet-400">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Location</div>
                  <div className="text-white font-medium">San Francisco, CA (Available Remote)</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl border border-gray-800 space-y-6">
              {status.success && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3">
                  <CheckCircle size={20} />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-gray-800 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">EMAIL</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-gray-800 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">SUBJECT</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-gray-800 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="System Architecture Consultation"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">MESSAGE</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-navy-800 border border-gray-800 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Outline your project scope or opportunity..."
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold flex items-center justify-center gap-2 hover:shadow-glow-cyan transition-all duration-300 disabled:opacity-50"
              >
                {status.loading ? 'Sending...' : 'Send Message'}
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};