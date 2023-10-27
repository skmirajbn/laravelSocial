-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 27, 2023 at 09:18 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `skmiraj_laravel_social_media`
--

-- --------------------------------------------------------

--
-- Table structure for table `abouts`
--

CREATE TABLE `abouts` (
  `user_id` int(11) NOT NULL,
  `about_bio` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `abouts`
--

INSERT INTO `abouts` (`user_id`, `about_bio`, `created_at`, `updated_at`) VALUES
(1, 'This is my Bio', '2023-10-19 09:02:11', '2023-10-26 09:43:36'),
(2, 'My Name is Khaleda', '2023-10-18 23:02:48', '2023-10-18 23:02:48'),
(3, 'My name is Alamin', '2023-10-18 23:06:49', '2023-10-18 23:06:49');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `comment_text` varchar(255) NOT NULL,
  `post_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comment_id`, `user_id`, `comment_text`, `post_id`, `created_at`, `updated_at`) VALUES
(1, 1, 'iuoi', 9, '2023-10-19 09:02:52', '2023-10-19 09:02:52'),
(2, 1, 'Nice', 3, '2023-10-26 22:35:51', '2023-10-26 22:35:51'),
(3, 1, 'nice photo sis', 6, '2023-10-27 12:14:16', '2023-10-27 12:14:16');

-- --------------------------------------------------------

--
-- Table structure for table `comment_likes`
--

