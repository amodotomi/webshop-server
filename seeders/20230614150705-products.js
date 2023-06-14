/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const { faker } = require('@faker-js/faker');
('use strict');

const productManufacturers = [
  'Azure',
  'Gloves',
  'Cambridgeshire',
  'Salmon',
  'Montana',
  'Sensor',
  'Lesly',
  'Radian',
  'Gasoline',
  'Croatia',
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Products',
      [...Array(100)].map(() => ({
        product_manufacturer:
          productManufacturers[
            Math.floor(Math.random() * productManufacturers.length)
          ],
        price: faker.string.numeric({ min: 1, max: 9999 }),
        name: faker.lorem.sentence(2),
        description: faker.lorem.sentence(10),
        images: JSON.stringify(
          [...Array(7)].map(
            () =>
              `${faker.image.urlLoremFlickr({
                category: 'food',
              })}?random=${faker.string.numeric({ min: 1, max: 30 })}`,
          ),
        ),
        vendor_code: faker.internet.password(),
        in_stock: faker.string.numeric({ min: 0, max: 1 }),
        bestseller: faker.datatype.boolean(),
        new: faker.datatype.boolean(),
        popularity: faker.string.numeric({ min: 1, max: 999 }),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Products', null, {});
  },
};
