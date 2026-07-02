import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    major: "",
    year: "",
    message: "",
    cars: "",
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [urlParams, setUrlParams] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const extracted: Record<string, string> = {};
    params.forEach((value, key) => {
      extracted[key] = value;
    });
    setUrlParams(extracted);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setSelectedFile(null);
      return;
    }

    // Check size limit (2MB)
    if (file.size > 2 * 1024 * 1024) {
      setStatus({ type: "error", message: "File size must be less than 2MB." });
      if (fileInputRef.current) fileInputRef.current.value = "";
      setSelectedFile(null);
      return;
    }

    // Check file type
    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    
    if (!validTypes.includes(file.type)) {
      setStatus({ type: "error", message: "Only PDF and DOC/DOCX files are allowed." });
      if (fileInputRef.current) fileInputRef.current.value = "";
      setSelectedFile(null);
      return;
    }

    setStatus({ type: "", message: "" });
    setSelectedFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    if (!formData.name || !formData.email || !formData.mobile || !formData.major) {
      setStatus({ type: "error", message: "Name, Email, Mobile Number, and Major are required." });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[6-9]\d{9}$/;

    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      setIsSubmitting(false);
      return;
    }

    if (!mobileRegex.test(formData.mobile)) {
      setStatus({ type: "error", message: "Please enter a valid 10-digit mobile number." });
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("mobile", formData.mobile);
      payload.append("major", formData.major);
      payload.append("year", formData.year);
      payload.append("cars", formData.cars);
      payload.append("message", formData.message);
      payload.append("date", new Date().toLocaleString("en-IN"));
      
      Object.entries(urlParams).forEach(([key, value]) => {
        payload.append(key, value);
      });

      if (selectedFile) {
        payload.append("resume", selectedFile);
      }

      // Pointing to your PHP script on cPanel
      const response = await fetch("/submit.php", {
        method: "POST",
        body: payload,
      });

      const result = await response.json();

      if (result.status === "error") throw new Error(result.message);

      setStatus({
        type: "success",
        message: "Application submitted successfully! We'll review your application and contact you soon.",
      });

      setFormData({ name: "", email: "", mobile: "", major: "", year: "", message: "", cars: "" });
      setSelectedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      
    } catch (error) {
      setStatus({
        type: "error",
        message: "Submission failed. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Interested in joining the team or becoming a sponsor? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          {/* Contact Form */}
          <div class="invisible">
            <h2 className="text-3xl text-white mb-6">Join Our Team</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {Object.entries(urlParams).map(([key, value]) => (
                <input key={key} type="hidden" name={key} value={value} />
              ))}

              {status.message && (
                <div
                  className={`p-4 rounded-lg text-sm font-medium ${
                    status.type === "success"
                      ? "bg-green-900 text-green-300 border border-green-700"
                      : "bg-red-900 text-red-300 border border-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-zinc-300 mb-2">Full Name *</label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-red-500" placeholder="John Doe" />
              </div>

              <div>
                <label htmlFor="email" className="block text-zinc-300 mb-2">Email *</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-red-500" placeholder="yourname@example.com" />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-zinc-300 mb-2">Mobile Number *</label>
                <input type="tel" id="mobile" name="mobile" required maxLength={10} value={formData.mobile} onChange={handleChange} className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-red-500" placeholder="xxxxx xxxxx" />
              </div>

              <div>
                <label htmlFor="major" className="block text-zinc-300 mb-2">Major *</label>
                <select id="major" name="major" required value={formData.major} onChange={handleChange} className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-red-500">
                  <option value="">Choose stream</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                  <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Computer Science and Engineering (Internet of Things)">Computer Science and Engineering (Internet of Things)</option>
                  <option value="Computer Science and Engineering (Artificial Intelligence and Machine Learning)">Computer Science and Engineering (Artificial Intelligence and Machine Learning)</option>
                  <option value="Computer Science and Engineering (Data Science)">Computer Science and Engineering (Data Science)</option>
                  <option value="Artificial Intelligence and Machine Learning">Artificial Intelligence and Machine Learning</option>
                  <option value="Artificial Intelligence and Data Science">Artificial Intelligence and Data Science</option>
                </select>
              </div>

              <div>
                <label htmlFor="year" className="block text-zinc-300 mb-2">Year</label>
                <select id="year" name="year" value={formData.year} onChange={handleChange} className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 required rounded-lg text-white focus:outline-none focus:border-red-500">
                  <option value="">Select year</option>
                  <option value="freshman">Freshman</option>
                  <option value="sophomore">Sophomore</option>
                  <option value="junior">Junior</option>
                  <option value="senior">Senior</option>
                  <option value="graduate">Graduate</option>
                </select>
              </div>

              <div>
                <label htmlFor="resume" className="block text-zinc-300 mb-2">Resume / Portfolio (Max 2MB - PDF/DOC)</label>
                <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" ref={fileInputRef} onChange={handleFileChange} className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-red-600 file:text-white hover:file:bg-red-700 cursor-pointer" />
              </div>

              <div>
                <label htmlFor="cars" className="block text-zinc-300 mb-2">Cars</label>
                <input type="text" id="cars" name="cars" value={formData.cars} onChange={handleChange} className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-red-500" placeholder="Vehicle experience" />
              </div>

              <div>
                <label htmlFor="message" className="block text-zinc-300 mb-2">Message</label>
                <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white resize-none focus:outline-none focus:border-red-500" placeholder="Tell us about yourself..." />
              </div>

              {status.message && (
                <div
                  className={`p-4 rounded-lg text-sm font-medium ${
                    status.type === "success"
                      ? "bg-green-900 text-green-300 border border-green-700"
                      : "bg-red-900 text-red-300 border border-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button type="submit" disabled={isSubmitting} className="w-full px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold">
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
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
                <a href="https://instagram.com/nitroace_racing" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a href="https://www.linkedin.com/company/nitro-ace-racing/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}