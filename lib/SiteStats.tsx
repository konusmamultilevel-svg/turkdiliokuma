"use client";

import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export default function SiteStats() {
  const [visitors, setVisitors] = useState(0);
  const [testUsers, setTestUsers] = useState(0);

  useEffect(() => {
    const loadStats = async () => {
      try {
        // =========================
        // TASHRIFCHILAR
        // =========================
        let visitorId = localStorage.getItem(
          "turkdili_visitor_id"
        );

        if (!visitorId) {
          visitorId = crypto.randomUUID();

          localStorage.setItem(
            "turkdili_visitor_id",
            visitorId
          );
        }

        const { error: visitInsertError } =
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

        if (visitInsertError) {
          console.error(
            "VISITOR INSERT ERROR:",
            visitInsertError
          );
        }

        const {
          data: visits,
          error: visitsError,
        } = await supabase
          .from("site_visits")
          .select("visitor_id");

        if (visitsError) {
          console.error(
            "VISITOR SELECT ERROR:",
            visitsError
          );
        } else {
          const uniqueVisitors = new Set(
            (visits || []).map(
              (item) => item.visitor_id
            )
          );

          setVisitors(
            uniqueVisitors.size
          );
        }

        // =========================
        // TEST ISHLAGANLAR
        // =========================
        const {
          count,
          error: attemptsError,
        } = await supabase
          .from("test_attempts")
          .select("*", {
            count: "exact",
            head: true,
          });

        if (attemptsError) {
          console.error(
            "TEST USERS ERROR:",
            attemptsError
          );
        } else {
          console.log(
            "JAMI TEST URINISHLARI:",
            count
          );

          setTestUsers(count ?? 0);
        }
      } catch (error) {
        console.error(
          "STATISTICS ERROR:",
          error
        );
      }
    };

    loadStats();

    const handleTestCompleted = () => {
      loadStats();
    };

    window.addEventListener(
      "test-attempt-saved",
      handleTestCompleted
    );

    return () => {
      window.removeEventListener(
        "test-attempt-saved",
        handleTestCompleted
      );
    };
  }, []);

  return (
    <div className="mt-7 flex justify-center gap-4">

      {/* TASHRIFCHILAR */}
      <div
        className="flex items-center gap-3 rounded-2xl border bg-white px-5 py-3 shadow-sm"
        style={{
          borderColor: "#F8DADA",
        }}
      >
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl text-lg"
          style={{
            backgroundColor: "#F8DADA",
          }}
        >
          👥
        </div>

        <div className="text-left">
          <div
            className="text-xl font-black leading-none"
            style={{
              color: "#7F1D1D",
            }}
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
        className="flex items-center gap-3 rounded-2xl border bg-white px-5 py-3 shadow-sm"
        style={{
          borderColor: "#F8DADA",
        }}
      >
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl text-lg"
          style={{
            backgroundColor: "#F8DADA",
          }}
        >
          📖
        </div>

        <div className="text-left">
          <div
            className="text-xl font-black leading-none"
            style={{
              color: "#7F1D1D",
            }}
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