/* jshint indent: 2 */

export default function (sequelize, DataTypes) {
  return sequelize.define('list', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    content: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    diningform: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    date: {
      type: DataTypes.CHAR(30),
      allowNull: false
    },
    number: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    department: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    user_id: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
  }, {
    tableName: 'list'
  })
};
