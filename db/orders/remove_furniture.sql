delete from order_item
where order_id = $1 and
product_id = $2 and
    quantity = $3;