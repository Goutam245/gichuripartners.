import SectionHeading from "./SectionHeading";
import logoKra from "@/assets/logo-kra.png";
import logoNtsa from "@/assets/logo-ntsa.png";
import logoKeninvest from "@/assets/logo-keninvest.png";
import logoNssf from "@/assets/logo-nssf.png";
import logoSha from "@/assets/logo-sha.png";
import logoBrs from "@/assets/logo-brs.png";

const agencies = [
  { image: logoKra, alt: "Kenya Revenue Authority (KRA)" },
  { image: logoNtsa, alt: "NTSA" },
  { image: logoKeninvest, alt: "KenInvest — Kenya Investment Authority" },
  { image: logoNssf, alt: "NSSF" },
  { image: logoSha, alt: "SHA — Social Health Authority" },
  { image: logoBrs, alt: "BRS — Business Registration Service" },
];

const GovernmentAgencies = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Your Trusted Link to All Government Agencies"
          subtitle="Seamless Collaboration with Government Agencies — So You Don't Have to Worry."
        />
        <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-8">
          <div className="flex animate-scroll-logos gap-12 items-center">
            {[...agencies, ...agencies].map((agency, index) => (
              <div
                key={`${agency.alt}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-20 w-44"
              >
                <img
                  src={agency.image}
                  alt={agency.alt}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentAgencies;
