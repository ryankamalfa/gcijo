import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function CatalougeItem({ title, image, link, productPDFFILE }) {
    return (
        <>
            <div class="card" style={{ width: "21rem", padding: "0", border: 0, margin: "2rem" }}>
                <Link
                    href={link}
                    as={process.env.PUBLIC_URL + link}
                >
                    {/* <img class="card-img-top" src={image} alt="Card image cap" style={{ cursor: "pointer" }} /> */}
                    <div className="card-img-to" style={{cursor: "pointer",width: '100%', height: '400px', position: 'relative'}}>
                            <Image src={image} alt="Card image cap" layout='fill'
                            objectFit='cover'/>
                    </div>
                </Link>
                {/* <div class="card-body">
                    <Link
                        href={link}
                        as={process.env.PUBLIC_URL + link}
                    >
                        <h5 style={{ color: "#000", cursor: "pointer" }} class="card-title">{title}</h5>
                    </Link>
                </div> */}
                <div
                    class="mt-4"
                    style={{
                        padding: "8px 0",
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gridColumnGap: "10px",
                    }}
                >
                    <button
                        className="lezada-button lezada-button--small lookbook-btn mr-2"
                        onClick={() => window.open(link, '_self')}
                        style={{ backgroundColor: "#fff", color: "#06205c", borderRadius: "5px" }}
                    >View</button>

                    <a
                        href={productPDFFILE}
                        className="lezada-button lezada-button--small lookbook-btn"
                        style={{ backgroundColor: "#fff", color: "#06205c", borderRadius: "5px", textAlign: "center" }}
                        download
                    >Download</a>
                </div>
            </div>
        </>
    )
}
