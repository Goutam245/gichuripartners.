import { motion } from "framer-motion";
import { Heart, FileText, Briefcase, Calendar } from "lucide-react";
import { useCountUp } from "../hooks/useCountUp";

const AnimatedStat = ({ icon: Icon, number, suffix, label }: { icon: any; number: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(number, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <Icon className="w-8 h-8 text-gold mx-auto mb-3" />
      <div className="text-2xl md:text-4xl font-bold text-gold mb-1">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-primary-foreground/70 text-sm">
        {label}
      </div>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-navy py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedStat icon={Heart} number={10000} suffix="+" label="Happy Clients" />
          <AnimatedStat icon={FileText} number={25000} suffix="+" label="Tax Returns" />
          <AnimatedStat icon={Briefcase} number={5000} suffix="+" label="Business Partners" />
          <AnimatedStat icon={Calendar} number={2013} suffix="" label="Year Established" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
