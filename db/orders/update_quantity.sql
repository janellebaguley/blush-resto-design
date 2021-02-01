update order_item set quantity = $1
where order_item_id = $2;

select order_item_id, product_id, quantity, order_total
where order_item_id = $2;