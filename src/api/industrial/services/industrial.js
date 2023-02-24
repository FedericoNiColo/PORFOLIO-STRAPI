'use strict';

/**
 * industrial service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::industrial.industrial');
