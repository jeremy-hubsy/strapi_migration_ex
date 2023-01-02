'use strict';

/**
 * restaurant controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::restaurant.restaurant', ({ strapi }) => ({
  async findCustomRoute(ctx) {
    // some custom logic here

    ctx.query = { ...ctx.query, local: 'en' };

    // calling the default core action with super
    const { data, meta } = await super.find(ctx);

    // some more custom logic
    meta.date = Date.now();

    console.log(meta);
    return { data, meta };
  },
}));
