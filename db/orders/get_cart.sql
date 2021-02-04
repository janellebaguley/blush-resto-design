SELECT order_item.id, user_id,  product_id, furniture.product_name, furniture.image_url, furniture.product_price, quantity FROM order_item
JOIN blush_users ON order_item.user_id = users.id
JOIN furniture ON order_item.product_id = products.id
WHERE user_id = $1;