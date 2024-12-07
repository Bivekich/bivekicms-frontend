import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './ui/button';

export const Dashboard: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-gray-800">
                  BivekiCMS
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <Button onClick={logout}>Выйти</Button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900">
            Панель управления
          </h1>
          <p className="mt-4 text-gray-600">
            Добро пожаловать в панель управления BivekiCMS.
          </p>
        </div>
      </main>
    </div>
  );
};
