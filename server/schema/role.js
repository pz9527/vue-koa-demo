/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('role', {
    role: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    tableName: 'role'
  });
};
