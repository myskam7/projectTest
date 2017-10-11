USE watson_db;
INSERT INTO users (name) VALUES ('MAX');
INSERT INTO users (name) VALUES ('DION');
INSERT INTO users (name) VALUES ('JOSH');
INSERT INTO users (name) VALUES ('LARRYP');

INSERT INTO topics(name, user_id) VALUES('THE MOON', (Select id FROM users Where name = 'LARRYP'));