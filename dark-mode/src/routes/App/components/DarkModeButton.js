import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import '../styles/_app.scss';
import { ThemeContext } from '../../../common/containers/App.js';

function DarkModeButton() {
    return (
      <ThemeContext.Consumer>
        {value => {
          return (
            <button className="app__dark-mode-btn icon level-right">
              <FontAwesomeIcon 
              icon={value.darkMode ? faSun : faMoon}
              onClick={value.toggleDarkMode}
              color={value.darkMode ? "#FFA500": ""}
              />
            </button>
          )
        }}
      </ThemeContext.Consumer>
    );
}

export default DarkModeButton;