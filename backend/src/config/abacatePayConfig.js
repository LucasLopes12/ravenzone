import axios from "axios";

export const abacatePayClient = axios.create({
  baseURL: "https://api.abacatepay.com/v1",
  headers: {
    Authorization: `Bearer ${process.env.ABACATEPAY_API_KEY}`,
    "Content-Type": "application/json",
  },
});
