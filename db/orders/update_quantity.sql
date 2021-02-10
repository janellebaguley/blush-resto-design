update order_item set (quantity, price) = ($1, $2)
where order_item_id = $3 and product_id = $4;

