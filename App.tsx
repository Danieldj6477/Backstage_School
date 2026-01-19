import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { HomeView } from './views/HomeView';
import { IACourseView } from './views/IACourseView';
import { VideoCourseView } from './views/VideoCourseView';
import { CourseChatbot } from './components/CourseChatbot';
import { RegistrationModal } from './components/RegistrationModal';
import { ViewState } from './types';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<'ia' | 'video'>('ia');
  const [selectedDatesForModal, setSelectedDatesForModal] = useState<string>('');

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const openRegistration = (course: 'ia' | 'video', dates: string = '') => {
    setSelectedCourseForModal(course);
    setSelectedDatesForModal(dates);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="relative">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/ia" element={<IACourseView onRegister={(dates) => openRegistration('ia', dates)} />} />
          <Route path="/video" element={<VideoCourseView onRegister={() => openRegistration('video')} />} />
        </Routes>

        <CourseChatbot />

        <RegistrationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          defaultCourse={selectedCourseForModal}
          initialDates={selectedDatesForModal}
        />
      </div>
    </>
  );
}

export default App;