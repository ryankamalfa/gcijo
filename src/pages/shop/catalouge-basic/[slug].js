// import { useEffect } from "react";
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
const Container = dynamic(() => import('react-bootstrap/Container'));
const Row = dynamic(() => import('react-bootstrap/Row'));
const Col = dynamic(() => import('react-bootstrap/Col'));
import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";
// import { LayoutTwo } from "../../../components/Layout";
const LayoutTwo = dynamic(() => import('../../../components/Layout/LayoutTwo'));

import { getDiscountPrice } from "../../../lib/product";
// import {
//     ImageGalleryBottomThumb,
//     ProductDescription,
//     ProductDescriptionTab
// } from "../../../components/ProductDetails";
const ImageGalleryBottomThumb = dynamic(() => import('../../../components/ProductDetails/ImageGalleryBottomThumb'));

import { addToCart } from "../../../redux/actions/cartActions";
import {
    addToWishlist,
    deleteFromWishlist
} from "../../../redux/actions/wishlistActions";
import {
    addToCompare,
    deleteFromCompare
} from "../../../redux/actions/compareActions";
import catalouges from "../../../data/catalouges.json";
// import CatalougeDescription from "";
const CatalougeDescription = dynamic(() => import('../../../components/CatalougeDetails/CatalougeDescription'));
const ProductBasic = ({
    product,
    cartItems,
    wishlistItems,
    compareItems,
    addToWishlist,
    deleteFromWishlist
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
        title={"Golden Paints | "+product.name }
        description={product.shortDescription}
/>
            {/* breadcrumb */}

            {/* product details */}
            <div className="product-details space-mt--r100 space-mb--r100">
                <Container>
                    <Row>
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

                        <Col lg={6}>
                            {/* product description */}
                            <CatalougeDescription
                                product={product}
                                productPDFFile={product.productPDFFile}
                                pdf={true}
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
