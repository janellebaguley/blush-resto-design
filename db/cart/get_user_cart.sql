select * from oi.order_item_id, oi.order_id, oi.quantity, oi.product_id, oi.price, 
join furniture f on oi.product_id = f.product_id
join orders o on oi.order.id = o.order_id where o.user_id = $1
order by oi.order_item_id;