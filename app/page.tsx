"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useCallback } from "react";

// Animation variants for consistent use
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// Proof stats for the strip
const proofStats = [
  { value: "18 ", unit: "hours", label: "to ship SkillDen" },
  { value: "1000+", unit: "", label: "users on ProofBase" },
  { value: "3", unit: "", label: "shipped products" },
  { value: "Monetised", unit: "", label: "traction" },
];

// Timeline steps
const timelineSteps = [
  {
    week: "Week 0",
    title: "One call. We define the product and cut what doesn't matter.",
  },
  { week: "Weeks 1-2", title: "I build. You get updates." },
  { week: "Week 3", title: "Shipped, documented, yours." },
];

// Products data
const products = [
  {
    name: "SkillDen",
    description: "Gamified skill tree builder. Built in 18 hours.",
    url: "https://skillden.app",
    images: [
      "/skillden/skillden-skilltree.png",
      "/skillden/skillden-stats.png",
      "/skillden/skillden-tree-complete.png",
      "/skillden/skillden-quests.png",
      "/skillden/skillden-ai.png",
    ],
    accent: "#f59e0b",
  },
  {
    name: "ProofBase",
    description:
      "Portfolio builder for degree apprentices. 1000+ users. Monetized.",
    url: "https://proofbase.app",
    images: [
      "/proofbase/proofbase-cv-preview.png",
      "/proofbase/proofbase-tracker.png",
      "/proofbase/proofbase-referrals.png",
      "/proofbase/proofbase-analytics.png",
    ],
    accent: "#8b5cf6",
  },
  {
    name: "StudentVault",
    description:
      "Collaborative learning platform. Create and share revision resources in course structures. (Exited)",
    url: null,
    images: [
      "/studentvault/studentvault-studying-mockup.png",
      "/studentvault/studentvault-search-mockup.png",
      "/studentvault/studentvault-analytics-mockup.png",
      "/studentvault/studentvault-progress-tracking-mockup.png",
    ],
    accent: "#22c55e",
  },
];

// Fit criteria
const fitCriteria = [
  "You have a clear idea",
  "You want a product, not a proposal",
  "You're ready to move now",
];

