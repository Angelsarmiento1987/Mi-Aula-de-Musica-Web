

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://pclzogsueqkvxnflocix.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjbHpvZ3N1ZXFrdnhuZmxvY2l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwNDgxMTksImV4cCI6MjA1NjYyNDExOX0.giYf_sy2LMkwu2uHeSZxsQ3pjvJFHMU2l4sJfE5FCyo';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
