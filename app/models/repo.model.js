module.exports = (sequelize, Sequelize) => {
  const tblrepo = sequelize.define("tblrepo", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type_id: {
      type: Sequelize.INTEGER
    },
    aff_id: {
      type: Sequelize.INTEGER
    },
    url: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  });

  return tblrepo;
};
