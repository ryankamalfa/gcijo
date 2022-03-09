// get catalouges
export const getCatalouges = (catalouges, category, type, limit) => {
    const finalProducts = category
        ? catalouges.filter(
            (product) => product.category.filter((single) => single === category)[0]
        )
        : catalouges;

    if (type && type === "new") {
        const newProducts = finalProducts.filter((single) => single.new);
        return newProducts.slice(0, limit ? limit : newProducts.length);
    }
    if (type && type === "popular") {
        return (
            finalProducts &&
            finalProducts
                .sort((a, b) => {
                    return b.saleCount - a.saleCount;
                })
                .slice(0, limit ? limit : finalProducts.length)
        );
    }
    if (type && type === "topRated") {
        return (
            finalProducts &&
            finalProducts
                .sort((a, b) => {
                    return b.rating - a.rating;
                })
                .slice(0, limit ? limit : finalProducts.length)
        );
    }
    if (type && type === "sale") {
        const saleItems =
            finalProducts &&
            finalProducts.filter((single) => single.discount && single.discount > 0);
        return saleItems.slice(0, limit ? limit : saleItems.length);
    }
    return (
        finalProducts &&
        finalProducts.slice(0, limit ? limit : finalProducts.length)
    );
};

// get catalouges based on category
export const getSortedCatalouges = (catalouges, sortType, sortValue) => {
    if (catalouges && sortType && sortValue) {
        if (sortType === "category") {
            return catalouges.filter(
                (catalouge) =>
                    catalouge.category.filter((single) => single === sortValue)[0]
            );
        }
        if (sortType === "tag") {
            return catalouges.filter(
                (catalouge) => catalouge.tag.filter((single) => single === sortValue)[0]
            );
        }
        if (sortType === "color") {
            return catalouges.filter(
                (catalouge) =>
                    catalouge.variation &&
                    catalouge.variation.filter((single) => single.color === sortValue)[0]
            );
        }
        if (sortType === "size") {
            return catalouges.filter(
                (catalouge) =>
                    catalouge.variation &&
                    catalouge.variation.filter(
                        (single) =>
                            single.size.filter((single) => single.name === sortValue)[0]
                    )[0]
            );
        }
        if (sortType === "filterSort") {
            let sortCatalouges = [...catalouges];
            if (sortValue === "default") {
                return sortCatalouges;
            }
            if (sortValue === "priceHighToLow") {
                return sortCatalouges.sort((a, b) => {
                    return b.price - a.price;
                });
            }
            if (sortValue === "priceLowToHigh") {
                return sortCatalouges.sort((a, b) => {
                    return a.price - b.price;
                });
            }
        }
    }
    return catalouges;
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
export const getIndividualCategories = (catalouges) => {
    let catalougeCategories = [];
    catalouges &&
        catalouges.map((catalouge) => {
            return (
                catalouge.category &&
                catalouge.category.map((single) => {
                    return catalougeCategories.push(single);
                })
            );
        });
    const individualCatalougeCategories = getIndividualItemArray(catalougeCategories);
    return individualCatalougeCategories;
};

// get individual tags
export const getIndividualTags = (catalouges) => {
    let catalougeTags = [];
    catalouges &&
        catalouges.map((catalouge) => {
            return (
                catalouge.tag &&
                catalouge.tag.map((single) => {
                    return catalougeTags.push(single);
                })
            );
        });
    const individualCatalougeTags = getIndividualItemArray(catalougeTags);
    return individualCatalougeTags;
};

// get individual colors
export const getIndividualColors = (catalouges) => {
    let catalougeColors = [];
    catalouges &&
        catalouges.map((catalouge) => {
            return (
                catalouge.variation &&
                catalouge.variation.map((single) => {
                    return catalougeColors.push({
                        colorName: single.color,
                        colorCode: single.colorCode
                    });
                })
            );
        });
    const individualCatalougeColors = getIndividualColorObjectArray(catalougeColors);
    return individualCatalougeColors;
};



export const setActiveSort = (e) => {
    const filterButtons = document.querySelectorAll(
        ".single-sidebar-widget__list button, .tag-container button, .single-filter-widget__list button"
    );
    filterButtons.forEach((item) => {
        item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
};

export const setActiveLayout = (e) => {
    const gridSwitchBtn = document.querySelectorAll(".grid-icons button");
    gridSwitchBtn.forEach((item) => {
        item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
};
