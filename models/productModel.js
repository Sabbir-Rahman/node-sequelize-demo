const productSchema = (sequelize, DataTypes) => {
    const Product = sequelize.define("product", {
        title: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        price: { 
            type: DataTypes.FLOAT,
        },
        description: { 
            type: DataTypes.TEXT,
        },
        published: { 
            type: DataTypes.BOOLEAN,
        }
    })

    return Product
}

export default productSchema