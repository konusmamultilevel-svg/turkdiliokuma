"use client";

import { useEffect } from "react";
import { supabase } from "./supabase";

export default function VisitTracker() {
  useEffect(() => {
    const registerVisit = async () => {
      try {
        let visitorId = localStorage.getItem("visitor_id");

        if (!visitorId) {
          visitorId = crypto.randomUUID();
          localStorage.setItem("visitor_id", visitorId);

          await supabase.from("site_visits").insert({
            visitor_id: visitorId,
          });
        }
      } catch (error) {
        console.error("Visit tracking error:", error);
      }
    };

    registerVisit();
  }, []);

  return null;
}