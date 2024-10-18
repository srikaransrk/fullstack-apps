CREATE TABLE if not exists product  (
    id BIGINT NOT NULL PRIMARY KEY,  -- Primary key on 'id'
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2),
    image_url VARCHAR(100)
);

CREATE TABLE if not exists cart  (
    id BIGINT NOT NULL PRIMARY KEY,  -- Primary key on 'id'
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2)
);
