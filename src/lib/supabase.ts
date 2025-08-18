import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fnpkxapvthkxmqpxcgzf.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZucGt4YXB2dGhreG1xcHhjZ3pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1MzU5MTYsImV4cCI6MjA1MDExMTkxNn0.wfOKtGqq3wG0YlQY0e9Fgwj7a2iQUZJYb1w5qCwDXYc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)