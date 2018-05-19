DROP DATABASE IF EXISTS  staffd_db;
CREATE DATABASE staffd_db;

USE staffd_db;


CREATE TABLE talent (
    talentId INT (10) AUTO_INCREMENT NOT NULL,
    talentName VARCHAR (45) NOT NULL,
    phone INTEGER(15) NOT NULL,
    email VARCHAR (50) NOT NULL,
    talentAddress TEXT NOT NULL,
    socSec INTEGER(12) NOT NULL,
    driverLic BOOLEAN,
    driverLicNum INT,
    tabc BOOLEAN,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e3ed2fd254c45b1449f104ffea8e5d9b896aa744
=======
>>>>>>> 26ffd8fd000f11c64b91e841ed70c78618e45dbb
    tabcNum INT,
<<<<<<< HEAD
    photo BLOB NOT NULL,
    otherFiles BLOB,
    type SET ('Bartender', 'Server', 'Promo Model', 'Security', 'Sales') NOT NULL,
<<<<<<< HEAD
<<<<<<< HEAD
=======
    tabcNum INTEGER(20),
    jobType SET('Bartender', 'Server', 'Promo Model', 'Security', 'Sales') NOT NULL,
>>>>>>> cce95fb11fb031c717b42a1e7ee2aaa48fc3e855
=======
>>>>>>> e3ed2fd254c45b1449f104ffea8e5d9b896aa744
=======
>>>>>>> 26ffd8fd000f11c64b91e841ed70c78618e45dbb
=======
    jobBar BOOLEAN,
    jobServer BOOLEAN,
    jobSales BOOLEAN,
    jobModel BOOLEAN,
    jobSecurity BOOLEAN,
>>>>>>> 6ab02a484dca2b80d5be7e2932b962d299b8ea63
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
    purchasingContact VARCHAR (45) NOT NULL,
    phone INT NOT NULL,
    email VARCHAR (50) NOT NULL,
    coordinator VARCHAR (45) NOT NULL,
    ownerAddress TEXT NOT NULL,
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
