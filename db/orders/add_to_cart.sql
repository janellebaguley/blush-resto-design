insert into order_item(
    order_id,
    product_id,
    quantity,
    total
) values(
    $1,
    $2,
    $3,
    $4
);