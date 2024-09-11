import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nayrbxedulycimdlbzgg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5heXJieGVkdWx5Y2ltZGxiemdnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5OTMyNTIsImV4cCI6MjA0MTU2OTI1Mn0.0PXfMVfUPnd-h0Y2-VRY2B701kAaNXKh5YN5ClanlVs';

export const supabase = createClient(supabaseUrl, supabaseKey);
