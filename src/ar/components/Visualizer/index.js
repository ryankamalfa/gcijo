import React, { useState } from 'react'
import Link from "next/link";
import dynamic from 'next/dynamic';
import Image from "next/image";
// const DynamicComponentWithNoSSR = dynamic(
//   () => import('../components/Visualizer'),
//   { ssr: false }

  

function Visualizer({ base, wall1, wall2, highlights, left, right }) {

    const [selectedWall, setSelectedWall] = useState('#wall2');
    const [wall1Color, setWall1Color] = useState('#fff');
    const [wall2Color, setWall2Color] = useState('#fff');

    const colors = [
        {
            colorHex: '#EBEBE1',
            colorCode: 'GCI-1002',
        },
        {
            colorHex: '#FFFFFF',
            colorCode: 'GCI-1001',
        },
        {
            colorHex: '#9CBDCC',
            colorCode: 'GCI-1099',
        },
        {
            colorHex: '#FDDBEF',
            colorCode: 'GCI-1119',
        },
        {
            colorHex: '#989958',
            colorCode: 'GCI-1079',
        },
        {
            colorHex: '#F2FAF3',
            colorCode: 'GCI-1068',
        },
        {
            colorHex: '#5CC242',
            colorCode: 'GCI-1101',
        },
        {
            colorHex: '#FEF1D2',
            colorCode: 'GCI-1006',
        },
        {
            colorHex: '#1FABC2',
            colorCode: 'GCI-1059',
        },
        {
            colorHex: '#74D2F0',
            colorCode: 'GCI-1056',
        },
        {
            colorHex: '#FCFDE4',
            colorCode: 'GCI-1117',
        },
        {
            colorHex: '#FAB327',
            colorCode: 'GCI-1019',
        },
        {
            colorHex: '#FBF99D',
            colorCode: 'GCI-1011',
        },
        {
            colorHex: '#F9A00F',
            colorCode: 'GCI-1018',
        },
        {
            colorHex: '#FCEE7C',
            colorCode: 'GCI-1012',
        },
        {
            colorHex: '#F68612',
            colorCode: 'GCI-1026',
        },
        {
            colorHex: '#FCCABD',
            colorCode: 'GCI-1023',
        },
        {
            colorHex: '#FEFAF8',
            colorCode: 'GCI-1122',
        },
        {
            colorHex: '#FCCE52',
            colorCode: 'GCI-1017',
        },
        {
            colorHex: '#F36418',
            colorCode: 'GCI-1027',
        },
        {
            colorHex: '#FBBEAA',
            colorCode: 'GCI-1024',
        },
        {
            colorHex: '#FDF4F2',
            colorCode: 'GCI-1103',
        },
        {
            colorHex: '#FCCD53',
            colorCode: 'GCI-1013',
        },
        {
            colorHex: '#F57115',
            colorCode: 'GCI-1028',
        },
        {
            colorHex: '#F89592',
            colorCode: 'GCI-1025',
        },
        {
            colorHex: '#F9F0EA',
            colorCode: 'GCI-1108',
        },
        {
            colorHex: '#FCD04D',
            colorCode: 'GCI-1016',
        },
        {
            colorHex: '#F35B19',
            colorCode: 'GCI-1107',
        },
        {
            colorHex: '#EC9263',
            colorCode: 'GCI-1020',
        },
        {
            colorHex: '#FDE0E3',
            colorCode: 'GCI-1022',
        },
        {
            colorHex: '#FBC15E',
            colorCode: 'GCI-1014',
        },
        {
            colorHex: '#F24E1B',
            colorCode: 'GCI-1030',
        },
        {
            colorHex: '#F3602A',
            colorCode: 'GCI-1029',
        },
        {
            colorHex: '#FCCED6',
            colorCode: 'GCI-1104',
        },
        {
            colorHex: '#F9D8AE',
            colorCode: 'GCI-1007',
        },
        {
            colorHex: '#BB8577',
            colorCode: 'GCI-1081',
        },
        {
            colorHex: '#F8A0BD',
            colorCode: 'GCI-1042',
        },
        {
            colorHex: '#FAB1DC',
            colorCode: 'GCI-1046',
        },
        {
            colorHex: '#FCD2AB',
            colorCode: 'GCI-1005',
        },
        {
            colorHex: '#C88274',
            colorCode: 'GCI-1082',
        },
        {
            colorHex: '#F897B5',
            colorCode: 'GCI-1043',
        },
        {
            colorHex: '#F7A8D8',
            colorCode: 'GCI-1041',
        },
        {
            colorHex: '#E0C996',
            colorCode: 'GCI-1008',
        },
        {
            colorHex: '#AE6856',
            colorCode: 'GCI-1083',
        },
        {
            colorHex: '#F03784',
            colorCode: 'GCI-1045',
        },
        {
            colorHex: '#C86294',
            colorCode: 'GCI-1044',
        },
        {
            colorHex: '#B18F71',
            colorCode: 'GCI-1009',
        },
        {
            colorHex: '#965A52',
            colorCode: 'GCI-1084',
        },
        {
            colorHex: '#EF2579',
            colorCode: 'GCI-1105',
        },
        {
            colorHex: '#E83989',
            colorCode: 'GCI-1124',
        },
        {
            colorHex: '#967F75',
            colorCode: 'GCI-1010',
        },
        {
            colorHex: '#6B362F',
            colorCode: 'GCI-1085',
        },
        {
            colorHex: '#B71D4D',
            colorCode: 'GCI-1091',
        },
        {
            colorHex: '#E23283',
            colorCode: 'GCI-1035',
        },
        {
            colorHex: '#D81A34',
            colorCode: 'GCI-1110',
        },
        {
            colorHex: '#FCF5F7',
            colorCode: 'GCI-1021',
        },
        {
            colorHex: '#FACFEA',
            colorCode: 'GCI-1033',
        },
        {
            colorHex: '#EEFAFD',
            colorCode: 'GCI-1051',
        },
        {
            colorHex: '#9C2E3A',
            colorCode: 'GCI-1090',
        },
        {
            colorHex: '#FCD1E2',
            colorCode: 'GCI-1109',
        },
        {
            colorHex: '#FCCBE8',
            colorCode: 'GCI-1037',
        },
        {
            colorHex: '#B4E7FA',
            colorCode: 'GCI-1054',
        },
        {
            colorHex: '#B21E3A',
            colorCode: 'GCI-1095',
        },
        {
            colorHex: '#FCCFE2',
            colorCode: 'GCI-1114',
        },
        {
            colorHex: '#F78ACA',
            colorCode: 'GCI-1034',
        },
        {
            colorHex: '#76CCEF',
            colorCode: 'GCI-1055',
        },
        {
            colorHex: '#732631',
            colorCode: 'GCI-1093',
        },
        {
            colorHex: '#927FA1',
            colorCode: 'GCI-1049',
        },
        {
            colorHex: '#B75391',
            colorCode: 'GCI-1040',
        },
        {
            colorHex: '#233E77',
            colorCode: 'GCI-1120',
        },
        {
            colorHex: '#EF2359',
            colorCode: 'GCI-1086',
        },
        {
            colorHex: '#FEF8FC',
            colorCode: 'GCI-1031',
        },
        {
            colorHex: '#E1DAF1',
            colorCode: 'GCI-1036',
        },
        {
            colorHex: '#C7EDF8',
            colorCode: 'GCI-1052',
        },
        {
            colorHex: '#EE1D69',
            colorCode: 'GCI-1088',
        },
        {
            colorHex: '#FDD8EE',
            colorCode: 'GCI-1032',
        },
        {
            colorHex: '#C5BAE3',
            colorCode: 'GCI-1038',
        },
        {
            colorHex: '#D0F0F8',
            colorCode: 'GCI-1053',
        },
        {
            colorHex: '#E31B50',
            colorCode: 'GCI-1087',
        },
        {
            colorHex: '#FAB5DE',
            colorCode: 'GCI-1047',
        },
        {
            colorHex: '#AFA8D8',
            colorCode: 'GCI-1039',
        },
        {
            colorHex: '#3D94B7',
            colorCode: 'GCI-1057',
        },
        {
            colorHex: '#DF1A32',
            colorCode: 'GCI-1089',
        },
        {
            colorHex: '#F896D0',
            colorCode: 'GCI-1048',
        },
        {
            colorHex: '#6159AC',
            colorCode: 'GCI-1115',
        },
        {
            colorHex: '#2E7191',
            colorCode: 'GCI-1058',
        },
        {
            colorHex: '#AF173D',
            colorCode: 'GCI-1092',
        },
        {
            colorHex: '#48263C',
            colorCode: 'GCI-1094',
        },
        {
            colorHex: '#352C4F',
            colorCode: 'GCI-1050',
        },
        {
            colorHex: '#1D5C9D',
            colorCode: 'GCI-1060',
        },
        {
            colorHex: '#FBFDEC',
            colorCode: 'GCI-1112',
        },
        {
            colorHex: '#E3E3CE',
            colorCode: 'GCI-1113',
        },
        {
            colorHex: '#E8E9E7',
            colorCode: 'GCI-11096',
        },
        {
            colorHex: '#E9F6D7',
            colorCode: 'GCI-1061',
        },
        {
            colorHex: '#DFE7D5',
            colorCode: 'GCI-1118',
        },
        {
            colorHex: '#DCDBDA',
            colorCode: 'GCI-1097',
        },
        {
            colorHex: '#C3E8A6',
            colorCode: 'GCI-1071',
        },
        {
            colorHex: '#E3E1CF',
            colorCode: 'GCI-1123',
        },
        {
            colorHex: '#C2C1BF',
            colorCode: 'GCI-1098',
        },
        {
            colorHex: '#FBFBEC',
            colorCode: 'GCI-1003',
        },
        {
            colorHex: '#99A58C',
            colorCode: 'GCI-1078',
        },
        {
            colorHex: '#767C5B',
            colorCode: 'GCI-1080',
        },
        {
            colorHex: '#8C8C8B',
            colorCode: 'GCI-1100',
        },
        {
            colorHex: '#FCFCD6',
            colorCode: 'GCI-1004',
        },
        {
            colorHex: '#DDF4F4',
            colorCode: 'GCI-1062',
        },
        {
            colorHex: '#EAF8F5',
            colorCode: 'GCI-1067',
        },
        {
            colorHex: '#99D873',
            colorCode: 'GCI-1111',
        },
        {
            colorHex: '#F9F346',
            colorCode: 'GCI-1015',
        },
        {
            colorHex: '#CBEEEC',
            colorCode: 'GCI-1063',
        },
        {
            colorHex: '#E1F4E4',
            colorCode: 'GCI-1066',
        },
        {
            colorHex: '#66C877',
            colorCode: 'GCI-1072',
        },
        {
            colorHex: '#E5EC22',
            colorCode: 'GCI-1121',
        },
        {
            colorHex: '#A9E2DE',
            colorCode: 'GCI-1069',
        },
        {
            colorHex: '#BDE7BA',
            colorCode: 'GCI-1064',
        },
        {
            colorHex: '#2AB45D',
            colorCode: 'GCI-1073',
        },
        {
            colorHex: '#E4EA08',
            colorCode: 'GCI-1102',
        },
        {
            colorHex: '#98DCCB',
            colorCode: 'GCI-1076',
        },
        {
            colorHex: '#A1DA9D',
            colorCode: 'GCI-1065',
        },
        {
            colorHex: '#2C7031',
            colorCode: 'GCI-1074',
        },
        {
            colorHex: '#E4EA08',
            colorCode: 'GCI-1116',
        },
        {
            colorHex: '#6CC3A9',
            colorCode: 'GCI-1077',
        },
        {
            colorHex: '#58AB93',
            colorCode: 'GCI-1070',
        },
        {
            colorHex: '#2F582A',
            colorCode: 'GCI-1075',
        },
        {
            colorHex: '#7DCC28',
            colorCode: 'GCI-1106',
        }
    ]

    const changeColor = (color) => {
        document.querySelector(selectedWall).style.background = color
    }

    var previousColor = null;
    const changeCodeColors = (idName, e) => {
        e.target.style.color = '#000'

        var previousSpan = null;

        if (previousColor == null) {
            previousColor = idName;
        }

        previousSpan = document.getElementById(previousColor)
        previousSpan.style.color = previousColor;
        previousColor = idName;
    }

    return (
        <>
            <div id="visualizer" className="section">
                <div className="visualizer-inner" style={{ paddingTop: "3rem", marginBottom: '5px'}}>
                    <div className="inner-wide">
                        <div id="visualizer__custom">
                            <div className="column left-pane animate" style={{ textAlign: 'center'}}>
                                <h3 style={{ marginBottom: '10px'}}>الألوان</h3>
                                <h6>إختر لونك المفضل</h6>
                                <br></br>
                                <div className="colors">
                                    {colors.map(c => (
                                        <a 
                                         className="swatch"
                                         onClick={() => changeColor(c.colorHex)} 
                                         style={{ backgroundColor: c.colorHex, display: "inline-flex", justifyContent: "center", alignItems: "center" }}
                                        >
                                            <span
                                                id={c.colorHex}
                                                style={{ padding: "50% 0", width: "100%", textAlign: "center", color: "#fff", fontWeight: "lighter", fontSize: "11px", color: c.colorHex }}
                                                onClick={(e) => changeCodeColors(c.colorHex, e)}
                                                // onClick={e => e.target.style.color = '#fff'}
                                                // onMouseLeave={e => e.target.style.color = c.colorHex}
                                                >
                                                    {c.colorCode}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div
                                className="middle-pane animate"
                                style={{
                                    opacity: 1,
                                    visibility: "inherit",
                                    transform: "translate(0px, 0px)",
                                    textAlign: "center",
                                }}
                            >
                                <h3 style={{ marginBottom: '10px'}}>إستكشف</h3>
                                <h6>إضغط على الحائط لإختيار اللون المناسب لك</h6>
                                <br></br>
                                {/* <h2>EXPLORE</h2> */}
                                {/* <p>Click on the walls to explore a space that suits your style.</p> */}
                                <div className="holder">
                                    <div
                                        id="room"
                                    >
                                        <img
                                            src={base}
                                        // style={{
                                        //     width: "850px",
                                        //     height: "650px",
                                        // }}
                                        />
                                        <div
                                            id="wall1"
                                            style={{
                                                backgroundColor: wall1Color,
                                                // width: "850px",
                                                // height: "650px",
                                                // mask: url(#mymask);
                                                "-webkit-mask-box-image": `url(${wall1})`,
                                            }}
                                        ></div>
                                        <div
                                            id="wall2"
                                            style={{
                                                backgroundColor: wall2Color,
                                                // width: "850px",
                                                // height: "650px",
                                                // mask: url(#mymask);
                                                "-webkit-mask-box-image": `url(${wall2})`,
                                            }}
                                        ></div>
                                        <div onClick={() => setSelectedWall('#wall1')} className="wall-selector" style={{ width: left }}></div>
                                        <div onClick={() => setSelectedWall('#wall2')} className="wall-selector left" style={{ width: right }}></div>
                                        <img
                                            id="overlay"
                                            src={highlights}
                                            style={{
                                                // width: "850px",
                                                // height: "650px",
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="column right-pane animate " style={{ textAlign: "center"}}>
                                <span>
                                    <h4 style={{ marginBottom: '10px'}}>إختر غرفة</h4>
                                    <h6>إختر غرفة وابدأ بالدهان</h6>
                                    <br></br>
                                </span>
                                {/* <h4>Select Room</h4> */}
                                <div className="rooms">
                                    <div className="room-image">
                                        <Link
                                            href="/ar/pages/other/visualizer?room=living-room"
                                            as={process.env.PUBLIC_URL + "/ar/pages/other/visualizer?room=living-room"}
                                        >
                                            <div style={{width: '100%', height: '150px', position: 'relative'}}>
                              <Image src="/assets/images/colors/visualizer/living-room/base.png" alt="" layout='fill'
                              objectFit='cover'/>
                          </div>
                                        </Link>
                                    </div>
                                    <div className="room-image">
                                        <Link
                                            href="/ar/pages/other/visualizer?room=kitchen"
                                            as={process.env.PUBLIC_URL + "/ar/pages/other/visualizer?room=kitchen"}
                                        >
                                            <div style={{width: '100%', height: '150px', position: 'relative'}}>
                              <Image src="/assets/images/colors/visualizer/kitchen/base.png" alt="" layout='fill'
                              objectFit='cover'/>
                          </div>
                                        </Link>
                                    </div>
                                    <div className="room-image">
                                        <Link
                                            href="/ar/pages/other/visualizer?room=bedroom"
                                            as={process.env.PUBLIC_URL + "/ar/pages/other/visualizer?room=bedroom"}
                                        >
                                            <div style={{width: '100%', height: '150px', position: 'relative'}}>
                              <Image src="/assets/images/colors/visualizer/bedroom-temp/base.png" alt="" layout='fill'
                              objectFit='cover'/>
                          </div>
                                        </Link>
                                    </div>
                                    <div className="room-image">
                                        <Link
                                            href="/ar/pages/other/visualizer?room=kids-room"
                                            as={process.env.PUBLIC_URL + "/ar/pages/other/visualizer?room=kids-room"}
                                        >
                                            <div style={{width: '100%', height: '150px', position: 'relative'}}>
                              <Image src="/assets/images/colors/visualizer/kids-room/base.png" alt="" layout='fill'
                              objectFit='cover'/>
                          </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}

export default dynamic(() => Promise.resolve(Visualizer), {
    ssr: false,
});