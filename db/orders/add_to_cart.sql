insert into order_item(
    order_id,
    product_id, 
    quantity,
    order_total
) values(
    ${order_id2},
    ${product_id2},
    ${quantity2},
    ${order_total2}
);

select * from order_item;