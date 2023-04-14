-- truncate table cart cascade;

insert into cart (user_id, created_at, updated_at, status)
values ('1b72a111-9e8e-4b73-962a-e067df3d2b9d', '2023-01-01', '2023-01-01', 'ORDERED');

insert into cart (user_id, created_at, updated_at, status)
values ('1b72a111-9e8e-4b73-962a-e067df3d2b9d', '2023-01-03', '2023-01-04', 'OPEN');

insert into cart (user_id, created_at, updated_at, status)
values ('a6d8c9bd-d44e-4b39-be57-1582a8d86d5f', '2023-02-10', '2023-02-11', 'ORDERED');

insert into cart (user_id, created_at, updated_at, status)
values ('a6d8c9bd-d44e-4b39-be57-1582a8d86d5f', '2023-03-03', '2023-03-05', 'ORDERED');

insert into cart (user_id, created_at, updated_at, status)
values ('a6d8c9bd-d44e-4b39-be57-1582a8d86d5f', '2023-03-14', '2023-03-18', 'ORDERED');

insert into cart (user_id, created_at, updated_at, status)
values ('9f46880f-ba4f-4d47-b0da-0562af9f9bc6', '2023-03-23', '2023-03-29', 'OPEN');


-- CREATE SOME RANDOM cart_items

/*
-- You can use it like that
with random_cart_id (id) as (
	select id from cart
	order by random()
	limit 1
)
insert into cart_items (cart_id, product_id, count)
select id, uuid_generate_v4(), ceiling(random() * 100) from random_cart_id;
*/

-- Or like that create a View
create view random_cart_id_view as
	select id from cart
	order by random()
	limit 1;

-- And use it as much times as you need
insert into cart_items (cart_id, product_id, count)
select id, uuid_generate_v4(), ceiling(random() * 100) from random_cart_id_view;

insert into cart_items (cart_id, product_id, count)
select id, uuid_generate_v4(), ceiling(random() * 100) from random_cart_id_view;

insert into cart_items (cart_id, product_id, count)
select id, uuid_generate_v4(), ceiling(random() * 100) from random_cart_id_view;

insert into cart_items (cart_id, product_id, count)
select id, uuid_generate_v4(), ceiling(random() * 100) from random_cart_id_view;

insert into cart_items (cart_id, product_id, count)
select id, uuid_generate_v4(), ceiling(random() * 100) from random_cart_id_view;

insert into cart_items (cart_id, product_id, count)
select id, uuid_generate_v4(), ceiling(random() * 100) from random_cart_id_view;


