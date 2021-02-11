select oi.order_item_id, oi.order_id, oi.quantity, oi.product_id, oi.price, o.user_id,  f.product_id, f.product_name, f.product_price from order_item oi
join furniture f on oi.product_id = f.product_id
join orders o on oi.order_id = o.order_id
where o.user_id = $1 order by o.order_id;