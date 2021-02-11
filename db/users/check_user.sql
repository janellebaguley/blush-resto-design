-- select * from blush_user
-- where email = ${email};

select * from blush_user bu
join orders o on bu.user_id = o.user_id where bu.email = $1;