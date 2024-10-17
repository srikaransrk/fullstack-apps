CREATE TABLE if not exists reservation  (
    id BIGINT NOT NULL PRIMARY KEY,  -- Primary key on 'id'
    checkInDate DATE NOT NULL,
    checkOutDate DATE NOT NULL,
    guestName VARCHAR(100) NOT NULL,
    guestEmail VARCHAR(100) NOT NULL,
    roomNumber INT NOT NULL
);
