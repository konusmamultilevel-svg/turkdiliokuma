"use client";

import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export default function SiteStats() {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    let isMounted = true;

    // ==========================================
    // UMUMIY TASHRIFLAR SONINI OLISH
    // ==========================================
    const loadVisitorCount = async () => {
      try {
        const { count, error } = await supabase
          .from("site_visits")
          .select("*", {
            count: "exact",
            head: true,
          });

        if (error) {
          console.error(
            "VISITOR COUNT ERROR:",
            error
          );
          return;
        }

        if (isMounted) {
          setVisitors(count ?? 0);
        }
      } catch (error) {
        console.error(
          "VISITOR COUNT ERROR:",
          error
        );
      }
    };

    // ==========================================
    // HAR BIR KIRISHNI ALOHIDA TASHRIF SIFATIDA
    // SAQLASH
    // ==========================================
    const registerVisit = async () => {
      try {
        let visitorId =
          localStorage.getItem("turkdili_visitor_id");

        if (!visitorId) {
          visitorId = crypto.randomUUID();

          localStorage.setItem(
            "turkdili_visitor_id",
            visitorId
          );
        }

        const { error } = await supabase
          .from("site_visits")
          .insert({
            visitor_id: visitorId,
          });

        if (error) {
          console.error(
            "VISITOR INSERT ERROR:",
            error
          );
        }

        // Yangi sonni darhol olish
        await loadVisitorCount();
      } catch (error) {
        console.error(
          "VISITOR REGISTER ERROR:",
          error
        );
      }
    };

    // Birinchi kirishda tashrifni yozish
    registerVisit();

    // ==========================================
    // BOSHQA FOYDALANUVCHILAR KIRGANDA
    // SONNI YANGILAB TURISH
    // ==========================================
    const interval = setInterval(() => {
      loadVisitorCount();
    }, 5000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
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

        {/* SON */}
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
          {visitors.toLocaleString("tr-TR")}
        </span>

        {/* TURKCHA NOM */}
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