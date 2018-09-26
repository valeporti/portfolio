import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

// Import Style

// Import Actions

// Import Selectors

// Import Components
import Projects from '../../components/Projects/Projects'

function ProfileProjects(props) {
    return (
        <div>
            <Projects />
        </div>
    );
}

export default ProfileProjects;