import { useState } from "react";
import { toast } from "sonner";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    toast.success("Thank you! We'll get back to you within 48 hours.");
    setFormData({ name: "", phone: "", email: "", company: "", service: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Full Name *"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold text-sm"
        maxLength={100}
        required
      />
      <input
        type="tel"
        placeholder="Phone Number *"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold text-sm"
        maxLength={20}
        required
      />
      <input
        type="email"
        placeholder="Email Address *"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold text-sm"
        maxLength={255}
        required
      />
      <input
        type="text"
        placeholder="Company Name"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold text-sm"
        maxLength={100}
      />
      <select
        value={formData.service}
        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        className="w-full px-4 py-3 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-gold text-sm"
      >
        <option value="">What Services Are You Looking For?</option>
        <option value="tax-advisory">Tax Advisory</option>
        <option value="accounting">Accounting</option>
        <option value="auditing">Auditing</option>
        <option value="bookkeeping">Bookkeeping</option>
        <option value="payroll">Payroll Services</option>
        <option value="kra-services">KRA Services</option>
        <option value="business-registration">Business Registration</option>
        <option value="return-filing">Return Filing</option>
      </select>
      <button
        type="submit"
        className="w-full bg-gold hover:bg-gold-dark text-secondary-foreground font-semibold py-3.5 rounded-md transition-all duration-300 text-sm"
      >
        Request A Callback Now
      </button>
    </form>
  );
};

export default ConsultationForm;
