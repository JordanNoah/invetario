module.exports = (db, DataTypes) => {
    const product = db.define('product', {
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

            name: {
                type: DataTypes.TEXT,
                allowNull: false
            },
           image: {
                type: DataTypes.TEXT,
                allowNull: true
            }
        


        }, {
            freezeTableName: true
        }

    );

    return product;
}