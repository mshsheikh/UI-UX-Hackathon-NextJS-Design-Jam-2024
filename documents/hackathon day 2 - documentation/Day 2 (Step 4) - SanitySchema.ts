import { defineField, defineType } from "sanity";

//**
// Schema for Product:

export const productSchema = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
    }),
  ],
});

//**
// Schema for Order:

export const orderSchema = defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    defineField({
      name: "customerName",
      title: "Customer Name",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "products",
      title: "Products",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    }),
    defineField({
      name: "totalAmount",
      title: "Total Amount",
      type: "number",
    }),
    defineField({
      name: "paymentStatus",
      title: "Payment Status",
      type: "string",
      options: {
        list: [
          { title: "Paid", value: "paid" },
          { title: "Pending", value: "pending" },
          { title: "Failed", value: "failed" },
        ],
      },
    }),
    defineField({
      name: "shippingStatus",
      title: "Shipping Status",
      type: "string",
      options: {
        list: [
          { title: "In Transit", value: "inTransit" },
          { title: "Delivered", value: "delivered" },
          { title: "Pending", value: "pending" },
        ],
      },
    }),
  ],
});

//**
// Schema for Customer:

export const customerSchema = defineType({
  name: "customer",
  title: "Customer",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "string",
    }),
    defineField({
      name: "orderHistory",
      title: "Order History",
      type: "array",
      of: [{ type: "reference", to: [{ type: "order" }] }],
    }),
  ],
});

export const schemaTypes = [productSchema, orderSchema, customerSchema];
