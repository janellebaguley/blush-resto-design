select * from blush_user u
join orders o on u.user_id = o.user_id
where u.email = $1;