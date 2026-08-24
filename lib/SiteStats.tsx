"use client";

import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export default function SiteStats() {
  const [visitors, setVisitors] = useState(0);
  const [testUsers, setTestUsers] = useState(0);

  useEffect(() => {
    const visitorIdKey = "turkdili_visitor_id";

    let visitorId = localStorage.getItem(visitorIdKey);

    if (!visitorId) {
      visitorId = crypto.randomUUID();
      localStorage.setItem(visitorIdKey, visitorId);
    }

    const loadStats = async () => {
      try {
        // Ushbu tashrifchini bazaga qo'shamiz
        await supabase
          .from("site_visits")
          .upsert(
            {
              visitor_id: visitorId,
            },
            {
              onConflict: "visitor_id",
              ignoreDuplicates: true,
            }
          );

        // Tashrifchilar soni
        const { data: visits, error: visitsError } = await supabase
          .from("site_visits")
          .select("visitor_id");

        if (visitsError) throw visitsError;

        const uniqueVisitors = new Set(
          (visits || []).map((item) => item.visitor_id)
        );

        setVisitors(uniqueVisitors.size);

        // Test ishlaganlar
        const { data: attempts, error: attemptsError } = await supabase
          .from("test_attempts")
          .select("visitor_id");

        if (attemptsError) throw attemptsError;

        const uniqueTestUsers = new Set(
          (attempts || []).map((item) => item.visitor_id)
        );

        setTestUsers(uniqueTestUsers.size);
      } catch (error) {
        console.error("Statistics error:", error);
      }
    };

    loadStats();
  }, []);

  return (
    <div className="mt-7 flex justify-center gap-4">
      {/* TASHRIFCHILAR */}
      <div
        className="flex items-center gap-3 rounded-2xl border bg-white px-5 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        style={{ borderColor: "#F8DADA" }}
      >
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl text-lg"
          style={{ backgroundColor: "#F8DADA" }}
        >
          👥
        </div>

        <div className="text-left">
          <div
            className="text-xl font-black leading-none"
            style={{ color: "#7F1D1D" }}
          >
            {visitors.toLocaleString()}
          </div>

          <div className="mt-1 text-[11px] font-bold text-slate-400">
            Tashrifchilar
          </div>
        </div>
      </div>

      {/* TEST ISHLAGANLAR */}
      <div
        className="flex items-center gap-3 rounded-2xl border bg-white px-5 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        style={{ borderColor: "#F8DADA" }}
      >
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl text-lg"
          style={{ backgroundColor: "#F8DADA" }}
        >
          📖
        </div>

        <div className="text-left">
          <div
            className="text-xl font-black leading-none"
            style={{ color: "#7F1D1D" }}
          >
            {testUsers.toLocaleString()}
          </div>

          <div className="mt-1 text-[11px] font-bold text-slate-400">
            Test ishlaganlar
          </div>
        </div>
      </div>
    </div>
  );
}