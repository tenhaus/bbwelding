'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import WebAPI from '../util/WebAPI';

import {
  PROJECTS_GET_SUCCESS,
  PROJECTS_GET_ERROR
} from '../constants/AppConstants';

export default {
  
  // Grab the projects
  getProjects() {
    WebAPI.getProjects().then((projects) => {
      AppDispatcher.dispatch({
        actionType: PROJECTS_GET_SUCCESS,
        projects: projects
      });
    }).catch(() => {
      AppDispatcher.dispatch({
        actionType: PROJECTS_GET_ERROR
      });
    });
  }
};