// Image Gallery Component with slider and modal
function ImageGallery({
  images,
  productName,
  accent,
}: {
  images: string[];
  productName: string;
  accent: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const openModal = (index: number) => {
    setModalIndex(index);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "unset";
  };

  const modalNext = useCallback(() => {
    setModalIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const modalPrev = useCallback(() => {
    setModalIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  return (
    <>
      {/* Gallery Slider */}
      <div className="relative">
        {/* Main Image Display - Horizontal sliding carousel */}
        <div
          className="relative aspect-[16/10] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 cursor-pointer group"
          onClick={() => openModal(currentIndex)}
        >
          {/* All images rendered, sliding horizontally */}
          <div
            className="flex h-full transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="relative flex-shrink-0 w-full h-full">
                <Image
                  src={image}
                  alt={`${productName} screenshot ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>
            ))}
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium bg-black/50 px-4 py-2 rounded-full">
              Click to enlarge
            </span>
          </div>
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors z-10"
                aria-label="Previous image"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors z-10"
                aria-label="Next image"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Strip */}
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "ring-2 ring-offset-2 ring-offset-[#0a0a0a]"
                  : "border-white/10 hover:border-white/30"
              }`}
              style={{
                borderColor: index === currentIndex ? accent : undefined,
                // @ts-expect-error - CSS custom property for Tailwind ring
                "--tw-ring-color": index === currentIndex ? accent : undefined,
              }}
            >
              <Image
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                className="object-cover object-top"
                sizes="80px"
              />
            </button>
          ))}
        </div>

        {/* Slide Indicator */}
        <div className="flex justify-center gap-2 mt-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "w-6" : "bg-white/20 hover:bg-white/40"
              }`}
              style={{
                backgroundColor: index === currentIndex ? accent : undefined,
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-6xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-900">
                {/* All images rendered, sliding horizontally */}
                <div
                  className="flex h-full transition-transform duration-300 ease-out"
                  style={{ transform: `translateX(-${modalIndex * 100}%)` }}
                >
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="relative flex-shrink-0 w-full h-full"
                    >
                      <Image
                        src={image}
                        alt={`${productName} screenshot ${index + 1}`}
                        fill
                        className="object-contain"
                        sizes="100vw"
                        priority
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Navigation */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={modalPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label="Previous image"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={modalNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                    aria-label="Next image"
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}

              {/* Modal Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/50 text-white text-sm">
                {modalIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#050505]" />
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            variants={fadeInUp}
          >
            I turn ideas into shipped products.
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-10"
            variants={fadeInUp}
          >
            I&apos;m Jamie, a product engineer who builds SaaS from scratch. You
            bring the idea, I handle the rest. Weeks, not months.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-black rounded-full hover:bg-neutral-200 transition-colors"
            >
              Let&apos;s talk
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Proof Strip */}
      <section className="py-12 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {proofStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
              >
                <div className="text-3xl sm:text-4xl font-bold text-white">
                  {stat.value}
                  <span className="text-neutral-500">{stat.unit}</span>
                </div>
                <div className="text-sm text-neutral-500 mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 md:py-32 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8"
            variants={fadeInUp}
          >
            You don&apos;t need a dev.
            <br />
            <span className="text-neutral-500">You need a builder.</span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-neutral-400 leading-relaxed"
            variants={fadeInUp}
          >
            You&apos;ve got the idea. You need someone to build it. Someone who
            gets the vision, makes decisions, and ships. That&apos;s what I do.
          </motion.p>
        </motion.div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 md:py-32 px-6 bg-[#050505]">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8"
            variants={fadeInUp}
          >
            Idea to launched product.
            <br />
            <span className="text-neutral-500">End-to-end.</span>
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-neutral-400 leading-relaxed"
            variants={fadeInUp}
          >
            I work with founders who have a clear idea but no technical
            co-founder. You get a working product, not a prototype. Auth,
            payments, deployment, handled. No scope creep. No endless discovery.
            Simply a product you can launch.
          </motion.p>
        </motion.div>
      </section>

      {/* Responsibilities Split Section */}
      <section className="py-24 md:py-32 px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center"
            variants={fadeInUp}
          >
            You focus on the vision.
            <br />
            <span className="text-neutral-500">I handle the rest.</span>
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-white/10"
            variants={fadeInUp}
          >
            {/* Your Side */}
            <div className="bg-white/5 p-8">
              <h3 className="text-lg font-semibold text-neutral-300 mb-6 uppercase tracking-wider">
                You bring
              </h3>
              <ul className="space-y-4">
                {[
                  "The idea and vision",
                  "Target users and market",
                  "Feature priorities",
                  "Feedback during builds",
                  "Domain expertise",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-neutral-400"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Divider */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10" />
            {/* My Side */}
            <div className="bg-neutral-900 p-8 border-t md:border-t-0 md:border-l border-white/10">
              <h3 className="text-lg font-semibold text-white mb-6 uppercase tracking-wider">
                I deliver
              </h3>
              <ul className="space-y-4">
                {[
                  "Architecture and tech decisions",
                  "Design and UI implementation",
                  "Development and testing",
                  "Deployment and hosting",
                  "A URL you can share",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-neutral-300"
                  >
                    <svg
                      className="mt-1 w-4 h-4 text-green-500 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Specialization Section */}
      <section className="py-24 md:py-32 px-6 bg-[#050505]">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8"
            variants={fadeInUp}
          >
            I&apos;ve mastered builder-viewer interfaces.
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-neutral-400 leading-relaxed mb-8"
            variants={fadeInUp}
          >
            Three of my products have one thing in common: they let users create
            something. Flashcard builders. Portfolio creators. Skill tree
            systems. If your SaaS involves users building, designing, or
            creating content, I&apos;ve solved these problems before.
          </motion.p>
          <motion.div className="flex flex-wrap gap-3" variants={fadeInUp}>
            {[
              "Complex state management",
              "Real-time editing",
              "Undo/redo",
              "Nested components",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-neutral-300"
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 md:py-32 px-6 bg-[#050505]">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center"
            variants={fadeInUp}
          >
            How I Work
          </motion.h2>
          <div className="space-y-12">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex gap-6 items-start"
                variants={fadeInUp}
              >
                <div className="flex-shrink-0 w-24 sm:w-32">
                  <span className="text-sm font-mono text-neutral-500">
                    {step.week}
                  </span>
                </div>
                <div className="flex-1 pb-12 border-l border-white/10 pl-6 relative">
                  <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-white rounded-full" />
                  <p className="text-lg sm:text-xl text-neutral-200">
                    {step.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section className="py-24 md:py-32 px-6">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center"
            variants={fadeInUp}
          >
            Proof
          </motion.h2>
          <div className="space-y-24">
            {products.map((product) => (
              <motion.div
                key={product.name}
                className="space-y-6"
                variants={fadeInUp}
              >
                {/* Product Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                  <div>
                    <h3
                      className="text-2xl sm:text-3xl font-bold mb-2"
                      style={{ color: product.accent }}
                    >
                      {product.name}
                    </h3>
                    <p className="text-lg text-neutral-400">
                      {product.description}
                    </p>
                  </div>
                  {product.url ? (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all hover:scale-105"
                      style={{
                        backgroundColor: product.accent,
                        color: product.accent === "#f59e0b" ? "#000" : "#fff",
                      }}
                    >
                      <span>Visit {product.name}</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium bg-neutral-800 text-neutral-400">
                      Exited
                    </span>
                  )}
                </div>

                {/* Image Gallery */}
                <ImageGallery
                  images={product.images}
                  productName={product.name}
                  accent={product.accent}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* This Is For You If Section */}
      <section className="py-24 md:py-32 px-6 bg-[#050505]">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12"
            variants={fadeInUp}
          >
            This Is For You If
          </motion.h2>
          <motion.ul className="space-y-6" variants={staggerContainer}>
            {fitCriteria.map((criteria, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-4 text-lg sm:text-xl text-neutral-300"
                variants={fadeInUp}
              >
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {criteria}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 md:py-32 px-6">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8"
            variants={fadeInUp}
          >
            About
          </motion.h2>
          <motion.div
            className="text-lg sm:text-xl text-neutral-400 leading-relaxed space-y-6"
            variants={fadeInUp}
          >
            <p>
              I&apos;m Jamie. I&apos;m 20. Software engineer at a finance
              company, product builder on the side. I&apos;ve shipped consumer
              apps, developer tools, and fintech systems.
            </p>
            <p>
              I work fast because I know what matters. I&apos;m not an agency.
              I&apos;m one person who builds things that work.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-[#050505]">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            variants={fadeInUp}
          >
            Got an idea?
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-neutral-400 mb-10"
            variants={fadeInUp}
          >
            Tell me what you&apos;re building.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <a
              href="mailto:jamie@jamiewells.dev"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-white text-black rounded-full hover:bg-neutral-200 transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-neutral-500 text-sm">Jamie Wells</span>
          <div className="flex items-center gap-6 text-sm text-neutral-500">
            <a
              href="https://github.com/jamiewells1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jamiewells31"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
