import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Team recruitment is currently closed. Stay connected with NITRO-ACE
            Racing for future opportunities and announcements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Registration Closed Section */}
          <div>
            <h2 className="text-3xl text-white mb-6">Join Our Team</h2>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
              <h3 className="text-4xl font-bold text-red-500 mb-4">
                Registrations Closed
              </h3>

              <p className="text-zinc-300 text-lg mb-4">
                Thank you for your interest in NITRO-ACE Racing.
              </p>

              <p className="text-zinc-400 mb-6">
                Team recruitment is currently closed. Please follow our social
                media channels and website for future recruitment announcements,
                events, and updates.
              </p>

              <button
                type="button"
                disabled
                className="w-full px-8 py-3 bg-zinc-700 text-white rounded-lg cursor-not-allowed font-semibold"
              >
                Registrations Closed
              </button>

              <p className="text-sm text-zinc-500 mt-4">
                Follow us on Instagram and LinkedIn for future recruitment drives.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl text-white mb-6">Contact Information</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-zinc-400">nitroace@aceec.ac.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-zinc-400">+91 88858 46100</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-zinc-400">ACE Engineering College</p>
                  <p className="text-zinc-400">Ankushapur, Ghatkesar</p>
                  <p className="text-zinc-400">Telangana 501301</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>

              <div className="flex gap-4">
                <a
                  href="https://instagram.com/nitroace_racing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="w-6 h-6 text-white hover:text-red-500 transition-colors" />
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="w-6 h-6 text-white hover:text-red-500 transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/company/nitro-ace-racing/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6 text-white hover:text-red-500 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}