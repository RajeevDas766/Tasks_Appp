import React, { useState } from "react";
import {
  Users,
  Lightbulb,
  GraduationCap,
  Sprout,
  Store,
  Hospital, 
  Activity,
} from "lucide-react";

function Section({ title, topics, cols, search }) {
  return (
    <section>
      <h2 style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "16px" }}>
        {title}
      </h2>

      {search && <div style={{ marginBottom: "16px" }}>{search}</div>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: "16px",
        }}
      >
        {topics.map((topic, i) => (
          <div key={i}>
            <div
              style={{
                background: "white",
                padding: "16px",
                borderRadius: "8px",
                boxShadow: "0 0 5px #ccc",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  background: "#ebf4ff",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "16px",
                  color: "#2563eb",
                }}
              >
                {topic.icon}
              </div>
              <h3 style={{ fontWeight: "600", marginBottom: "8px" }}>{topic.title}</h3>
              <p style={{ color: "#555" }}>{topic.description}</p>
            </div>

            {topic.members && (
              <div
                style={{
                  color: "#2563eb",
                  fontSize: "12px",
                  display: "flex",
                  gap: "8px",
                  marginTop: "4px",
                  paddingLeft: "8px",
                }}
              >
                {topic.members.map((m, idx) => (
                  <span key={idx}>{m}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function GoSocial() {
  const [searchTerm, setSearchTerm] = useState("");

  const topics = [
    {
      title: "Parenting Hacks",
      description: "Share tips.",
      icon: <Lightbulb />,
      members: ["1.1k joined", "860 joined"],
    },
    {
      title: "Study Groups",
      description: "Join study circles.",
      icon: <Users />,
    },
  ];

  const popularTopics = [
    {
      title: "Healthy Habits",
      description: "Wellness tips.",
      icon: <Hospital />, 
      members: ["1.2k joined", "980 joined"],
    },
    {
      title: "Academics",
      description: "Study strategies.",
      icon: <GraduationCap />,
    },
    {
      title: "Activities",
      description: "Fun ideas.",
      icon: <Activity />,  
    },
  ];

  const businessPages = [
    {
      title: "Tutoring Services",
      description: "Academic support.",
      icon: <Store />,
      members: ["2.3k joined", "1.7k joined"],
    },
    {
      title: "Workshops",
      description: "Join workshops.",
      icon: <GraduationCap />,
    },
    {
      title: "Wellness Providers",
      description: "Health experts.",
      icon: <Sprout />,
    },
  ];

  const filteredTopics = topics.filter(
    (t) =>
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const searchBox = (
    <div style={{ position: "relative" }}>
      <input
        type="text"
        placeholder="Search by topic or keyword"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search topics"
        style={{
          width: "100%",
          padding: "12px 40px 12px 12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: "absolute",
          right: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "20px",
          height: "20px",
          color: "#999",
          pointerEvents: "none",
        }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );

  return (
    <div
      style={{
        padding: "16px",
        gap: "32px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Section title="My Topics" topics={filteredTopics} cols={2} search={searchBox} />
      <Section title="Popular Topics" topics={popularTopics} cols={3} />
      <Section title="Business Pages" topics={businessPages} cols={3} />
    </div>
  );
}
