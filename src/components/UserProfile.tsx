import React from "react";

// Define interfaces for the props
interface Address {
  id: number;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface Order {
  id: number;
  date: string;
  totalAmount: string;
  status: string;
}

interface UserProfileProps {
  name: string;
  email: string;
  addresses: Address[];
  orderHistory: Order[];
}

const UserProfile: React.FC<UserProfileProps> = ({ name, email, addresses, orderHistory }) => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-500">{email}</p>

      <h3 className="mt-4 text-md font-semibold">Addresses:</h3>
      <ul>
        {addresses.map((address) => (
          <li key={address.id} className="text-sm">
            {address.street}, {address.city}, {address.state}, {address.country} -{" "}
            {address.postalCode}
          </li>
        ))}
      </ul>

      <h3 className="mt-4 text-md font-semibold">Order History:</h3>
      <ul>
        {orderHistory.map((order) => (
          <li key={order.id} className="text-sm">
            Order #{order.id} - {order.date} - {order.totalAmount} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;
