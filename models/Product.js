module.exports = (db, DataTypes) => {
    const product = db.define('product', {
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
            name: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        }, {
            freezeTableName: true
        }

    );

    return product;
};