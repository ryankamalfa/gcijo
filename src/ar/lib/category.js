// get categories
export const getCategories = (categories, category, type, limit) => {
    const finalcategories = category
        ? categories.filter(
            (category) => category.category.filter((single) => single === category)[0]
        )
        : categories;

    return (
        finalcategories &&
        finalcategories.slice(0, limit ? limit : finalcategories.length)
    );
};

// get individual element
const getIndividualItemArray = (array) => {
    let individualItemArray = array.filter((v, i, self) => i === self.indexOf(v));
    return individualItemArray;
};

// get individual element object
const getIndividualColorObjectArray = (array) => {
    let individualObjectArray = array.filter((v, i, self) => {
        return (
            i ===
            self.findIndex(
                (t) => t.colorName === v.colorName && t.colorCode === v.colorCode
            )
        );
    });
    return individualObjectArray;
};

// get individual categories
export const getIndividualCategories = (categories) => {
    let categoryCategories = [];
    categories &&
        categories.map((category) => {
            return (
                category.category &&
                category.category.map((single) => {
                    return categoryCategories.push(single);
                })
            );
        });
    const individualcategoryCategories = getIndividualItemArray(categoryCategories);
    return individualcategoryCategories;
};