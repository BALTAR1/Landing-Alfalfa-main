export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'Nosotros', href: '#nosotros' },
      { name: 'Productos', href: '#productos' },
      { name: 'Calidad', href: '#calidad' },
      { name: 'Contacto', href: '#contacto' }
    ],
    products: [
      { name: 'Alfalfa Pelletizada', href: '#productos' },
      { name: 'Alfalfa en Fardos', href: '#productos' },
      { name: 'Alfalfa Picada', href: '#productos' },
      { name: 'Productos Personalizados', href: '#contacto' }
    ],
    contact: [
      { name: 'San Juan, Argentina', href: '#contacto' },
      { name: '+54 264 XXX-XXXX', href: 'tel:+54264XXXXXX' },
  { name: 'info@dorganalfalfa.com.ar', href: 'mailto:info@dorganalfalfa.com.ar' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-primary-400 mb-2">DORGAN ALFALFA</h3>
            <p className="text-gray-300 mb-3 leading-relaxed">
              Más de 30 años cultivando la mejor alfalfa de San Juan, Argentina. 
              Calidad, tradición y compromiso con nuestros clientes.
            </p>
            <div className="flex space-x-2">
              {/* Social Media Placeholders */}
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">📘</div>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">📷</div>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <span className="sr-only">WhatsApp</span>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">💬</div>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-primary-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Productos</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-primary-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Contacto</h4>
            <ul className="space-y-2">
              {footerLinks.contact.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-primary-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
  <div className="border-t border-gray-800 mt-6 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} DORGAN ALFALFA. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}