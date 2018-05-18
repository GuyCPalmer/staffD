DROP DATABASE IF EXISTS  staffd_db;
CREATE DATABASE staffd_db;

USE staffd_db;


CREATE TABLE talent (
    talentId INT (10) AUTO_INCREMENT NOT NULL,
<<<<<<< HEAD
    talentName VARCHAR (45) NOT NULL,
    phone INTEGER(15) NOT NULL,
    email VARCHAR (50) NOT NULL,
    talentAddress TINYTEXT NOT NULL,
    socSec INTEGER(12) NOT NULL,
=======
    name VARCHAR (45) NOT NULL,
    phone INT NOT NULL,
    email VARCHAR (50) NOT NULL,
    address TINYTEXT NOT NULL,
    socSec INT NOT NULL,
>>>>>>> f9cf6b2a530d6456643ada6d5b3ecf3c02027ccc
    driverLic BOOLEAN,
    driverLicNum INT,
    tabc BOOLEAN,
    tabcNum INT,
    photo BLOB NOT NULL,
    otherFiles BLOB,
    type SET ('Bartender', 'Server', 'Promo Model', 'Security', 'Sales') NOT NULL,
    bio TEXT,
    rating INT,
    invitationsAvail VARCHAR(300),
    currentEvents VARCHAR(300),
    previousEvents VARCHAR(300),
    PRIMARY KEY(talentId)

);

CREATE TABLE event_owners (
    eventOwnerId INT (10) AUTO_INCREMENT NOT NULL,
    eventOwner VARCHAR (45) NOT NULL,
    phone INT NOT NULL,
    email VARCHAR (50) NOT NULL,
<<<<<<< HEAD
    ownerAddress TINYTEXT NOT NULL,
=======
    address TINYTEXT NOT NULL,
    photo BLOB NOT NULL,
>>>>>>> f9cf6b2a530d6456643ada6d5b3ecf3c02027ccc
    eventsOwned VARCHAR (300),
    invitationsSent VARCHAR (300),
    invConfirmed VARCHAR (300),
    PRIMARY KEY(eventOwnerId)
);

CREATE TABLE events (
    eventId INT (10) AUTO_INCREMENT NOT NULL,
    eventOwner VARCHAR (45) NOT NULL,
    eventDateTimeStart DATETIME,
    eventDateTimeEnd DATETIME,
    locationAddress TINYTEXT NOT NULL,
    locationSpecialInst MEDIUMTEXT,
    onsiteContact INT,
    staffd BOOLEAN,
    invitationsSent VARCHAR (300),
    invConfirmed VARCHAR (300),
    PRIMARY KEY(eventId)
);