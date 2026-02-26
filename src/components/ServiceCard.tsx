import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  image: string;
  index?: number;
}

const ServiceCard = ({ icon: Icon, title, description, link, image, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={link}
        className="group block bg-card border border-border rounded-xl overflow-hidden hover:shadow-premium transition-all duration-500 hover:border-gold/30 h-full hover:translate-y-[-4px]"
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(218,60%,10%)]/60 to-transparent" />
          <div className="absolute bottom-4 left-4 w-12 h-12 bg-gold/90 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6 text-secondary-foreground" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {description}
          </p>
          <span className="inline-flex items-center gap-2 text-gold text-sm font-medium group-hover:gap-3 transition-all">
            Learn More <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
