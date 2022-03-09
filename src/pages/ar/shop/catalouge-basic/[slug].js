// import { useEffect } from "react";
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
const Container = dynamic(() => import('react-bootstrap/Container'));
const Row = dynamic(() => import('react-bootstrap/Row'));
const Col = dynamic(() => import('react-bootstrap/Col'));
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
// const useToasts = dynamic(() => import('react-toast-notifications'));
// import { LayoutTwo } from "";
const LayoutTwo = dynamic(() => import('../../../../ar/components/Layout/LayoutTwo'));
import { getDiscountPrice } from "../../../../ar/lib/product";
// import { BreadcrumbOne } from "../../../ar/components/Breadcrumb";

// import {
//     ImageGalleryBottomThumb,
//     ProductDescription,
//     ProductDescriptionTab
// } from "../../../../ar/components/ProductDetails";
const ImageGalleryBottomThumb = dynamic(() => import('../../../../ar/components/ProductDetails/ImageGalleryBottomThumb'));

import { addToCart } from "../../../../redux/actions/cartActions";
import {
    addToWishlist,
    deleteFromWishlist
} from "../../../../redux/actions/wishlistActions";
import {
    addToCompare,
    deleteFromCompare
} from "../../../../redux/actions/compareActions";
import products from "../../../../data/products.json";
import catalouges from "../../../../ar/data/catalouges.json";
// import CatalougeDescription from "";
const CatalougeDescription = dynamic(() => import('../../../../ar/components/CatalougeDetails/CatalougeDescription'));
const ProductBasic = ({
    product,
    cartItems,
    wishlistItems,
    compareItems,
    addToCart,
    addToWishlist,
    deleteFromWishlist,
    addToCompare,
    deleteFromCompare
}) => {
    // useEffect(() => {
    //     document.querySelector("body").classList.remove("overflow-hidden");
    // });

    const { addToast } = useToasts();
    const discountedPrice = getDiscountPrice(
        product.price,
        product.discount
    ).toFixed(2);

    const productPrice = product.price.toFixed(2);
    const cartItem = cartItems.filter(
        (cartItem) => cartItem.id === product.id
    )[0];
    const wishlistItem = wishlistItems.filter(
        (wishlistItem) => wishlistItem.id === product.id
    )[0];
    const compareItem = compareItems.filter(
        (compareItem) => compareItem.id === product.id
    )[0];

    return (
        <LayoutTwo>
            <NextSeo
                title={"جولدن باينتس | "+product.name }
                description={product.shortDescription}
            />
            {/* breadcrumb */}

            {/* product details */}
            <div className="product-details space-mt--r100 space-mb--r100" dir="rtl">
                <Container>
                    <Row>
                        <Col lg={6} style={{ textAlign: 'right'}}>
                            {/* product description */}
                            <CatalougeDescription
                                product={product}
                                productPDFFile={product.productPDFFile}
                                pdf={true}
                            />
                        </Col>

                        <Col lg={6} className="space-mb-mobile-only--50">
                            {/* image gallery bottom thumb */}
                            <ImageGalleryBottomThumb
                                product={product}
                                wishlistItem={wishlistItem}
                                addToast={addToast}
                                addToWishlist={addToWishlist}
                                deleteFromWishlist={deleteFromWishlist}
                                showThumbs={false}
                            />
                        </Col>

                        
                    </Row>
                </Container>
            </div>
        </LayoutTwo>
    );
};

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartData,
        wishlistItems: state.wishlistData,
        compareItems: state.compareData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (
            item,
            addToast,
            quantityCount,
            selectedProductColor,
            selectedProductSize
        ) => {
            dispatch(
                addToCart(
                    item,
                    addToast,
                    quantityCount,
                    selectedProductColor,
                    selectedProductSize
                )
            );
        },
        addToWishlist: (item, addToast) => {
            dispatch(addToWishlist(item, addToast));
        },
        deleteFromWishlist: (item, addToast) => {
            dispatch(deleteFromWishlist(item, addToast));
        },
        addToCompare: (item, addToast) => {
            dispatch(addToCompare(item, addToast));
        },
        deleteFromCompare: (item, addToast) => {
            dispatch(deleteFromCompare(item, addToast));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductBasic);

export async function getStaticPaths() {
    // get the paths we want to pre render based on products
    const paths = catalouges.map((product) => ({
        params: { slug: product.slug }
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    // get product data based on slug
    const product = catalouges.filter((single) => single.slug === params.slug)[0];

    return { props: { product } };
}
