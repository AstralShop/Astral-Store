import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = "https://crlqxvqnjevgtgcchbsz.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNybHF4dnFuamV2Z3RnY2NoYnN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg1NzMyMDgsImV4cCI6MjEwNDE0OTIwOH0.-o2u0qWsTlig8bHwBiPn0P-iOa3vKFlBs_TkUtCM81k";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
window.supabase = supabase;
