-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 16, 2020 at 12:41 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `id` int(10) NOT NULL,
  `patient_name` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `doctor_name` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `uuid` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`id`, `patient_name`, `department`, `doctor_name`, `date`, `time`, `email`, `phone`) VALUES
(6, 'Aditya', 'ENT Department', 'Harish B', '26/03/2020', '10:43 AM', 'aditya08@gmail.com', '9940355430'),
(10, 'Srinath', 'Opthalmology', 'Sanjay Kannan', '18/03/2020', '1:41 AM', 'srinath@gmail.com', '7865641399');

-- --------------------------------------------------------



--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `id` int(10) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `dob` varchar(20) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `department` varchar(50) NOT NULL,
  `uuid` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`id`, `first_name`, `last_name`, `email`, `dob`, `gender`, `address`, `phone`, `department`) VALUES
(39, 'Harish', 'B', 'harishraja484@gmail.com', '31/12/2001', 'male', 'karur', '6383473047', 'ENT Department'),
(41, 'Sanjay', 'kannan', 'sanjay@gmail.com', '18/03/2001', 'male', 'Trichy', '9500418540', 'Optholmology');

-- --------------------------------------------------------



-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `uuid` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `username`, `password`, `email`) VALUES
(1, 'test', 'test', 'gmhs13@yopmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

CREATE TABLE `store` (
  `id` int(10) NOT NULL,
  `name` varchar(255) NOT NULL,
  `p_date` varchar(255) NOT NULL,
  `expire` varchar(255) NOT NULL,
  `expire_end` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `quantity` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`id`, `name`, `p_date`, `expire`, `expire_end`, `price`, `quantity`) VALUES
(4, 'Napa', '20/03/2020', '2', '19/03/2020', '8', '100'),
(8, 'Seclo', '24/03/2020', '2', '24/03/2020', '5', '200'),
(9, 'Napa', '24/03/2020', '1 ', '19/03/2020', '10', '20'),
(10, 'max', '11/03/2020', '1 ', '12/03/2020', '10', '100');

-- --------------------------------------------------------


--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(20) NOT NULL,
  `uuid` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES
(9, 'zihad', 'zihad.1d@yopmail.com', '123'),
(19, 'test', 'test555@yopmail.com', '123'),
(20, 'abc', 'gmhs13@yopmail.com', '12345'),
(21, 'alamin', 'te555@yopmail.com', 'abc');

-- --------------------------------------------------------

--
-- Table structure for table `verify`
--

CREATE TABLE `verify` (
  `id` int(10) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `verify`
--

INSERT INTO `verify` (`id`, `username`, `email`) VALUES
(4, 'zihad', 'zihad.1d@yopmail.com'),
(14, 'test', 'test555@yopmail.com'),
(15, 'abc', 'gmhs13@yopmail.com'),
(16, 'alamin', 'te555@yopmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`id`);


--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `verify`
--
ALTER TABLE `verify`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;


--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `store`
--
ALTER TABLE `store`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `verify`
--
ALTER TABLE `verify`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;


