import {createClient} from "@supabase/supabase-js";

const supabaseUrl="https://pqohiicmyjhyjgwqwuoo.supabase.co";
const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxb2hpaWNteWpoeWpnd3F3dW9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwODY1NDQsImV4cCI6MjA0NzY2MjU0NH0.Mkfv5kpbTgp3--Y7n-bRfZVaIeozxPp5i6yHdZGe8rI";

const supabase=createClient(supabaseUrl,supabaseKey);
export function uploadSupabase(file){
    if (!file){
        console.log("file not selected");
        return;
    }
     supabase.storage.from("images").upload(file.name,file,{
        cacheControl:'3600',
        upsert:false
    });
}