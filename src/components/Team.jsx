import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    { id: 1, imageUrl: '/Jersey Raval.png' },
    { id: 2, imageUrl: '/Ivan Cielo.png' },
    { id: 3, imageUrl: '/Patrick Raymond Benito.png' },
    { id: 4, imageUrl: '/Filbert Dela Cruz.png' },
    { id: 5, imageUrl: '/Malachi Lama.png' },
  ];

  return (
    <section className="team-section" id="team">
      <div className="team-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member-frame">
            <div className="frame-border">
              <img
                src={member.imageUrl}
                alt={`Team member ${member.id}`}
                className="team-member-image"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team; 