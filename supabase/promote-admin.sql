-- First create the user in Supabase Dashboard:
-- Authentication > Users > Add user
-- Then replace the email below and run this query in SQL Editor.

insert into public.admin_users (user_id)
select id
from auth.users
where email = 'YOUR_ADMIN_EMAIL'
on conflict (user_id) do nothing;
