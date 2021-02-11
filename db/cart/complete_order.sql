update orders
set (paid, date) = (true, $3)
where order_id = $1;

insert into orders (
    user_id,
    paid
) values (
    $2,
    false
);