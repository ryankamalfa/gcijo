import { useState } from "react";
import dynamic from 'next/dynamic';
import { NextSeo } from 'next-seo';
// import { Container, Row, Col } from "react-bootstrap";
const Container = dynamic(() => import('react-bootstrap/Container'));
const Row = dynamic(() => import('react-bootstrap/Row'));
const Col = dynamic(() => import('react-bootstrap/Col'));
// import { LayoutOne, LayoutTwo } from "../../../../ar/components/Layout";
const LayoutOne = dynamic(() => import('../../../../ar/components/Layout/LayoutOne'));
import Link from "next/link";
import { useRouter } from 'next/router'
// import Visualizer from "";
const Visualizer = dynamic(() => import('../../../../ar/components/Visualizer'));
import { useEffect } from "react";

const VisualizerPage = () => {
    const [modalStatus, isOpen] = useState(false);
    const router = useRouter()
    const room = router.query.room || "bedroom";

    const renderLivingroom = () => (
        <Visualizer
            currentRoom={room}
            wall1={"/assets/images/colors/visualizer/living-room/temp/wall1.png"}
            wall2={"/assets/images/colors/visualizer/living-room/temp/wall2.png"}
            highlights={"/assets/images/colors/visualizer/living-room/temp/highlights.png"}
            base={"/assets/images/colors/visualizer/living-room/temp/base.jpg"}
            left={"38%"}
            right={"62%"}
        />
    )

    const renderKitchen = () => (
        <Visualizer
            currentRoom={room}
            wall1={"/assets/images/colors/visualizer/kitchen/temp/wall1.png"}
            wall2={"/assets/images/colors/visualizer/kitchen/temp/wall2.png"}
            highlights={"/assets/images/colors/visualizer/kitchen/temp/highlights.png"}
            base={"/assets/images/colors/visualizer/kitchen/temp/base.jpg"}
            left={"50%"}
            right={"50%"}
        />
    )

    const renderBedroom = () => (
        <Visualizer
            currentRoom={room}
            wall1={"/assets/images/colors/visualizer/wall1.png"}
            wall2={"/assets/images/colors/visualizer/wall2.png"}
            highlights={"/assets/images/colors/visualizer/highlights.png"}
            base={"/assets/images/colors/visualizer/base.jpg"}
            left={"31.5%"}
            right={"68.5%"}
        />
    )

    const renderKidsRoom = () => (
        <Visualizer
            currentRoom={room}
            wall1={"/assets/images/colors/visualizer/kids-room/temp/wall1.png"}
            wall2={"/assets/images/colors/visualizer/kids-room/temp/wall2.png"}
            highlights={"/assets/images/colors/visualizer/kids-room/temp/highlights.png"}
            base={"/assets/images/colors/visualizer/kids-room/temp/base.jpg"}
            left={"50%"}
            right={"50%"}
        />
    )

    return (
        <LayoutOne>
            <NextSeo
        title="جولدن باينتس | متخيل الألوان"
        />
            <Container className="wide mw-100 p-0">
                <div className="page-content">
                    {room === "bedroom" && renderBedroom()}
                    {room === "living-room" && renderLivingroom()}
                    {room === "kitchen" && renderKitchen()}
                    {room === "kids-room" && renderKidsRoom()}
                </div>
            </Container>
        </LayoutOne>
    );
};

export default VisualizerPage;
