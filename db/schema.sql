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
    tabcNum INT,
    photo VARCHAR NOT NULL,
    otherFiles VARCHAR,
    jobBar BOOLEAN NOT NULL,
    jobServer BOOLEAN NOT NULL,
    jobSales BOOLEAN NOT NULL,
    jobModel BOOLEAN NOT NULL,
    jobSecurity BOOLEAN NOT NULL,
    photo BLOB NOT NULL,
    otherFiles BLOB,
    jobBar BOOLEAN NOT NULL,
    jobServer BOOLEAN NOT NULL,
    jobSales BOOLEAN NOT NULL,
    jobModel BOOLEAN NOT NULL,
    jobSecurity BOOLEAN NOT NULL,
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
);