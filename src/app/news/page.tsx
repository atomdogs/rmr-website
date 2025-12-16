"use client";

import Link from "next/link";
import { useState } from "react";

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Projects", "Company News", "Industry News"];

  // News articles will be added here as they're created
   const newsArticles = [
    {
      id: 1,
      title: "Fire Safety in Facades: What You Need to Know",
      category: "Projects",
      date: "October 21, 2025",
      excerpt: "Fire safety in facades has never been more scrutinised – and rightly so. Since Grenfell, the entire industry has had to rethink how we design, build, and maintain building exteriors.",
      image: "/uploads/news/firefacades-01.JPG",
      slug: "fire-safety-in-facades"
    },
    {
      id: 2,
      title: "Managing Health and Safety on Construction Projects",
      category: "Industry News",
      date: "December 16, 2024",
      excerpt: "Over the last few decades, the construction industry has put a lot of effort into improving health and safety. We've got regulations like the Health and Safety at Work Act and the CDM Regulations.",
      image: "/uploads/health-safety/health-safety-featured.png",
      slug: "managing-health-safety-construction"
    }
  ];

  const filteredArticles = selectedCategory === "All"
    ? newsArticles
    : newsArticles.filter(article => article.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1c1c1b] to-[#2a2a2a] text-white">
        <div className="container mx-auto px-6">
          <Link href="/" className="text-[#bc1019] hover:underline mb-6 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-light mb-6">News & Updates</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Stay informed with the latest news, project updates, and industry insights from RMR Site Developments.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-[#fbfbfb] border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#bc1019] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-3xl font-light text-gray-700 mb-4">
                News articles coming soon
              </h2>
              <p className="text-gray-600">
                Check back soon for the latest updates from RMR Site Developments.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-semibold text-[#bc1019] uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-xs text-gray-500">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-light mb-3 text-[#1c1c1b] group-hover:text-[#bc1019] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-[#bc1019] font-medium">
                      Read More
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-white/50">
            <p>RMR Group © Website by Bayley and Green. Copyright © 2025 RMR Group.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}