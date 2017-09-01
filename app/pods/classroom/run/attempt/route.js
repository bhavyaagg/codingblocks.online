/**
 * Created by abhishek on 27/06/17.
 */
'use strict';
import Ember from 'ember';

export default Ember.Route.extend({
  currentUser: Ember.inject.service('current-user'),
  model () {
    const run = this.modelFor('classroom.run');
    const course = run.get('course');
    return Ember.RSVP.hash({
      course,
      //TODO: Remove this call. sections are already present inside course.
      sections: this.store.query('section', {courseId: course.get('id'), runId: run.id})
    })
  },
  setupController(controller, model) {
    controller.set('course', model.course);
    controller.set('sections', model.sections);
  }
});
