import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import badgeWorkplaces from "@/assets/badge-workplaces.jpg";
import badgeSuperbrands from "@/assets/badge-superbrands.jpg";
import badgeIso from "@/assets/badge-iso.jpg";
import badgeGlobal from "@/assets/badge-global.jpg";

const badges = [
  { image: badgeWorkplaces, alt: "Best Workplaces Kenya 2024" },
  { image: badgeSuperbrands, alt: "Superbrands Worldwide" },
  { image: badgeIso, alt: "ISO 9001:2015 Certified" },
  { image: badgeGlobal, alt: "Global Business Outlook Awards 2022 Winner" },
];

const AwardsBadges = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Our Awards & Recognitions"
          subtitle="Recognized globally for excellence in tax consultancy"
        />
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <img
                src={badge.image}
                alt={badge.alt}
                className="h-24 md:h-28 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsBadges;
