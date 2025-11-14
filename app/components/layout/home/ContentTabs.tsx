'use client';
import { useState } from "react";
import Tabs from "@/app/components/layout/home/contentTabs/Tabs";
import CoursesTab from "@/app/components/layout/home/contentTabs/CoursesTab";

export default function ContentTabs() {

  const [activeTab, setActiveTab] = useState('Courses');

  return (
    <section className="px-48 py-8 section">
      <header className="section-header">
        <h2>Everything You Need for API Security</h2>
        <h3>Learn. Certify. Secure.</h3>
      </header>
      <Tabs />
      {activeTab === 'Courses' && <CoursesTab />}
    </section>
  )

}