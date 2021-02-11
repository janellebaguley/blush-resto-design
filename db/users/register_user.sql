insert into blush_user(
    email, 
    password
) values(
    $1,
    $2
)
returning *;