"use strict";

module.exports = function(sequelize, DataTypes) {
    var Catalogue = sequelize.define('Catalogue', {
        tradeType: DataTypes.STRING,
        areaType: DataTypes.STRING,
        numOfRooms: DataTypes.STRING,
        nameOfDistrict: DataTypes.STRING,
        nameOfStreet: DataTypes.STRING,
        buildingNum: DataTypes.STRING,
        floor: DataTypes.STRING,
        totalFloorsInBuilding: DataTypes.STRING,
        area: DataTypes.STRING,
        price: DataTypes.STRING,
        oneSquareMeterPrice: DataTypes.STRING,
        year: DataTypes.STRING,
        roomType: DataTypes.STRING,
        livability: DataTypes.STRING,
        description: DataTypes.STRING,
        contactPhones: DataTypes.STRING,
        checkDate: DataTypes.STRING,
        comment: DataTypes.STRING
    }, {
        classMethods: {

        }
    });

    return Catalogue;
};
