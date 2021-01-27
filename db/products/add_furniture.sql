insert into furniture(
product_name,
product_price,
image_url,
product_description)
values(
    ${product_name},
    ${product_price},
    ${image_url},
    ${product_description}
)
returning product_id, product_name, product_description, image_url;