"use client";

import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export default function SiteStats() {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    const loadStats = async () => {
      try {
        // =========================
        // ZİYARETÇİLER
        // =========================
        let visitorId = localStorage.getItem("turkdili_visitor_id");

        if (!visitorId) {
          visitorId = crypto.randomUUID();

          localStorage.setItem(
            "turkdili_visitor_id",
            visitorId
          );
        }

        const { error: visitInsertError } = await supabase
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

          setVisitors(uniqueVisitors.size);
        }
      } catch (error) {
        console.error(
          "STATISTICS ERROR:",
          error
        );
      }
    };

    loadStats();
  }, []);

  return (
    <div className="mt-6 flex justify-center px-4">
      <div
        className="
          inline-flex
          items-center
          rounded-full
          border
          bg-white
          px-4
          py-2
          shadow-[0_4px_18px_rgba(127,29,29,0.07)]
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:shadow-[0_7px_22px_rgba(127,29,29,0.11)]
        "
        style={{
          borderColor: "#F3D0D0",
        }}
      >
        {/* ICON */}
        <div
          className="
            mr-2
            flex
            h-7
            w-7
            shrink-0
            items-center
            justify-center
            rounded-full
            text-sm
          "
          style={{
            background:
              "linear-gradient(135deg, #FCE7E7 0%, #F8DADA 100%)",
          }}
        >
          👥
        </div>

        {/* NUMBER */}
        <span
          className="
            text-base
            font-extrabold
            leading-none
          "
          style={{
            color: "#7F1D1D",
          }}
        >
          {visitors.toLocaleString()}
        </span>

        {/* LABEL */}
        <span
          className="
            ml-1.5
            text-xs
            font-semibold
            leading-none
          "
          style={{
            color: "#9F6B6B",
          }}
        >
          Ziyaretçiler
        </span>
      </div>
    </div>
  );
}