'use strict';

/**
 *  course controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { getFullPopulateObject } = require('./../../../helper/populate');

const modelUid = "api::course.course";

module.exports = createCoreController(modelUid, ({ strapi }) => ({
    async find(ctx) {
      const { query } = ctx;
  
      const { results, meta } = await strapi.service(modelUid).find({
        ...getFullPopulateObject(modelUid, 4),
        ...query,
      });
  
      const sanitizedEntities = await this.sanitizeOutput(results, ctx);
  
      return {
        data: sanitizedEntities,
        meta,
      };
    },
  }));