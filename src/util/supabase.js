import {createClient} from "@supabase/supabase-js";

const supabaseUrl="https://pqohiicmyjhyjgwqwuoo.supabase.co";
const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxb2hpaWNteWpoeWpnd3F3dW9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwODY1NDQsImV4cCI6MjA0NzY2MjU0NH0.Mkfv5kpbTgp3--Y7n-bRfZVaIeozxPp5i6yHdZGe8rI";

export const supabase=createClient(supabaseUrl,supabaseKey);
export function uploadSupabase(file) {
    if (!file) {
        console.log("File not selected");
        return;
    }

    // // Generate a unique name for the file using date, time, and a random string
    // const timestamp = new Date().toISOString().replace(/[:.-]/g, ""); // Format: YYYYMMDDTHHMMSS
    // const uniqueName = `${timestamp}-${file.name}`; // e.g., 20231121T123045-filename.jpg

    return supabase.storage.from("images").upload(file.name,file, {
        cacheControl: '3600',
        upsert: false
    })
}
