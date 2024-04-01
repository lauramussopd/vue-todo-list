const API_KEY =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxibXd5c21ya2d6bnN0YW9memV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE5NTc5OTgsImV4cCI6MjAyNzUzMzk5OH0.fvmE3V7vs4qyYSzZUzjfEzXh46Odp8rCoC7ofLdKxuQ'
const PROJECT_URL = 'https://lbmwysmrkgznstaofzeu.supabase.co'

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(PROJECT_URL, API_KEY)

