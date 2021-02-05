update order_item set (quantity, price) = ($1, $2)
where order_item_id = $3;

