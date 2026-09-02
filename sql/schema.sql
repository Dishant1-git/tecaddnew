-- Run this once in MySQL Workbench to create the database and the single
-- table every form on the site writes into.

CREATE DATABASE IF NOT EXISTS techcadd_amritsar
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE techcadd_amritsar;

CREATE TABLE IF NOT EXISTS form_submissions (
  id         INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  -- which form on the site this row came from:
  -- enquiry_dialog | course_cta | contact_page | final_cta | after12_cta
  source     VARCHAR(50)  NOT NULL,
  name       VARCHAR(150) NULL,
  phone      VARCHAR(20)  NULL,
  email      VARCHAR(190) NULL,
  course     VARCHAR(190) NULL,
  subject    VARCHAR(190) NULL,
  message    TEXT         NULL,
  page_url   VARCHAR(255) NULL,
  created_at TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_source (source),
  INDEX idx_created_at (created_at)
);
