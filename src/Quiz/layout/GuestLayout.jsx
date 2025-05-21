import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

export default function GuestLayout() {
  return (
    <div>
      <main className="min-h-screen bg-gray-100 px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
