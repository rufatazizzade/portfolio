"use client";

import { useState, useEffect } from "react";
import { Save } from "lucide-react";

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    hero_title: "",
    hero_headline: "",
    hero_intro: "",
    about_intro: "",
    about_description: "",
    about_email: "",
    about_location: "",
  });

  useEffect(() => {
    const fetchSettings = async () => {
      setLoading(true);
      const res = await fetch("/api/admin/settings");
      if (res.ok) {
        const data = await res.json();
        setFormData({
          hero_title: data.hero_title || "",
          hero_headline: data.hero_headline || "",
          hero_intro: data.hero_intro || "",
          about_intro: data.about_intro || "",
          about_description: data.about_description || "",
          about_email: data.about_email || "",
          about_location: data.about_location || "",
        });
      }
      setLoading(false);
    };
    fetchSettings();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const res = await fetch("/api/admin/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Settings saved successfully!");
    } else {
      const err = await res.json();
      alert("Error saving settings: " + (err.error || "Unknown error"));
    }
    setSaving(false);
  };

  if (loading) {
    return <div className="p-8 text-center text-slate-500">Loading settings...</div>;
  }

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Site Settings</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-lg font-bold text-slate-900">Hero Section</h2>
            <p className="text-sm text-slate-500 mt-1">Manage the content on your main landing area.</p>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Title (Name)</label>
              <input
                type="text"
                value={formData.hero_title}
                onChange={(e) => setFormData({ ...formData, hero_title: e.target.value })}
                placeholder="e.g. Rufat Azizzade"
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Headline</label>
              <input
                type="text"
                value={formData.hero_headline}
                onChange={(e) => setFormData({ ...formData, hero_headline: e.target.value })}
                placeholder="e.g. Software Engineering Student..."
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Introduction Text</label>
              <textarea
                rows={4}
                value={formData.hero_intro}
                onChange={(e) => setFormData({ ...formData, hero_intro: e.target.value })}
                placeholder="Motivated Software Engineering student..."
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              ></textarea>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-lg font-bold text-slate-900">About Me</h2>
            <p className="text-sm text-slate-500 mt-1">Manage your personal information and biography.</p>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Short Intro</label>
              <textarea
                rows={2}
                value={formData.about_intro}
                onChange={(e) => setFormData({ ...formData, about_intro: e.target.value })}
                placeholder="A dedicated developer with a passion..."
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Description</label>
              <textarea
                rows={6}
                value={formData.about_description}
                onChange={(e) => setFormData({ ...formData, about_description: e.target.value })}
                placeholder="Currently pursuing my BSc in Informatics..."
                className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Contact Email</label>
                <input
                  type="email"
                  value={formData.about_email}
                  onChange={(e) => setFormData({ ...formData, about_email: e.target.value })}
                  placeholder="hello@example.com"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
                <input
                  type="text"
                  value={formData.about_location}
                  onChange={(e) => setFormData({ ...formData, about_location: e.target.value })}
                  placeholder="Prague, Czechia"
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {saving ? "Saving..." : "Save Settings"}
          </button>
        </div>
      </form>
    </div>
  );
}
