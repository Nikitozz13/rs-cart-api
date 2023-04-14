create extension if not exists "uuid-ossp";

create table carts (
	id uuid not null default uuid_generate_v4() primary key,
	user_id uuid references users(id),
	created_at date not null,
	updated_at date not null,
	status status_type
);

create type status_type as enum ('OPEN', 'ORDERED');

create table cart_items (
	cart_id uuid references carts(id),
	product_id uuid,
	count integer
);

create table orders (
	id uuid not null default uuid_generate_v4() primary key,
	user_id uuid references users(id),
	cart_id uuid references carts(id),
	payment json,
	delivery json,
	comments text,
	status status_type,
	total integer
);

create table users (
	id uuid not null default uuid_generate_v4() primary key,
	name text not null,
  email text not null,
  password text not null
);