import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ehhqsnhttcqaempuqfxt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoaHFzbmh0dGNxYWVtcHVxZnh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc1ODIxNzEsImV4cCI6MTk2MzE1ODE3MX0.oGwUnbiuRt1hm4fhC6x8yGWxg3sG115rQwolVCKMKvQ"
);

export const fetchExperience = async () => {
  const experience = await supabase.from("experiences").select();
  if (experience.status === 200) {
    return experience.data;
  } else {
    return [];
  }
};

export const fetchWorks = async () => {
  const projects = await supabase.from("projects").select();
  if (projects.status === 200) {
    return projects.data;
  } else {
    return [];
  }
};

export const fetchSkills = async () => {
  const skills = await supabase.from("skills").select();
  if (skills.status === 200) {
    return skills.data;
  } else {
    return [];
  }
};
