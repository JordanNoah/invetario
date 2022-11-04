module.exports = (db, DataTypes) => {
    const product_branch = db.define('productBranch', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoincrement: true
            },
            uuid: {
                type: DataTypes.TEXT,
                allowNull: false
            },

            unit_price: {
                type: DataTypes.TEXT,
                allowNull: false
            }
      


        }, {
            freezeTableName: true
        }

    );

    return product_branch;
}