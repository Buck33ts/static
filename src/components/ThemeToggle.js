import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, onThemeChange }) => {
  const themes = [
    { id: 'light', name: 'Light', icon: 'sun' },
    { id: 'normal', name: 'Normal', icon: 'cloud-sun' },
    { id: 'dark', name: 'Dark', icon: 'moon' }
  ];

  return (
    <div className="theme-toggle">
      <div className="theme-toggle-label">Display Theme</div>
      <div className="theme-options">
        {themes.map((themeOption) => (
          <button
            key={themeOption.id}
            className={`theme-option ${theme === themeOption.id ? 'active' : ''}`}
            onClick={() => onThemeChange(themeOption.id)}
            title={`${themeOption.name} mode`}
            aria-label={`Switch to ${themeOption.name} mode`}
          >
            <svg className="theme-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {themeOption.icon === 'sun' && (
                <>
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </>
              )}
              {themeOption.icon === 'cloud-sun' && (
                <>
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M20 16.5C20 18.43 18.43 20 16.5 20C14.57 20 13 18.43 13 16.5C13 14.57 14.57 13 16.5 13C18.43 13 20 14.57 20 16.5Z" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                </>
              )}
              {themeOption.icon === 'moon' && (
                <>
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </>
              )}
            </svg>
            <span className="theme-name">{themeOption.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;
