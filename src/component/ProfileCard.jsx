import React from 'react';

export const ProfileCard = ({ profilePicture, name, position, profileLink }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="flex items-center mb-4">
        <img
          src={profilePicture}
          alt="Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className='hidden md:block'>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-500">{position}</p>
        </div>
      </div>
      <a
        href={profileLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View Profile
      </a>
    </div>
  );
};

