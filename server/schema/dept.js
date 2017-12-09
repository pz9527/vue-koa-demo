/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dept', {
    dept: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    tableName: 'dept'
  });
};
