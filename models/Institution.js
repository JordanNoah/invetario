module.exports = (db, DataTypes) => {
    const institution = db.define('institution', {
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

    return institution;
}