'use client';

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="container mx-auto px-5 md:px-10">
      <motion.section
        className="pb-16 pt-10 md:pt-20 md:pb-32"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex flex-col md:flex-row gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div
            className="w-full md:w-2/3"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-4 text-[12rem]">
              KRYTIGX<br />GARG
              </h1>

            <motion.div
              className="mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link
                href="mailto:kryptigx@gmail.com"
                className="text-sm opacity-70 hover:opacity-100 transition-opacity flex items-center"
              >
              kryptigx@gmail.com
                <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/3 flex flex-col items-end"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-24 h-24 md:w-64 md:h-64 relative overflow-hidden rounded-md">
              <Image
                src="https://raw.githubusercontent.com/krytigx/Portfolio_images/refs/heads/main/place_holder.jpg"
                alt="kryptigx"
                fill
                className="object-cover rounded-md"
              />
            </div>
            </div>
            <p className="text-2xl md:text-4xl font-medium leading-relaxed mt-6 text-right">
              Hello, I'm a freelancer specializing in minimal design with 10 years of expertise — based in Tokyo, working remote. Let's create!
            </p>

          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-between items-center mb-10">
          <h5 className="text-sm font-medium opacity-70">work.</h5>
          <Link href="/works" className="text-sm hover:underline">
            Show More
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {["stone-mind", "violet-orbit", "visual-screen-models", "flexible-area-models"].map((slug, i) => (
            <motion.div
              key={slug}
              className="relative group block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <Link href={`/works/${slug}`}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`https://ext.same-assets.com/709253059/${{
                      "stone-mind": "205560863.jpeg",
                      "violet-orbit": "3225808702.png",
                      "visual-screen-models": "961028993.png",
                      "flexible-area-models": "3768869390.png"
                    }[slug]}`}
                    alt={slug.replace(/-/g, " ")}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <h4 className="text-lg font-medium">
                    {slug.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())}
                  </h4>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-between items-center mb-10">
          <h5 className="text-sm font-medium opacity-70">about.</h5>
          <Link href="/about" className="text-sm hover:underline">
            Show More
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2">
            <p className="text-lg md:text-xl leading-relaxed">
              I collaborate with businesses of all sizes worldwide, using the latest technologies. My designs have also earned multiple awards.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src="https://ext.same-assets.com/709253059/2232509785.jpeg"
                alt="Designer working"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-black text-white text-center"
        initial={{ height: 0 }}
        whileInView={{ height: "auto" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-3xl font-bold">Let’s Build Something Beautiful Together</h2>
      </motion.section>
    </div>
  );
}
