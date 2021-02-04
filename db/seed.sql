create table blush_user(user_id serial primary key,
username varchar(20),
email varchar(100),
password varchar(250));

create table furniture(product_id serial primary key,
product_name varchar(50),
product_price integer,
image_url text,
product_description varchar(200));

create table design(design_id serial primary key,
design_description varchar(200),
image_url text);

create table orders(order_id serial primary key,
user_id int references blush_user(user_id),
order_total integer);	

create table order_item(order_item_id serial primary key, 
order_id int references orders(order_id),
product_id int references furniture(product_id),
quantity integer,
order_item_price integer);