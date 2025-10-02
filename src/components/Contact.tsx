import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se implementaría el envío del formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por su consulta! Nos pondremos en contacto pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight drop-shadow-lg">
            <span className="text-emerald-700">Información de Contacto</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2 font-medium">Estamos para ayudarte. Contactanos y recibí asesoramiento personalizado.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Ubicación */}
          <div className="bg-white/80 backdrop-blur-lg border border-emerald-100 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-emerald-200 duration-300">
            <div className="bg-emerald-100 p-4 rounded-full mb-4 animate-pulse-slow">
              <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <h4 className="font-bold text-lg text-emerald-700 mb-1">Ubicación</h4>
            <p className="text-gray-900 font-semibold text-xl">San Juan Capital</p>
            <p className="text-gray-500 text-sm">Provincia de San Juan, Argentina</p>
          </div>
          {/* Teléfono */}
          <div className="bg-white/80 backdrop-blur-lg border border-emerald-100 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-emerald-200 duration-300">
            <div className="bg-emerald-100 p-4 rounded-full mb-4 animate-pulse-slow">
              <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <h4 className="font-bold text-lg text-emerald-700 mb-1">Teléfono</h4>
            <a href="tel:+542644237890" className="text-emerald-700 font-semibold text-xl underline decoration-emerald-400 decoration-2">+54 264 423-7890</a>
            <p className="text-gray-500 text-sm">Lunes a Viernes: 8:00 - 18:00 hs</p>
          </div>
          {/* Email */}
          <div className="bg-white/80 backdrop-blur-lg border border-emerald-100 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-emerald-200 duration-300">
            <div className="bg-emerald-100 p-4 rounded-full mb-4 animate-pulse-slow">
              <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h4 className="font-bold text-lg text-emerald-700 mb-1">Email</h4>
            <a href="mailto:ventas@dorganalfalfa.com.ar" className="text-emerald-700 font-semibold text-xl underline decoration-emerald-400 decoration-2">ventas@dorganalfalfa.com.ar</a>
            <p className="text-gray-500 text-sm">Respuesta garantizada en 24 horas</p>
          </div>
          {/* Horarios de Atención */}
          <div className="bg-white/80 backdrop-blur-lg border border-emerald-100 rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform hover:-translate-y-1 hover:shadow-emerald-200 duration-300">
            <div className="bg-emerald-100 p-4 rounded-full mb-4 animate-pulse-slow">
              <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h4 className="font-bold text-lg text-emerald-700 mb-1">Horarios de Atención</h4>
            <p className="text-emerald-700 font-semibold text-xl">8:00 - 18:00 hs</p>
            <p className="text-gray-500 text-sm">Lunes a Viernes | Sábados: 8:00 - 12:00</p>
          </div>
        </div>
        {/* Nuestra Ubicación Card con botón */}
        <div className="bg-gradient-to-br from-emerald-100 via-green-50 to-white rounded-2xl border border-emerald-200 shadow-2xl mt-8 w-full flex flex-col items-center justify-center py-10">
          <h3 className="text-2xl font-bold text-emerald-700 mb-2">¿Dónde estamos?</h3>
          <p className="text-lg text-gray-700 mb-6">San Juan Capital, Provincia de San Juan, Argentina</p>
          <a
            href="https://www.google.com/maps?q=-31.5375,-68.5364"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-600 text-white font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-emerald-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            Ver ubicación en Google Maps
          </a>
        </div>
      </div>
      <style>{`
        .animate-pulse-slow {
          animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}