CREATE TABLE `comment_likes` (
  `comment_like_id` bigint(20) UNSIGNED NOT NULL,
  `comment_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `conversations`
--

CREATE TABLE `conversations` (
  `conversation_id` bigint(20) UNSIGNED NOT NULL,
  `conversation_title` varchar(255) NOT NULL,
  `conversation_image` varchar(255) DEFAULT NULL,
  `conversation_type` varchar(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `conversations`
--

INSERT INTO `conversations` (`conversation_id`, `conversation_title`, `conversation_image`, `conversation_type`, `created_at`, `updated_at`) VALUES
(26, '', '', 'individual', '2023-10-25 11:46:54', '2023-10-25 11:46:54'),
(27, '', '', 'individual', '2023-10-25 11:47:06', '2023-10-25 11:47:06'),
(28, 'Our Group', 'storage/groupImages/d985b40b-4cf9-480a-8cd1-0ee0b6b5f234.jpg', 'group', '2023-10-25 11:50:58', '2023-10-25 11:50:58'),
(29, 'Family Group', 'storage/groupImages/dd802869-7fe1-4926-b74e-456ad96b7dc1.jpg', 'group', '2023-10-26 04:09:30', '2023-10-26 04:09:30'),
(30, 'Test Group', '', 'group', '2023-10-26 05:05:37', '2023-10-26 05:05:37'),
(31, 'Another Conversation', 'storage/groupImages/b2f45010-c910-4675-9b86-e255e89aa9d1.jpg', 'group', '2023-10-26 05:19:10', '2023-10-26 05:19:10'),
(32, 'Next Conversation', 'storage/groupImages/3f31aa63-06b4-45eb-b7c9-6799ccf361a3.jpg', 'group', '2023-10-26 05:26:36', '2023-10-26 05:26:36'),
(33, 'Project Group', 'storage/groupImages/07c8ac49-7edf-4341-b8a6-25f292954b71.jpg', 'group', '2023-10-26 09:13:10', '2023-10-26 09:13:10'),
(34, 'Study Group', 'storage/groupImages/30a372e4-972e-4171-87e6-58d752cf5865.jpg', 'group', '2023-10-26 09:16:47', '2023-10-26 09:16:47'),
(35, 'Time Square Group', 'storage/groupImages/a2017c5b-254c-4134-969b-cf72a86210d9.jpg', 'group', '2023-10-26 09:22:32', '2023-10-26 09:22:32'),
(36, 'Ludu Group', '', 'group', '2023-10-26 09:39:24', '2023-10-26 09:39:24'),
(37, 'New Group', 'storage/groupImages/99ff7331-db70-44f1-88c6-492820b19118.jpg', 'group', '2023-10-26 09:49:01', '2023-10-26 09:49:01');

-- --------------------------------------------------------

--
-- Table structure for table `conversation_users`
--

CREATE TABLE `conversation_users` (
  `conversation_user_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `conversation_id` int(11) NOT NULL,
  `conversation_user_role` varchar(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `conversation_users`
--

INSERT INTO `conversation_users` (`conversation_user_id`, `user_id`, `conversation_id`, `conversation_user_role`, `created_at`, `updated_at`) VALUES
(45, 1, 26, 'creator', '2023-10-25 11:46:54', '2023-10-25 11:46:54'),
(46, 2, 26, 'participant', '2023-10-25 11:46:54', '2023-10-25 11:46:54'),
(47, 1, 27, 'creator', '2023-10-25 11:47:06', '2023-10-25 11:47:06'),
(48, 6, 27, 'participant', '2023-10-25 11:47:06', '2023-10-25 11:47:06'),
(49, 2, 28, 'participant', '2023-10-25 11:50:58', '2023-10-25 11:50:58'),
(50, 6, 28, 'participant', '2023-10-25 11:50:58', '2023-10-25 11:50:58'),
(51, 4, 28, 'participant', '2023-10-25 11:50:58', '2023-10-25 11:50:58'),
(52, 1, 28, 'creator', '2023-10-25 11:50:58', '2023-10-25 11:50:58'),
(53, 2, 29, 'participant', '2023-10-26 04:09:30', '2023-10-26 04:09:30'),
(54, 6, 29, 'participant', '2023-10-26 04:09:30', '2023-10-26 04:09:30'),
(55, 1, 29, 'creator', '2023-10-26 04:09:30', '2023-10-26 04:09:30'),
(56, 6, 30, 'participant', '2023-10-26 05:05:37', '2023-10-26 05:05:37'),
(57, 4, 30, 'participant', '2023-10-26 05:05:37', '2023-10-26 05:05:37'),
(58, 1, 30, 'creator', '2023-10-26 05:05:37', '2023-10-26 05:05:37'),
(59, 2, 31, 'participant', '2023-10-26 05:19:10', '2023-10-26 05:19:10'),
(60, 4, 31, 'participant', '2023-10-26 05:19:10', '2023-10-26 05:19:10'),
(61, 1, 31, 'creator', '2023-10-26 05:19:10', '2023-10-26 05:19:10'),
(62, 2, 32, 'participant', '2023-10-26 05:26:36', '2023-10-26 05:26:36'),
(63, 4, 32, 'participant', '2023-10-26 05:26:36', '2023-10-26 05:26:36'),
(64, 1, 32, 'creator', '2023-10-26 05:26:36', '2023-10-26 05:26:36'),
(65, 4, 33, 'participant', '2023-10-26 09:13:10', '2023-10-26 09:13:10'),
(66, 6, 33, 'participant', '2023-10-26 09:13:10', '2023-10-26 09:13:10'),
(67, 1, 33, 'creator', '2023-10-26 09:13:10', '2023-10-26 09:13:10'),
(68, 4, 34, 'participant', '2023-10-26 09:16:47', '2023-10-26 09:16:47'),
(69, 6, 34, 'participant', '2023-10-26 09:16:47', '2023-10-26 09:16:47'),
(70, 1, 34, 'creator', '2023-10-26 09:16:47', '2023-10-26 09:16:47'),
(71, 6, 35, 'participant', '2023-10-26 09:22:32', '2023-10-26 09:22:32'),
(72, 4, 35, 'participant', '2023-10-26 09:22:32', '2023-10-26 09:22:32'),
(73, 1, 35, 'creator', '2023-10-26 09:22:32', '2023-10-26 09:22:32'),
(74, 6, 36, 'participant', '2023-10-26 09:39:24', '2023-10-26 09:39:24'),
(75, 2, 36, 'participant', '2023-10-26 09:39:24', '2023-10-26 09:39:24'),
(76, 1, 36, 'creator', '2023-10-26 09:39:24', '2023-10-26 09:39:24'),
(77, 2, 37, 'participant', '2023-10-26 09:49:01', '2023-10-26 09:49:01'),
(78, 6, 37, 'participant', '2023-10-26 09:49:01', '2023-10-26 09:49:01'),
(79, 1, 37, 'creator', '2023-10-26 09:49:01', '2023-10-26 09:49:01');

-- --------------------------------------------------------

--
-- Table structure for table `cover_images`
--

CREATE TABLE `cover_images` (
  `cover_image_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cover_images`
--

INSERT INTO `cover_images` (`cover_image_id`, `user_id`, `image_path`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'storage/profileImages/c94cb12b-db79-45b6-af1d-efb79df669f1.jpg', 0, '2023-10-18 22:58:48', '2023-10-27 12:31:54'),
(2, 2, 'storage/profileImages/b9781086-bb4b-4e32-bc6d-0bde9eb077f9.jpg', 1, '2023-10-18 23:02:38', '2023-10-18 23:02:38'),
(3, 3, 'storage/profileImages/5cf76756-5db2-4d9e-8038-036dbfd2c029.jpg', 1, '2023-10-18 23:06:40', '2023-10-18 23:06:40'),
(4, 4, 'storage/profileImages/4d53f064-482c-493f-bca2-a7dabb609b39.jpg', 1, '2023-10-19 00:28:00', '2023-10-19 00:28:00'),
(5, 5, 'storage/profileImages/776249cc-97e8-4722-8148-d5ea95a9211d.jpg', 1, '2023-10-19 00:33:39', '2023-10-19 00:33:39'),
(6, 1, 'storage/profileImages/751e39f7-98f3-4b5e-926f-962cf7c27327.jpg', 1, '2023-10-27 12:31:55', '2023-10-27 12:31:55');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `friends`
--

CREATE TABLE `friends` (
  `friend_id` bigint(20) UNSIGNED NOT NULL,
  `self_user_id` int(11) NOT NULL,
  `from_user_id` int(11) NOT NULL,
  `friend_request_status` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `friend_requests`
--

CREATE TABLE `friend_requests` (
  `friend_request_id` bigint(20) UNSIGNED NOT NULL,
  `to_user_id` int(11) NOT NULL,
  `from_user_id` int(11) NOT NULL,
  `friend_request_status` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `friend_requests`
--

INSERT INTO `friend_requests` (`friend_request_id`, `to_user_id`, `from_user_id`, `friend_request_status`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 1, '2023-10-18 23:04:36', '2023-10-18 23:05:03'),
(2, 1, 4, 1, '2023-10-19 00:31:55', '2023-10-19 09:00:39'),
(3, 3, 1, 0, '2023-10-21 04:38:35', '2023-10-21 04:38:35'),
(4, 7, 1, 0, '2023-10-21 06:00:55', '2023-10-21 06:00:55'),
(5, 6, 1, 1, '2023-10-21 06:00:56', '2023-10-21 09:47:25'),
(6, 5, 1, 0, '2023-10-21 06:00:57', '2023-10-21 06:00:57');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `image_id` bigint(20) UNSIGNED NOT NULL,
  `post_id` int(11) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`image_id`, `post_id`, `image_path`, `created_at`, `updated_at`) VALUES
(1, 1, 'storage/images/a5822e1f-ef41-456a-b363-5d563d72379c.jpg', '2023-10-18 22:59:20', '2023-10-18 22:59:20'),
(2, 1, 'storage/images/68d755a4-183b-4bcf-87ad-c9ee7dd2b73a.jpg', '2023-10-18 22:59:21', '2023-10-18 22:59:21'),
(3, 1, 'storage/images/b1013335-b833-49ef-8781-63cbfca15880.jpg', '2023-10-18 22:59:23', '2023-10-18 22:59:23'),
(4, 1, 'storage/images/a355f717-91ff-49af-832e-eefe659b298f.jpg', '2023-10-18 22:59:24', '2023-10-18 22:59:24'),
(5, 2, 'storage/images/f423f38b-2db3-4a30-940a-efa4d77d55e7.jpg', '2023-10-18 22:59:50', '2023-10-18 22:59:50'),
(6, 2, 'storage/images/69749d62-4584-488f-91e3-ba4e1d659a2d.jpg', '2023-10-18 22:59:51', '2023-10-18 22:59:51'),
(7, 2, 'storage/images/ae3eb7bc-59e0-474c-ad69-6aa9a8c1b10d.jpg', '2023-10-18 22:59:53', '2023-10-18 22:59:53'),
(8, 3, 'storage/images/c479dc93-7c9e-470a-b0fd-9df00952f84c.jpg', '2023-10-18 23:00:29', '2023-10-18 23:00:29'),
(9, 3, 'storage/images/ec372ed0-fd32-4513-9e9b-fdcb56a057fa.jpg', '2023-10-18 23:00:31', '2023-10-18 23:00:31'),
(10, 4, 'storage/images/be745ae5-51c7-48fa-b974-6adead115ad1.jpg', '2023-10-18 23:03:16', '2023-10-18 23:03:16'),
(11, 4, 'storage/images/d120aa94-c682-45a7-89b0-6beddb9344b8.jpg', '2023-10-18 23:03:17', '2023-10-18 23:03:17'),
(12, 4, 'storage/images/2b69f8b2-7277-4e54-9369-bfb809655d84.jpg', '2023-10-18 23:03:18', '2023-10-18 23:03:18'),
(13, 5, 'storage/images/b3121d16-6a5d-498c-91a3-4ed583fcdb6a.jpg', '2023-10-18 23:03:46', '2023-10-18 23:03:46'),
(14, 5, 'storage/images/4ee93954-f090-49ec-9fbc-83479c101668.jpg', '2023-10-18 23:03:48', '2023-10-18 23:03:48'),
(15, 5, 'storage/images/06be0f00-f3c6-41d0-a45b-cfca923675c9.jpg', '2023-10-18 23:03:49', '2023-10-18 23:03:49'),
(16, 6, 'storage/images/5a629980-7dc2-4d16-8b47-f80c50650d07.jpg', '2023-10-18 23:04:16', '2023-10-18 23:04:16'),
(17, 6, 'storage/images/152c33bf-2f46-476e-bd0d-f7bb5ff6cf6f.jpg', '2023-10-18 23:04:18', '2023-10-18 23:04:18'),
(18, 6, 'storage/images/d7159c7e-06a6-43b4-9648-84860ec760a3.jpg', '2023-10-18 23:04:19', '2023-10-18 23:04:19'),
(19, 6, 'storage/images/29194d61-d0b3-4193-a751-bef5786b69fa.jpg', '2023-10-18 23:04:21', '2023-10-18 23:04:21'),
(20, 7, 'storage/images/64c5ea9c-60ca-449f-93d1-a0f34d6000af.jpg', '2023-10-18 23:07:18', '2023-10-18 23:07:18'),
(21, 8, 'storage/images/fe03d1a8-7996-4609-877d-8e5124eb383c.jpg', '2023-10-18 23:07:40', '2023-10-18 23:07:40'),
(22, 8, 'storage/images/0f0d638a-c1df-4d84-abf9-4864e3352148.jpg', '2023-10-18 23:07:41', '2023-10-18 23:07:41'),
(23, 8, 'storage/images/05373624-49a1-434c-bd00-7cd69193f320.jpg', '2023-10-18 23:07:43', '2023-10-18 23:07:43'),
(24, 9, 'storage/images/87bd75f3-3dc2-456a-86dc-200565f5fd34.jpg', '2023-10-19 00:28:45', '2023-10-19 00:28:45'),
(25, 9, 'storage/images/93c42490-4af8-4ac0-a781-8fcb61c7d89f.jpg', '2023-10-19 00:28:46', '2023-10-19 00:28:46'),
(26, 9, 'storage/images/3146faae-f6f9-467f-8f22-b5e625f679f7.jpg', '2023-10-19 00:28:47', '2023-10-19 00:28:47'),
(27, 9, 'storage/images/1b898c8e-b43a-40e1-8cec-04bdaa2e9577.jpg', '2023-10-19 00:28:49', '2023-10-19 00:28:49'),
(28, 10, 'storage/images/08be8249-94e0-41f8-bf0e-4ea20a4a6631.jpg', '2023-10-19 00:29:34', '2023-10-19 00:29:34'),
(29, 10, 'storage/images/f2f9d1e8-8348-45e4-8c98-39487dfaafdf.jpg', '2023-10-19 00:29:35', '2023-10-19 00:29:35'),
(30, 10, 'storage/images/86bf2fec-7429-4ec9-845d-af6f71fa17d1.jpg', '2023-10-19 00:29:36', '2023-10-19 00:29:36'),
(31, 11, 'storage/images/f0e5d293-086f-43a8-b8ee-f92ecfc41325.jpg', '2023-10-19 00:34:12', '2023-10-19 00:34:12'),
(32, 11, 'storage/images/13416bd5-5c5e-41f6-a1c8-159a397e707e.jpg', '2023-10-19 00:34:13', '2023-10-19 00:34:13'),
(33, 11, 'storage/images/fe193d62-6a33-4103-879c-e27b6d9a2344.jpg', '2023-10-19 00:34:14', '2023-10-19 00:34:14'),
(34, 11, 'storage/images/92dfd8cc-0d61-4f6a-871e-d8ac3a21172d.jpg', '2023-10-19 00:34:15', '2023-10-19 00:34:15'),
(35, 11, 'storage/images/08b4afec-7ba2-4c96-8478-088f742a3659.jpg', '2023-10-19 00:34:16', '2023-10-19 00:34:16'),
(36, 12, 'storage/images/a982661b-380d-425f-8cc0-8b6a1d728c4c.jpg', '2023-10-19 00:34:55', '2023-10-19 00:34:55'),
(37, 12, 'storage/images/80c8d1de-1780-4d0e-99d2-e06fb59a0dab.jpg', '2023-10-19 00:34:57', '2023-10-19 00:34:57'),
(38, 12, 'storage/images/c082bf59-c728-425b-8b0d-ff38a678ff06.jpg', '2023-10-19 00:34:59', '2023-10-19 00:34:59'),
(39, 12, 'storage/images/4801f45b-1486-4899-a513-0624bc6a9e0c.jpg', '2023-10-19 00:35:00', '2023-10-19 00:35:00');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `message_id` bigint(20) UNSIGNED NOT NULL,
  `message_text` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  `conversation_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`message_id`, `message_text`, `user_id`, `conversation_id`, `created_at`, `updated_at`) VALUES
(12, 'Apu valo asen?', 1, 26, '2023-10-25 11:47:00', '2023-10-25 11:47:00'),
(13, 'vai kemon asen?', 1, 27, '2023-10-25 11:47:10', '2023-10-25 11:47:10'),
(14, 'jkl', 1, 28, '2023-10-26 02:47:10', '2023-10-26 02:47:10'),
(15, 'amio valo asi', 1, 26, '2023-10-26 04:06:16', '2023-10-26 04:06:16'),
(16, 'This is a great group bro.', 2, 28, '2023-10-26 04:07:14', '2023-10-26 04:07:14'),
(17, 'Check on group ami apnake message disi miraj vai', 2, 26, '2023-10-26 04:07:35', '2023-10-26 04:07:35'),
(18, 'Here I messaged', 2, 28, '2023-10-26 04:07:45', '2023-10-26 04:07:45'),
(19, 'valo asi', 6, 27, '2023-10-26 04:08:10', '2023-10-26 04:08:10'),
(20, 'group e message dicci', 6, 27, '2023-10-26 04:08:14', '2023-10-26 04:08:14'),
(21, 'Group e sobai message dicci', 6, 28, '2023-10-26 04:08:23', '2023-10-26 04:08:23'),
(22, 'Nice everyone', 1, 28, '2023-10-26 04:08:57', '2023-10-26 04:08:57'),
(23, 'Hello everyone', 1, 29, '2023-10-26 04:09:48', '2023-10-26 04:09:48'),
(24, 'Hello', 6, 29, '2023-10-26 04:10:19', '2023-10-26 04:10:19'),
(25, 'Hello', 1, 30, '2023-10-26 05:14:16', '2023-10-26 05:14:16'),
(26, 'Akabaka chiku', 1, 30, '2023-10-26 05:15:22', '2023-10-26 05:15:22'),
(27, 'Very nice', 1, 32, '2023-10-26 05:26:51', '2023-10-26 05:26:51'),
(28, 'Very Nice Group', 1, 33, '2023-10-26 09:13:26', '2023-10-26 09:13:26'),
(29, 'Very Good', 1, 34, '2023-10-26 09:21:57', '2023-10-26 09:21:57'),
(30, 'Hello dear', 1, 36, '2023-10-26 09:42:50', '2023-10-26 09:42:50'),
(31, 'Hello everyone', 1, 35, '2023-10-26 09:46:04', '2023-10-26 09:46:04'),
(32, 'Apu kemon asen?', 1, 26, '2023-10-26 09:47:13', '2023-10-26 09:47:13');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(65, '0000_00_00_000000_create_websockets_statistics_entries_table', 1),
(66, '2014_10_12_000000_create_users_table', 1),
(67, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(68, '2019_08_19_000000_create_failed_jobs_table', 1),
(69, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(70, '2023_10_09_092852_modify_users_table_add_and_modify_colum_name', 1),
(71, '2023_10_10_055009_create_posts_table', 1),
(72, '2023_10_10_060236_create_comments_table', 1),
(73, '2023_10_10_133612_create_conversation_table', 1),
(74, '2023_10_10_133658_create_roles_table', 1),
(75, '2023_10_10_145908_create_coversation_users_table', 1),
(76, '2023_10_10_150056_create_notifications_table', 1),
(77, '2023_10_10_150140_create_friends_table', 1),
(78, '2023_10_10_150206_create_comment_likes_table', 1),
(79, '2023_10_10_150224_create_post_like_types_table', 1),
(80, '2023_10_10_150454_create_post_likes_table', 1),
(81, '2023_10_10_150524_create_messages_table', 1),
(82, '2023_10_10_150549_create_friend_requests_table', 1),
(83, '2023_10_10_150638_create_abouts_table', 1),
(84, '2023_10_11_193031_create_images_table', 1),
(85, '2023_10_14_140336_create_profile_images_table', 1),
(86, '2023_10_14_140528_create_cover_images_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `notification_id` bigint(20) UNSIGNED NOT NULL,
  `notification_type` varchar(50) NOT NULL,
  `notification_message` varchar(50) NOT NULL,
  `notification_link` varchar(50) NOT NULL,
  `user_id` int(11) NOT NULL,
  `notification_status` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `post_id` bigint(20) UNSIGNED NOT NULL,
  `post_code` varchar(255) NOT NULL,
  `post_title` varchar(255) NOT NULL,
  `post_body` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`post_id`, `post_code`, `post_title`, `post_body`, `user_id`, `created_at`, `updated_at`) VALUES
(1, '44d8d9c0-ab0d-4856-a43c-b9d2b61fc21e', 'Nice day.', 'My Nice day', 1, '2023-10-18 22:59:19', '2023-10-18 22:59:19'),
(2, 'e8ce0f8b-9544-4b4b-983c-9c4c15e635b8', 'Another Funny day', 'Fun', 1, '2023-10-18 22:59:49', '2023-10-18 22:59:49'),
(3, '26a20b09-6269-4de4-8c35-268fa148517f', 'Enjoying Moment', 'Nice day', 1, '2023-10-18 23:00:27', '2023-10-18 23:00:27'),
(4, 'f2fe2954-0819-4ea6-b089-5ca370bea228', 'Enjoying The moment', 'Have fun!', 2, '2023-10-18 23:03:15', '2023-10-18 23:03:15'),
(5, 'eaf49da8-9c30-4ede-9ae4-612c3170e802', 'Perfect Day', 'fun', 2, '2023-10-18 23:03:44', '2023-10-18 23:03:44'),
(6, 'c08b5ad9-73b5-47d4-b442-cf67d18de8fc', 'Stressful sunday', 'stress', 2, '2023-10-18 23:04:15', '2023-10-18 23:04:15'),
(7, 'e2eb0f37-4133-4669-ad1a-bf573d5c32ad', 'Great Weekend of mine', 'niceday', 3, '2023-10-18 23:07:18', '2023-10-18 23:07:18'),
(8, '68484e65-d645-4b24-af02-5ed7a51ecbf2', 'Along me', 'fineday', 3, '2023-10-18 23:07:38', '2023-10-18 23:07:38'),
(9, '28fc5b84-99ec-4dbe-9fcb-09796df9fb3d', 'I am Shomrat Jahangir', 'Jahangir', 4, '2023-10-19 00:28:44', '2023-10-19 00:28:44'),
(10, '02e07e40-f474-4bbf-a456-3953c75703a8', 'Outing with passion', 'passion', 4, '2023-10-19 00:29:32', '2023-10-19 00:29:32'),
(11, 'b908ae3a-0efb-4e22-901f-c8381d8a9f80', 'Sajek Tour', 'with Friends', 5, '2023-10-19 00:34:12', '2023-10-19 00:34:12'),
(12, 'd8645075-17ad-4977-b735-67afaa1db2f9', 'Summar Day', 'Things to be changed.', 5, '2023-10-19 00:34:54', '2023-10-19 00:34:54');

-- --------------------------------------------------------

--
-- Table structure for table `post_likes`
--

CREATE TABLE `post_likes` (
  `post_like_id` bigint(20) UNSIGNED NOT NULL,
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `post_like_type_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `post_like_types`
--

CREATE TABLE `post_like_types` (
  `post_like_type_id` bigint(20) UNSIGNED NOT NULL,
  `post_like_type_name` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `profile_images`
--

CREATE TABLE `profile_images` (
  `profile_image_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `image_path` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `profile_images`
--

INSERT INTO `profile_images` (`profile_image_id`, `user_id`, `image_path`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'storage/profileImages/789a7b08-024b-4f52-aa25-644065cdc216.jpg', 0, '2023-10-18 22:58:36', '2023-10-26 22:47:17'),
(2, 2, 'storage/profileImages/ed0b2756-803c-4746-8018-41f7091f3d18.jpg', 1, '2023-10-18 23:02:21', '2023-10-18 23:02:21'),
(3, 3, 'storage/profileImages/adc865a3-f0f8-4714-a0b8-ca1cc419da8c.jpg', 1, '2023-10-18 23:06:34', '2023-10-18 23:06:34'),
(4, 4, 'storage/profileImages/78f7f25a-7eeb-4166-bbbb-8ffc9d3a25b2.jpg', 1, '2023-10-19 00:27:50', '2023-10-19 00:27:50'),
(5, 5, 'storage/profileImages/449d9867-b289-4402-8f09-68969cc2eed6.jpg', 1, '2023-10-19 00:33:30', '2023-10-19 00:33:30'),
(6, 6, 'storage/profileImages/105f96bd-60f6-4374-954c-8308ea75f92f.jpg', 1, '2023-10-19 00:36:37', '2023-10-19 00:36:37'),
(7, 7, 'storage/profileImages/0d4a9a12-9abd-4e66-8868-c0b4caa12236.jpg', 1, '2023-10-19 00:37:44', '2023-10-19 00:37:44'),
(8, 1, 'storage/profileImages/0ab4e252-64bf-4ec6-903c-991fd65640b4.jpg', 1, '2023-10-26 22:47:17', '2023-10-26 22:47:17');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `role_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) NOT NULL,
  `user_first_name` varchar(255) NOT NULL,
  `user_last_name` varchar(255) NOT NULL,
  `user_username` varchar(255) NOT NULL,
  `user_phone` varchar(255) NOT NULL,
  `user_profile_photo` varchar(255) DEFAULT NULL,
  `user_birth_date` date DEFAULT NULL,
  `user_gender` int(11) NOT NULL,
  `role_id` int(11) NOT NULL DEFAULT 2,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `email`, `user_first_name`, `user_last_name`, `user_username`, `user_phone`, `user_profile_photo`, `user_birth_date`, `user_gender`, `role_id`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'skmirajbn@gmail.com', 'Sk', 'Miraj', 'skmiraj', '01957244070', NULL, '2023-10-16', 1, 2, NULL, '$2y$10$.QNTbQ1jEfDD8AR4QRZuN.AANS15Ok3nlGymceiLB0izo/3lKfbOG', NULL, '2023-10-18 22:52:01', '2023-10-18 22:52:01'),
(2, 'khaleda@gmail.com', 'Khaleda', 'Akter', 'khaleda', '01652146987', NULL, '2023-10-05', 2, 2, NULL, '$2y$10$96/6cyBeXy9ckW4s8iZWb.qt/LbmbVMnZ4gnLlyUSv5SkD9fnAEG.', NULL, '2023-10-18 23:01:53', '2023-10-18 23:01:53'),
(3, 'alamin@gmail.com', 'Pop', 'Alamin', 'alamin', '01542645874', NULL, '2023-10-10', 1, 2, NULL, '$2y$10$yJ63DIH/ANS5DU7JqbBen..MMUO9ZrwyvfSDmG.s5BeO7//Kpb/f.', NULL, '2023-10-18 23:06:13', '2023-10-18 23:06:13'),
(4, 'jahangir@gmail.com', 'Somrat', 'Jahangir', 'jahangir', '01624517841', NULL, '2023-10-11', 1, 2, NULL, '$2y$10$ZkCwCLA0Ei/EhQq547gUvOP1NecAi3laarxUkHlMG1hKsoBBSdZy2', NULL, '2023-10-19 00:25:42', '2023-10-19 00:25:42'),
(5, 'bristy@gmail.com', 'Bristy', 'Talukder', 'bristy', '01645847124', NULL, '2023-10-03', 2, 2, NULL, '$2y$10$800NqUD9UGGjBx4OSslApOBG7ny2U2vBK7pXXZNfjQ45Dak2h.PZe', NULL, '2023-10-19 00:32:41', '2023-10-19 00:32:41'),
(6, 'ali@gmail.com', 'Ali', 'Hasan', 'ali', '01325487541', NULL, '2023-10-03', 1, 2, NULL, '$2y$10$5qav3AZqiirjYLGVRl9cCeodIJnjUSjKFj.kR/k1BDQ3vNE8pmcB6', NULL, '2023-10-19 00:36:18', '2023-10-19 00:36:18'),
(7, 'mosharraf@gmail.com', 'Mosharraf', 'Hossain', 'mosha', '01654219471', NULL, '2023-10-04', 1, 2, NULL, '$2y$10$jZfJSQLw3msqyAmb.xOXoOksq7ZB111OpnFYgWmyM6WTNr5YeSoy2', NULL, '2023-10-19 00:37:30', '2023-10-19 00:37:30');

-- --------------------------------------------------------

--
-- Table structure for table `websockets_statistics_entries`
--

CREATE TABLE `websockets_statistics_entries` (
  `id` int(10) UNSIGNED NOT NULL,
  `app_id` varchar(255) NOT NULL,
  `peak_connection_count` int(11) NOT NULL,
  `websocket_message_count` int(11) NOT NULL,
  `api_message_count` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `abouts`
--
ALTER TABLE `abouts`
  ADD UNIQUE KEY `abouts_user_id_unique` (`user_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `comment_likes`
--
ALTER TABLE `comment_likes`
  ADD PRIMARY KEY (`comment_like_id`);

--
-- Indexes for table `conversations`
--
ALTER TABLE `conversations`
  ADD PRIMARY KEY (`conversation_id`);

--
-- Indexes for table `conversation_users`
--
ALTER TABLE `conversation_users`
  ADD PRIMARY KEY (`conversation_user_id`);

--
-- Indexes for table `cover_images`
--
ALTER TABLE `cover_images`
  ADD PRIMARY KEY (`cover_image_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`friend_id`);

--
-- Indexes for table `friend_requests`
--
ALTER TABLE `friend_requests`
  ADD PRIMARY KEY (`friend_request_id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`image_id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`message_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`notification_id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`);

--
-- Indexes for table `post_likes`
--
ALTER TABLE `post_likes`
  ADD PRIMARY KEY (`post_like_id`);

--
-- Indexes for table `post_like_types`
--
ALTER TABLE `post_like_types`
  ADD PRIMARY KEY (`post_like_type_id`);

--
-- Indexes for table `profile_images`
--
ALTER TABLE `profile_images`
  ADD PRIMARY KEY (`profile_image_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `websockets_statistics_entries`
--
ALTER TABLE `websockets_statistics_entries`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `comment_likes`
--
ALTER TABLE `comment_likes`
  MODIFY `comment_like_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `conversations`
--
ALTER TABLE `conversations`
  MODIFY `conversation_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `conversation_users`
--
ALTER TABLE `conversation_users`
  MODIFY `conversation_user_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT for table `cover_images`
--
ALTER TABLE `cover_images`
  MODIFY `cover_image_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `friends`
--
ALTER TABLE `friends`
  MODIFY `friend_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `friend_requests`
--
ALTER TABLE `friend_requests`
  MODIFY `friend_request_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `image_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `message_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `notification_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `post_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `post_likes`
--
ALTER TABLE `post_likes`
  MODIFY `post_like_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `post_like_types`
--
ALTER TABLE `post_like_types`
  MODIFY `post_like_type_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `profile_images`
--
ALTER TABLE `profile_images`
  MODIFY `profile_image_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `role_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `websockets_statistics_entries`
--
ALTER TABLE `websockets_statistics_entries`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
