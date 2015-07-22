'use strict';

import pkg from '../../package';

export const DEBUG = (process.env.NODE_ENV !== 'production');
export const APP_TITLE = 'B&B Welding';
export const NAVIGATION_UPDATED = 'NAVIGATION_UPDATED';
export const PROJECTS_UPDATED = 'PROJECTS_UPDATED';
export const PROJECTS_GET_SUCCESS = 'PROJECTS_GET_SUCCESS';
export const PROJECTS_GET_ERROR = 'PROJECTS_GET_ERROR';