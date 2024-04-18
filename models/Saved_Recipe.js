const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')

class Saved_Recipe extends Model {

    static async findRecipe(recipeid){
        try {
            const recipe = await Saved_Recipe.findByPk(recipeid)
            return recipe ? recipe : null;
        } catch (error) {
            console.log(error)
            return null
        }
    }
}

Recipe.init({
  recipeid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize, 
  modelName: 'Saved_Recipe'
});

module.exports = Saved_Recipe