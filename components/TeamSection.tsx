import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import '../styles/pages/team-section.css';

const members = [
  {
    name: 'Thays Henriques',
    role: 'Construção Digital, Sistemas',
    bio: 'Mestra das interfaces modernas e responsivas, DOMINADORA do Front-End, unindo técnica, criatividade e empatia em cada pixel!',
    image: './image/home/thays.png',
    socials: {
      fb: 'https://facebook.com',
      ig: 'https://www.instagram.com/thayshds/',
      li: 'https://www.linkedin.com/in/thays-hds/',
    },
  },
  {
    name: 'Lucas Rodrigues',
    role: 'Direção de Arte, User Experience',
    bio: 'Conhecedor das mais poderosas forças conhecidas e não conhecidas pela raça humana. O TODO PODEROSO UX/UI designer!',
    image: './image/home/lucas.png',
    socials: {
      fb: 'https://facebook.com',
      ig: 'https://www.instagram.com/kindimstudio/',
      li: 'https://www.linkedin.com/in/lucas-rodrigues-17769912b/',
    },
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section className="team-section relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-48 z-20 bg-gradient-to-b from-coffee-950 via-transparent to-transparent opacity-100 pointer-events-none"></div>
      <div className="team-bg absolute inset-0 -z-10">
        <img src="/image/home/equipe.png" alt="Coffee Shop" className="w-full h-full object-cover"/>
        <div className="team-overlay absolute inset-0 bg-black/60" />
      </div>

      <div className="team-container max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {members.map((member, idx) => (
          <div key={idx} className="team-card group relative flex flex-col items-center text-center p-6 rounded-2xl bg-coffee-900/80 backdrop-blur-md hover:scale-105 transition-transform duration-300">
            <div className="team-card-line top" />

            <div className="team-avatar w-24 h-24 sm:w-28 sm:h-28 mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <div className="team-content">
              <h3 className="text-lg sm:text-xl font-bold">{member.name}</h3>
              <p className="team-role text-sm sm:text-base opacity-80">
                {member.role}
              </p>

              <div className="team-socials flex gap-4 justify-center mt-3">
                {member.socials.fb && (
                  <a
                    href={member.socials.fb}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook />
                  </a>
                )}

                {member.socials.ig && (
                  <a
                    href={member.socials.ig}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram />
                  </a>
                )}

                {member.socials.li && (
                  <a
                    href={member.socials.li}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin />
                  </a>
                )}
              </div>

              <p className="team-bio text-sm sm:text-base mt-3 leading-relaxed">
                {member.bio}
              </p>
            </div>

            <div className="team-card-line bottom" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-transparent to-transparent opacity-98"></div>
    </section>
  );
};
