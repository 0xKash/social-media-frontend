import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatDate = (dateObj) => {
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const day = dateObj.getDate();

  const date = `${day}/${month}/${year}`;

  return date;
};

export const dateToText = (dateObj) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();

  const date = `${month} ${year}`;

  return date;
};
