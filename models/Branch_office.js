module.exports = (db, DataTypes) => {
    const branchoffice = db.define('branchOffice', {
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
            address: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        
        
        }, {
            freezeTableName: true
        }

    );

    return branchoffice;
}