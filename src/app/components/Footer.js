import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faHashnode } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-purple-300 text-white py-4 text-center fixed bottom-0 left-0 w-full">
      <div className="flex justify-center gap-4">
        <a href="https://twitter.com/cindy_kandie" target="_blank" rel="noopener noreferrer">
            Twitter
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/cindykandie/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/cindykandie" target="_blank" rel="noopener noreferrer">
            GitHub
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://hashnode.com/@cindykandie" target="_blank" rel="noopener noreferrer">
        HashNode
          <FontAwesomeIcon icon={faHashnode} size="2x" />
        </a>
      </div>
      <p className="mt-2">Connect with me on social media</p>
    </footer>
  );
}

export default Footer;
