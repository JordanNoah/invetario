module.exports = (db, DataTypes) => {
    const users = db.define('users', {
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
            names: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            surnames: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            mail: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            password: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            profilepicture: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            role: {
                type: DataTypes.TEXT,
                allowNull: false
            }
        }, {
            freezeTableName: true
        }

    );

    return users;
};

