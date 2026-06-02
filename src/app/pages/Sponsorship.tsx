import { Handshake, Award, TrendingUp, Users, Mail, Phone, Building2, Instagram, Linkedin, X, Star, Zap, Crown, Heart } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import dkdcLogo from "../../imports/download.png";
import ansysLogo from "../../imports/ANSYS_logo.png";

export function Sponsorship() {
  const [popupTier, setPopupTier] = useState<string | null>(null);

  const sponsorshipTiers = [
    {
      name: "Supporter",
      icon: Heart,

      amount: "₹9,999",
      headerColor: "from-emerald-600 to-emerald-800",
      glowColor: "hover:border-emerald-500/50",
      pitch: "Perfect for alumni and individuals who want to give back. Your name will be proudly listed and your support directly funds our next race car.",

      benefits: [
        "Name listed on our website as a Supporter",
        "Shoutout on Instagram & LinkedIn",
        "Progress updates & team newsletters",
        "Invitation to team events",
      ],
    },
    {
      name: "Community Partner",
      icon: Star,

      amount: "₹35,000 – ₹80,000",
      headerColor: "from-sky-500 to-sky-700",
      glowColor: "hover:border-sky-500/50",
      pitch: "Great visibility for local Hyderabad businesses. Your logo on our car and banners reaches engineering students, parents, faculty, and event visitors.",

      benefits: [
        "Logo on team banners & event materials",
        "Social media features (2× per month)",
        "Website listing with your company link",
        "Invitations to competitions & events",
        "Certificate of Association",
      ],
    },
    {
      name: "Innovation Partner",
      icon: Zap,

      amount: "₹85,000 – ₹1,50,000",
      headerColor: "from-amber-500 to-amber-700",
      glowColor: "hover:border-amber-500/50",
      popular: true,
      pitch: "Your brand on the race car, team jerseys, and all competition coverage. Ideal for engineering and tech companies wanting visible association with innovation.",

      benefits: [
        "Logo on race car body (prominent position)",
        "Logo on team jerseys & apparel",
        "Full competition & event branding",
        "Dedicated social media campaign",
        "Quarterly engineering progress reports",
        "Talent pipeline access — meet our engineers",
        "Website dedicated section with logo",
      ],
    },
    {
      name: "Title Partner",
      icon: Crown,

      amount: "₹2,00,000+",
      headerColor: "from-yellow-400 to-amber-600",
      glowColor: "hover:border-yellow-400/50",
      pitch: "Your brand leads alongside NITRO-ACE in every press release, media appearance, and race event. Maximum reach, maximum association with our AIR 1 winning team.",

      benefits: [
        "Primary logo — race car, helmet & all gear",
        "Title billing: 'NITRO-ACE Racing powered by [YOU]'",
        "Press releases & media coverage with your brand",
        "Annual executive factory tour",
        "First-access to recruit our top engineers",
        "Exclusive networking at all competitions",
        "Social media across all platforms, every event",
        "Full website title recognition + bio section",
      ],
    },
  ];

  const whySponsorPoints = [
    {
      icon: TrendingUp,
      title: "Brand Visibility",
      description: "Reach thousands of students, faculty, and motorsport enthusiasts through competitions and events.",
    },
    {
      icon: Users,
      title: "Talent Pipeline",
      description: "Connect directly with skilled engineering students — identify and recruit future talent early.",
    },
    {
      icon: Award,
      title: "Innovation Association",
      description: "Be linked to an AIR 1 winning team. Associate your brand with excellence from day one.",
    },
    {
      icon: Handshake,
      title: "Community Impact",
      description: "Support real student-led engineering — your contribution builds the next generation of Indian motorsport.",
    },
  ];

  const activeTier = sponsorshipTiers.find((t) => t.name === popupTier);

  return (
    <div>
      {/* Contact Popup */}
      {popupTier && activeTier && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setPopupTier(null)}
        >
          <div
            className="bg-zinc-900 border border-zinc-700 rounded-2xl max-w-md w-full p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setPopupTier(null)} className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>

            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r ${activeTier.headerColor} text-white`}>
              <activeTier.icon className="w-4 h-4" />
              {activeTier.name}
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Let's make this happen!</h3>
            <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
              Reach out through any channel below and mention <span className="text-white font-medium">"{activeTier.name}"</span> — we'll send our full sponsorship proposal and a personalised pitch deck within 24 hours.
            </p>

            <div className="space-y-3">
              <a
                href="mailto:nitroace@aceec.ac.in?subject=Sponsorship Enquiry — NITRO-ACE Racing"
                className="flex items-center gap-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-red-500 rounded-xl p-4 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-red-400 transition-colors">Email Us</p>
                  <p className="text-zinc-400 text-sm">nitroace@aceec.ac.in</p>
                </div>
              </a>

              <a
                href="tel:+918885846100"
                className="flex items-center gap-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-red-500 rounded-xl p-4 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-red-400 transition-colors">Call / WhatsApp</p>
                  <p className="text-zinc-400 text-sm">+91 88858 46100</p>
                </div>
              </a>

              <a
                href="https://instagram.com/nitroace_racing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-red-500 rounded-xl p-4 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-red-400 transition-colors">Instagram DM</p>
                  <p className="text-zinc-400 text-sm">@nitroace_racing</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/nitroace-racing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-red-500 rounded-xl p-4 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium group-hover:text-red-400 transition-colors">LinkedIn</p>
                  <p className="text-zinc-400 text-sm">NITRO-ACE Racing</p>
                </div>
              </a>
            </div>

            <p className="text-zinc-500 text-xs text-center mt-6">
              All packages are flexible — we'll work with your budget.
            </p>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-red-600 to-red-700 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Handshake className="w-16 h-16 md:w-20 md:h-20 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl text-white mb-6">Partner With NITRO-ACE Racing</h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            We're a first-year team that won AIR 1 in our very first competition. Be part of what comes next.
          </p>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-16 bg-zinc-900 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-white text-center mb-4">Our Proud Sponsors</h2>
          <p className="text-zinc-400 text-center mb-12">DKDC EV001 Project Partners</p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            <div className="bg-white p-8 rounded-xl hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-300 hover:scale-105">
              <img src={dkdcLogo} alt="DKDC Sponsor" className="h-24 md:h-32 w-auto object-contain" />
            </div>
            <div className="bg-white p-8 rounded-xl hover:shadow-2xl hover:shadow-red-600/20 transition-all duration-300 hover:scale-105">
              <img src={ansysLogo} alt="ANSYS Sponsor" className="h-24 md:h-32 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-white text-center mb-16">Why Sponsor NITRO-ACE Racing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whySponsorPoints.map((point, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-red-600 transition-colors">
                <point.icon className="w-12 h-12 text-red-500 mb-4" />
                <h3 className="text-xl text-white mb-3">{point.title}</h3>
                <p className="text-zinc-400">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-white text-center mb-12">Our Track Record</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "AIR 1", label: "DKDC Season 3" },
              { val: "50+", label: "Active Members" },
              { val: "1st", label: "Competition = 1st Win" },
              { val: "3", label: "Racing Cars Built" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl text-red-500 mb-2">{s.val}</div>
                <div className="text-zinc-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-white text-center mb-4">Sponsorship Packages</h2>
          <p className="text-zinc-400 text-center mb-3 max-w-2xl mx-auto">
            We have options for everyone — from alumni wanting to give back, to corporates seeking brand association with a winning team.
          </p>
          <p className="text-zinc-500 text-center text-sm mb-16">
            Click <span className="text-red-400 font-semibold">"Become a Partner"</span> on any tier to reach us directly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            {sponsorshipTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-zinc-900 rounded-xl overflow-hidden border transition-all duration-300 flex flex-col ${
                  tier.popular
                    ? "border-amber-400/60 shadow-xl shadow-amber-400/10 scale-105"
                    : `border-zinc-800 ${tier.glowColor}`
                }`}
              >
                {/* Most Popular badge */}
                {tier.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-amber-400 text-zinc-900 text-xs font-black text-center py-1 tracking-widest uppercase z-10">
                    ⭐ Most Popular
                  </div>
                )}

                {/* Header */}
                <div className={`bg-gradient-to-br ${tier.headerColor} p-6 text-center ${tier.popular ? "pt-8" : ""}`}>
                  <tier.icon className="w-8 h-8 text-white mx-auto mb-2 opacity-90" />
                  <h3 className="text-2xl text-white font-bold mb-2">{tier.name}</h3>
                  <p className="text-2xl text-white font-semibold">{tier.amount}</p>
                </div>

                {/* Pitch */}
                <div className="px-5 pt-3 pb-2">
                  <p className="text-zinc-300 text-sm leading-relaxed">{tier.pitch}</p>
                </div>

                {/* Benefits */}
                <div className="px-5 py-3 flex-1">
                  <ul className="space-y-2">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-zinc-300 text-sm">
                        <span className="text-red-500 mt-0.5 flex-shrink-0">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="px-5 pb-5 pt-2">
                  <button
                    onClick={() => setPopupTier(tier.name)}
                    className={`w-full py-3 rounded-lg font-semibold text-sm transition-all bg-gradient-to-r ${tier.headerColor} text-white hover:opacity-90 hover:shadow-lg`}
                  >
                    Become a Partner →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-zinc-500 text-center mt-12 text-sm">
            * All amounts are indicative and fully negotiable. In-kind sponsorships (tools, software, components) are also very welcome.
          </p>
        </div>
      </section>

      {/* In-Kind */}
      <section className="py-20 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-white mb-6">In-Kind Sponsorship</h2>
          <p className="text-zinc-400 mb-8">
            Can't sponsor with cash? We also welcome tools, components, software licences, manufacturing support, and any technical expertise that helps us build faster cars.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-lg text-white mb-2">Components & Materials</h3>
              <p className="text-zinc-400 text-sm">Racing parts, electronics, composite materials</p>
            </div>
            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-lg text-white mb-2">Tools & Software</h3>
              <p className="text-zinc-400 text-sm">CAD software, simulation tools, workshop equipment</p>
            </div>
            <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-lg text-white mb-2">Services & Expertise</h3>
              <p className="text-zinc-400 text-sm">Manufacturing, testing, mentorship from industry professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl text-white mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl text-red-100 mb-8">
            Whether you're an alumnus, a local business, or a corporate — there's a place for you in our journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-white">
              <Mail className="w-5 h-5" />
              <span>nitroace@aceec.ac.in</span>
            </div>
            <a href="https://instagram.com/nitroace_racing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-zinc-200 transition-colors">
              <Instagram className="w-5 h-5" />
              <span>@nitroace_racing</span>
            </a>
            <a href="https://www.linkedin.com/company/nitroace-racing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-zinc-200 transition-colors">
              <Linkedin className="w-5 h-5" />
              <span>NITRO-ACE Racing</span>
            </a>
          </div>
          <Link to="/contact" className="inline-block px-8 py-3 bg-white text-red-600 rounded-lg hover:bg-zinc-100 transition-colors font-semibold">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
