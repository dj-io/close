ALTER TABLE user
ADD COLUMN profile_image_id VARCHAR(36);

ALTER TABLE user
ADD CONSTRAINT profile_image_id_unique
UNIQUE (profile_image_id);

ALTER TABLE post
ADD COLUMN post_image_id VARCHAR(36);

ALTER TABLE post
ADD CONSTRAINT post_image_id_unique
UNIQUE (post_image_id);