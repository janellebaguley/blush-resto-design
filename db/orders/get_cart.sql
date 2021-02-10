select * from oi.order_item_id, oi.order_id, oi.quantity, oi.product_id, oi.price, 
join furniture f on oi.product_id = f.product_id
join orders o on oi.order.id = o.order_id where o.user_id = $1
order by oi.order_item_id;

-- SELECT order_item.id, user_id,  product_id, furniture.product_name, furniture.image_url, furniture.product_price, quantity FROM order_item
-- JOIN blush_users ON order_item.user_id = users.id
-- JOIN furniture ON order_item.product_id = products.id
-- WHERE user_id = $1;