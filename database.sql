DROP DATABASE IF EXISTS frame;
CREATE DATABASE IF NOT EXISTS frame;
USE frame;

CREATE TABLE `posts` (
  `post_id` varchar(255) PRIMARY KEY,
  `owner_id` varchar(255),
  `description` varchar(512),
  `created_at` timestamp DEFAULT now()
);

CREATE TABLE `posts_likes` (
  `post_id` varchar(255),
  `owner_id` varchar(255),
  `created_at` timestamp DEFAULT now()
);

CREATE TABLE `posts_comments` (
  `post_id` varchar(255),
  `description` varchar(1024),
  `owner_id` varchar(255),
  `created_at` timestamp DEFAULT now()
);

CREATE TABLE `posts_photos` (
  `post_id` varchar(255),
  `url` varchar(255),
  `type` varchar(32),
  `size` integer,
  `width` integer,
  `height` integer,
  `created_at` timestamp DEFAULT now()
);

CREATE TABLE `users` (
  `user_id` varchar(255) PRIMARY KEY,
  `email` varchar(128) UNIQUE NOT NULL,
  `name` varchar(255),
  `password` varchar(255),
  `resume` varchar(1024),
  `created_at` timestamp DEFAULT now()
);

ALTER TABLE `posts` ADD FOREIGN KEY (`owner_id`) REFERENCES `users` (`user_id`);

ALTER TABLE `posts_likes` ADD FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE;

ALTER TABLE `posts_likes` ADD FOREIGN KEY (`owner_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

ALTER TABLE `posts_comments` ADD FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE;

ALTER TABLE `posts_comments` ADD FOREIGN KEY (`owner_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;

ALTER TABLE `posts_photos` ADD FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE CASCADE;