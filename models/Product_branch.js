module.exports = (db, DataTypes) => {
    const productbranch = db.define('productBranch', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
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

    return productbranch;
};