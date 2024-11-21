import {createClient} from "@supabase/supabase-js";

const supabaseUrl=import.meta.env.SUPABASE_URL;
const supabaseKey=import.meta.env.SUPABASE_KEY;

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